import React, { useState, useEffect, useRef } from 'react'
import Head from '../../components/head'
import Link from 'next/link'
import {Doughnut, Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'react-chartjs-2';
import {useRouter} from 'next/router';
import Sidebar from '../../components/sidebar';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import Navpil from '../../components/navpil';
import Loader from 'react-loader-spinner'
import {Bar} from 'react-chartjs-2';

ChartJS.elements.Rectangle.prototype.draw = function ReDraw() {
    const { ctx } = this._chart;
    const vm = this._view;
    let left; let right; let top; let bottom; let signX; let signY; let borderSkipped
    let { borderWidth } = vm;
  
    // If radius is less than 0 or is large enough to cause drawing errors a max
    // radius is imposed. If cornerRadius is not defined set it to 0.
    let { cornerRadius } = this._chart.config.options;
    var fullCornerRadius = this._chart.config.options.fullCornerRadius;
    var stackedRounded = this._chart.config.options.stackedRounded;
    var typeOfChart = this._chart.config.type;
  
    if (cornerRadius < 0) { cornerRadius = 0 }
    if (typeof cornerRadius === 'undefined') { cornerRadius = 0 }

    if (typeof stackedRounded == 'undefined') {
        stackedRounded = false;
      }

    if (typeof fullCornerRadius == 'undefined') {
        fullCornerRadius = false;
      }

    if (!vm.horizontal) {
      left = vm.x - vm.width / 2;
      right = vm.x + vm.width / 2;
      top = vm.y;
      bottom = vm.base;
      signX = 1;
      signY = bottom > top ? 1 : -1;
      borderSkipped = vm.borderSkipped || 'bottom';
    }
    else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }
  
    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
      // borderWidth shold be less than bar width and bar height.
      const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
      borderWidth = borderWidth > barSize ? barSize : borderWidth;
      const halfStroke = borderWidth / 2;
      // Adjust borderWidth when bar top position is near vm.base(zero).
      const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
      const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
      const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
      const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
      // not become a vertical line?
      if (borderLeft !== borderRight) {
        top = borderTop;
        bottom = borderBottom;
      }
      // not become a horizontal line?
      if (borderTop !== borderBottom) {
        left = borderLeft;
        right = borderRight;
      }
    }
  
    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;
  
    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    const corners = [
      [left, bottom],
      [left, top],
      [right, top],
      [right, bottom],
    ]
  
    // Find first (starting) corner with fallback to 'bottom'
    const borders = ['bottom', 'left', 'top', 'right'];
    let startCorner = borders.indexOf(borderSkipped, 0)
    if (startCorner === -1) {
      startCorner = 0;
    }
  
    function cornerAt(index) {
      return corners[(startCorner + index) % 4];
    }
  
    // Draw rectangle from 'startCorner'
    let corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);
  
    for (let i = 1; i < 4; i++) {
      corner = cornerAt(i);
      let nextCornerId = i + 1;
      if (nextCornerId === 4) {
        nextCornerId = 0;
      }
  
      const width = corners[2][0] - corners[1][0];
      const height = corners[0][1] - corners[1][1];
      const x = corners[1][0];
      const y = corners[1][1];
  
      let radius = cornerRadius;
  
      // Fix radius being too large
      if (radius > Math.abs(height) / 1.5) {
        radius = Math.floor(Math.abs(height) / 1.5);
      }
      if (radius > Math.abs(width) / 1.5) {
        radius = Math.floor(Math.abs(width) / 1.5);
    }

    var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
      if (height < 0) {
        // Negative values in a standard bar chart
        x_tl = x;
        x_tr = x + width;
        y_tl = y + height;
        y_tr = y + height;

        x_bl = x;
        x_br = x + width;
        y_bl = y;
        y_br = y;

        // Draw
        ctx.moveTo(x_bl + radius, y_bl);

        ctx.lineTo(x_br - radius, y_br);

        // bottom right
        ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);


        ctx.lineTo(x_tr, y_tr + radius);

        // top right
        fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);


        ctx.lineTo(x_tl + radius, y_tl);

        // top left
        fullCornerRadius ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius) : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);


        ctx.lineTo(x_bl, y_bl - radius);

        //  bottom left
        ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);

      } else if (width < 0) {
        // Negative values in a horizontal bar chart
        x_tl = x + width;
        x_tr = x;
        y_tl = y;
        y_tr = y;

        x_bl = x + width;
        x_br = x;
        y_bl = y + height;
        y_br = y + height;

        // Draw
        ctx.moveTo(x_bl + radius, y_bl);

        ctx.lineTo(x_br - radius, y_br);

        //  Bottom right corner
        fullCornerRadius ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius) : ctx.lineTo(x_br, y_br, x_br, y_br - radius);

        ctx.lineTo(x_tr, y_tr + radius);

        // top right Corner
        fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);

        ctx.lineTo(x_tl + radius, y_tl);

        // top left corner
        ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);

        ctx.lineTo(x_bl, y_bl - radius);

        //  bttom left corner
        ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);

      } else {
      
          var lastVisible = 0;
        for (var findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
          if (!this._chart.getDatasetMeta(findLast).hidden) {
            lastVisible = findLast;
          }
        }
        var rounded = this._datasetIndex === lastVisible;

        if (rounded) {
        //Positive Value
          ctx.moveTo(x + radius, y);

          ctx.lineTo(x + width - radius, y);

          // top right
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);


          ctx.lineTo(x + width, y + height - radius);

          // bottom right
          if (fullCornerRadius || typeOfChart == 'horizontalBar')
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          else
            ctx.lineTo(x + width, y + height, x + width - radius, y + height);


          ctx.lineTo(x + radius, y + height);

          // bottom left
          if (fullCornerRadius)
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          else
            ctx.lineTo(x, y + height, x, y + height - radius);


          ctx.lineTo(x, y + radius);

          // top left
          if (fullCornerRadius || typeOfChart == 'bar')
            ctx.quadraticCurveTo(x, y, x + radius, y);
          else
            ctx.lineTo(x, y, x + radius, y);
        }
        else {
          ctx.moveTo(x, y);
          ctx.lineTo(x + width, y);
          ctx.lineTo(x + width, y + height);
          ctx.lineTo(x, y + height);
          ctx.lineTo(x, y);
        }
      }
    }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
}

//defaults.global.defaultFontSize = '5px';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = ChartJS.controllers.doughnut.prototype.draw;

ChartJS.helpers.extend(ChartJS.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";
    ctx.fillStyle = 'white';

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

function dashboard(props) {

    const[time, setTime] = useState('today')
    const[user, setuser] = useState('')
    const[dataDough, setDataDough]= useState([])
    const[dataLine, setDataLine] = useState({usage:[], timestamps:[]})
    const[legend, setLegend] = useState([])

    const route = useRouter();
    const {serial} = route.query;

    const handlerTime = (time) =>{
        setTime(time);
        console.log(time);
        // if(time == 'today'){
        //     setDataLine([90, 30, 50, 100, 38, 46, 93])
        // }
        // else {
        //     setDataLine([47, 31, 98, 67, 28, 86, 13])
        // }
    };

    useEffect(()=>{
        console.log(time);
    },[time]);

    const username = useSelector(state =>{
        return state.state.username
    })

    console.log(username);

    useEffect(()=>{
        if(!username){
            alert('you are not loggin yet!')
            // route.replace({
            //     pathname: '/'
            // })
        }
        else{
            setuser(username)
        }
    },[]);

    //console.log(props)
    
    // const url = 'https://api.jikan.moe/v3/top/anime/1/airing';

    if (username) {
        if (time == 'today') {
            const url = `http://192.168.5.73/energies/cdm/${serial}/${time}`;

            const fetcher = (...args) => fetch(...args, { method: 'GET', credentials: 'include' }).then(res => res.json())

            const { data, error } = useSWR(url, fetcher, {
                refreshInterval: 300000,
                dedupingInterval: 300000,
                onSuccess: (newdata) => {
                    setDataLine({usage:newdata.usage, timestamps:newdata.timestamps})
                },
                onError: (error) => {
                    console.log(error);
                    alert('your session is expired!')
                    route.replace({
                        pathname: '/'
                    })
                }
            })
        }
    }

    useEffect(()=>{
        console.log(dataLine);
    },[dataLine])

    const dataBar = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label:'data 1',
                barPercentage:0.3,
                data: [51, 29, 72, 46, 83, 30, 67],
                borderWidth: 0,
                backgroundColor: '#04ACD4',
                fill:false,
                pointBackgroundColor:'#04ACD4',
                pointHoverBackgroundColor: 'rgba(90,192,255,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
            }
            // {
            //     label:'data 2',
            //     barPercentage:0.3,
            //     data: [151, 129, 172, 146, 183, 110, 167],
            //     borderWidth: 0,
            //     backgroundColor: '#F15822',
            //     fill:false,
            //     pointBackgroundColor:'#F15822',
            //     pointHoverBackgroundColor: 'rgba(90,192,255,1)',
            //     pointHoverBorderColor: 'rgba(220,220,220,1)',
            //     pointHoverBorderWidth: 2,
            // }
        ]
    };

    let dataDoughnut = {
        labels: [
            'battery life',
            'battery consumed'
      ],
      datasets: [{
        data: dataDough.length != 0? dataDough:[75,25],
        borderWidth: 0,
        radius: 50,
        backgroundColor: [
            '#9BC53D',
            '#7155A4'
        ],
        hoverBackgroundColor: [
            '#9BC53D',
            '#7155A4'
        ]
      }],
      text:'75%',
    };

    let dataLineChart = {
        labels: dataLine.timestamps? dataLine.timestamps: [],
        datasets: [
            {
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                scaleSteps :20,
                data: dataLine.usage? dataLine.usage: []
            }
        ]
    };

 //       if (username){
            return (
                <div className="dashboard">
                    <Head props={{description:"dashboard"}}></Head>
                    <div className="container-fluid wrapper-dashboard">
                        <div className="row table-row">
                            <div className="col-md-2 col-sm-1 col-1 sidebarCol" id="test">
                                <Sidebar>
                                    <ul className="navbar-nav navi">
                                        <li className="active"><Link href="#"><a><i className="fa fa-tachometer" aria-hidden="true"><span>Dashboard</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="/dashboard/[serial]/detail" as={`/dashboard/${serial}/detail`}><a><i className="fa fa-users" aria-hidden="true"><span>Product Details</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="/dashboard/[serial]/contact" as={`/dashboard/${serial}/contact`}><a><i className="fa fa-list-alt" aria-hidden="true"><span>Contact us</span></i></a></Link></li>
                                        <hr className="sidebar-divider"></hr> 
                                    </ul>
                                </Sidebar>
                            </div>
                            <div className="col-md-10 col-sm-11 col-11 page-content">
                                <div className="container-fluid">
                                    <div className="page-header">
                                        <h2>Your Dashboard</h2>
                                    </div>

                                    <Navpil handlerTime={handlerTime} time={time}></Navpil>

                                    <div className='row hardware'>
                                        <div className="col-12 colUsage">
                                            <div className="container-fluid total-usage">
                                                <div className="usage-header">
                                                    <h3>Total usage</h3>
                                                    <div className="line">
                                                        {dataLine.usage != [] ? <Line data={dataLineChart} options={
                                                            {

                                                                responsive: true,
                                                                maintainAspectRatio: false,
                                                                legend: {
                                                                    display: false
                                                                },
                                                                tooltips:{
                                                                    mode:'label',
                                                                    callbacks:{
                                                                        title: function(tooltipItem, data) {
                                                                            return data.labels[tooltipItem[0].index];
                                                                        },
                                                                
                                                                        label: function(tooltipItem, data) {
                                                                            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' Wh';
                                                                        },
                                                                    }
                                                                },
                                                                scales: {
                                                                    yAxes: [{
                                                                        position: "right",
                                                                        scaleLabel: {
                                                                            display: false,
                                                                            labelString: "Watt Hours"
                                                                        },
                                                                        gridLines: {
                                                                            drawBorder: true,
                                                                            lineWidth: 0.1,
                                                                            color: "gray",
                                                                            zeroLineColor: "white"
                                                                        },
                                                                        ticks: {
                                                                            padding: 10,
                                                                            //labelOffset:-10,
                                                                            autoSkip:true,
                                                                            maxTicksLimit:5,
                                                                            stepSize: 50,
                                                                            callback: function (value, index, values) {
                                                                                return value + " Wh";
                                                                            }
                                                                        }
                                                                    }],
                                                                    xAxes: [{
                                                                        gridLines: {
                                                                            display: false
                                                                        },
                                                                        ticks: {
                                                                            maxRotation: 0,
                                                                            autoSkip: true,
                                                                            maxTicksLimit: 3

                                                                        }
                                                                    }],
                                                                }
                                                            }
                                                        }></Line>
                                                            : <div className='d-flex justify-content-center align-items-center' style={{"width" : "100%"}}><Loader type='ThreeDots' color="#00BFFF" height={60} width={60} /></div>}
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row chart">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 colDoughnut">
                                            <div className="container-fluid chart-state">
                                                <div className="chart-state-header">
                                                    <h3>State of Charge</h3>
                                                    <div className="donut">
                                                        <Doughnut data={dataDoughnut}  width={100} height={100} options={
                                                            {
                                                                responsive: true,
                                                                maintainAspectRatio: false,
                                                                legend: {
                                                                    display: false,
                                                                    position: "bottom",
                                                                    labels: {
                                                                        fontColor: "#f7fcff"
                                                                    }
                                                                },
                                                                cutoutPercentage: 90
                                                            }
                                                        } />
                                                    </div>
                                                    <div className="d-table">
                                                        <div className="d-table-row">
                                                            <div className="d-table-cell">
                                                                <ul className="legend-doughnut">
                                                                    <li className="Green"><span className="green-ball"/>Conventional Grid </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-table-cell">
                                                                <ul className="percent-doughnut">
                                                                    <li className="Green">45 Hrs <span>(45%)</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-8 col-md-8 col-sm-6 col-12 col-overall'>
                                            <div className="container-fluid overall">
                                                <div className="overall-header">
                                                    <h3>Hardware Performance</h3>
                                                </div>
                                                <div className="bar-chart">
                                                    <Bar data={dataBar} className='bar-font' options={
                                                        {
                                                            maintainAspectRatio: false,
                                                            cornerRadius: 10,
                                                            responsive: true,
                                                            legend: {
                                                                display: true,
                                                                labels: {
                                                                    fontColor: "#A6ACBE",
                                                                    usePointStyle: true,
                                                                    padding: 20
                                                                }

                                                            },
                                                            scales: {
                                                                yAxes: [{
                                                                    gridLines: {
                                                                        display: false
                                                                    },
                                                                    ticks: {
                                                                        display: false
                                                                    },
                                                                    // stacked: true

                                                                }],

                                                                xAxes: [{
                                                                    //barPercentage :0.3,
                                                                    gridLines: {
                                                                        display: false
                                                                    },
                                                                    // stacked: true,
                                                                    ticks: {
                                                                        //autoSkip: true,
                                                                        padding: 15,
                                                                        maxRotation: 10,
                                                                        //maxTicksLimit: 2,
                                                                    },

                                                                }]
                                                            },
                                                        }
                                                    }></Bar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

export default dashboard