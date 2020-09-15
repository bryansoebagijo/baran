import React, { useState, useEffect } from 'react'
import Head from '../../components/head'
import Link from 'next/link'
import {Doughnut, Line, Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'react-chartjs-2';
import {useRouter} from 'next/router';
import Sidebar from '../../components/sidebar';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import Navpil from '../../components/navpil';


//defaults.global.defaultFontSize = '5px';

ChartJS.elements.Rectangle.prototype.draw = function ReDraw() {
    const { ctx } = this._chart;
    const vm = this._view;
    let left; let right; let top; let bottom; let signX; let signY; let borderSkipped
    let { borderWidth } = vm;
  
    // If radius is less than 0 or is large enough to cause drawing errors a max
    // radius is imposed. If cornerRadius is not defined set it to 0.
    let { cornerRadius } = this._chart.config.options;
  
    if (cornerRadius < 0) { cornerRadius = 0 }
    if (typeof cornerRadius === 'undefined') { cornerRadius = 0 }
  
    if (!vm.horizontal) {
      left = vm.x - vm.width / 2;
      right = vm.x + vm.width / 2;
      top = vm.y;
      bottom = vm.base;
      signX = 1;
      signY = bottom > top ? 1 : -1;
      borderSkipped = vm.borderSkipped || 'bottom';
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

    if (height < 0) {
      // Negative values in a standard bar chart
      const x_tl = x; const x_tr = x + width;
      const y_tl = y + height; const y_tr = y + height;

      const x_bl = x; const x_br = x + width;
      const y_bl = y; const y_br = y;

      // Draw
      ctx.moveTo(x_bl + radius, y_bl);
      ctx.lineTo(x_br - radius, y_br);
      ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);
      ctx.lineTo(x_tr, y_tr + radius);
      ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr);
      ctx.lineTo(x_tl + radius, y_tl);
      ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);
      ctx.lineTo(x_bl, y_bl - radius);
      ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);
    } else {
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
}

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

const dataBar = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            barPercentage:0.3,
            data: [151, 129, 172, 146, 183, 110, 67],
            borderWidth: 0,
            backgroundColor: '#04ACD4',
            fill:false,
            pointBackgroundColor:'#04ACD4',
            pointHoverBackgroundColor: 'rgba(90,192,255,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
        }
    ]
};

const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

function dashboard(props) {

    const[time, setTime] = useState('daily')

    const handlerTime = (time) =>{
        setTime(time);
    };

    useEffect(()=>{
        console.log(time);
    },[time]);

    const dataDoughnut = {
        labels: [
          'Red',
          'Green',
          'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        borderWidth: 0,
        radius: 50,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }],
      text:'75%',
    };

    const route = useRouter();
    const {serial} = route.query

    useEffect(()=>{
        console.log(serial);
    },[])

    // const username = useSelector(state =>{
    //     return state.state.username
    // })

    // console.log(username);

    // useEffect(()=>{
    //     if(!username){
    //         alert('you are not loggin yet!')
    //         route.replace({
    //             pathname: '/'
    //         })
    //     }
    // },[]);

    const icon1 = require('../../public/circuit-svgrepo-com.svg');
    const icon2 = require('../../public/hardware-svgrepo-com.svg');

    /*const useWidth = () => {
        const [width, setWidth] = useState(0);
        const handleResize = () => setWidth(window.innerWidth);
        useEffect(() => {
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, [width]);
        return width;
      };

    const windowWidth = useWidth();
    const fontbar = windowWidth*0.01;*/

    console.log(props)
    
    // const url = 'https://api.jikan.moe/v3/top/anime/1/airing';
    const url = 'https://api.jikan.moe/v3/top/anime/1/airing';

    const fetcher = (...args) => fetch(...args).then(res=>res.json())
    // const fetcher = ()=>{
    //     fetch(url,{
    //         method: 'POST',
    //         body: JSON.stringify(dummy),
    //         headers:{'Content-Type':'application/json'}
    //     }).then((res)=>res.json)
    // }
    
    const {data, error} = useSWR(url, fetcher, {refreshInterval:5000})

    if(data)console.log(data.top)
    if(error)console.log(error)

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
                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-signal" aria-hidden="true"><span>Usage Details</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-tasks" aria-hidden="true"><span>System Logs</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-list-alt" aria-hidden="true"><span>Contact us</span></i></a></Link></li>
                                        <hr className="sidebar-divider"></hr>

                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-cog" aria-hidden="true"><span>Main Setting</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-plus-square" aria-hidden="true"><span>Integrations</span></i></a></Link></li>
                                    </ul>
                                </Sidebar>
                            </div>
                            <div className="col-md-10 col-sm-11 col-11 page-content">
                                <div className="container-fluid">
                                    <div className="page-header">
                                        <h2>Your Dashboard</h2>
                                    </div>

                                    <Navpil handlerTime={handlerTime} time={time}></Navpil>

                                    <div className="row chart">
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 colDoughnut">
                                            <div className="container-fluid chart-state">
                                                <div className="chart-state-header">
                                                    <h3>State of Charge</h3>
                                                    <div className="donut">
                                                        <Doughnut data={dataDoughnut} width={100} height={100} options={
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
                                                    {/*<div className="d-table">
                                                                                    <div className="d-table-row">
                                                                                        <div className="d-table-cell">
                                                                                            <ul className="legend-doughnut">
                                                                                                <li className="Red">Conventional Grid </li>
                                                                                                <li className="Green">Energy Consumed </li>
                                                                                                <li className="Blue">Solar Power</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div className="d-table-cell">
                                                                                            <ul className="percent-doughnut">
                                                                                                    <li className="Red">23 Hrs <span>(23%)</span></li>
                                                                                                    <li className="Green">45 Hrs <span>(45%)</span></li>
                                                                                                    <li className="Blue">32 Hrs <span>(32%)</span></li>
                                                                                                </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-6 col-12 colUsage">
                                            <div className="container-fluid total-usage">
                                                <div className="usage-header">
                                                    <h3>Total usage</h3>
                                                    <div className="line">
                                                        <Line data={dataLine} options={
                                                            {
        
                                                                responsive:true,
                                                                maintainAspectRatio:false,
                                                                legend:{
                                                                    display:false
                                                                },
                                                                scales: {
                                                                    yAxes:[{
                                                                        position:"right",
                                                                        scaleLabel: {
                                                                            display: false,
                                                                            labelString:"Watt Hours"
                                                                        },
                                                                        gridLines:{
                                                                            drawBorder:true,
                                                                            lineWidth:0.1,
                                                                            color:"gray",
                                                                            zeroLineColor:"white"
                                                                        },
                                                                        ticks:{
                                                                            padding:10,
                                                                            //labelOffset:-10,
                                                                            stepSize:10,
                                                                            callback: function(value,index, values){
                                                                                return value + " Wh";
                                                                            }
                                                                        }
                                                                    }],
                                                                    xAxes:[{
                                                                        gridLines:{
                                                                            display: false
                                                                        },
                                                                        ticks: {
                                                                            maxRotation:0,
                                                                            autoSkip:true,
                                                                            maxTicksLimit:1
                                                                            
                                                                        }
                                                                    }]
                                                                }
                                                            }
                                                        }></Line>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row power-detail">
                                        <div className="col-md-4 col-sm-6 col-12 col-detail">
                                            <div className="container-fluid powerwall-detail">
                                                <div className="powerwall-header">
                                                    <h2>Powerwall Details</h2>
                                                </div>
                                                <div className="d-table powerwall-info">
                                                    <div className="d-table-row">
                                                        <div className="d-table-cell">
                                                            <ul>
                                                                <li>Serial Number <span>:</span></li>
                                                                <li>Warranty Number <span>:</span></li>
                                                                <li>Batch Number <span>:</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-table-cell">
                                                            <ul className="code">
                                                                <li>{serial}</li>
                                                                <li>176-UV-7283-9IND</li>
                                                                <li>S71-0207</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-3 col-12 col-overall">
                                            <div className="container-fluid overall">
                                                <div className="overall-header">
                                                    <h3>Overall Storage</h3>
                                                </div>
                                                <div className="bar-chart">
                                                    <Bar data={dataBar} options={
                                                        {
                                                            maintainAspectRatio:false,
                                                            cornerRadius:8,
                                                            responsive:true,
                                                            legend:{
                                                                display:false
                                                            },
                                                            scales:{
                                                                yAxes:[{
                                                                    gridLines:{
                                                                        display:false
                                                                    },
                                                                    ticks:{
                                                                        display:false
                                                                    }
                                                                }],
        
                                                                xAxes:[{
                                                                    //barPercentage :0.3,
                                                                    gridLines:{
                                                                        display:false
                                                                    },
                                                                    ticks:{
                                                                        autoSkip:true,
                                                                        padding:15,
                                                                        maxRotation:10,
                                                                        fontSize: 10,
                                                                        maxTicksLimit:2,
                                                                         
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }></Bar>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-3 col-12 col-log">
                                            <div className="container-fluid system-log">
                                                <div className="log-header">
                                                    <h3>System Logs</h3>
                                                </div>
                                                <div className="d-table">
                                                    <div className="d-table-row">
                                                        <div className="container-fluid system-error">
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-4 col-4 icons">
                                                                    <div className="container-fluid icon">
                                                                        <img src={icon1} alt="icon"></img>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 col-sm-8 col-8 titles">
                                                                    <h4> System Error <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span></h4>
                                                                    <p>Short Circuit <span>20 June</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-table-row">
                                                        <div className="container-fluid system-error">
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-4 col-4 icons">
                                                                    <div className="container-fluid icon">
                                                                        <img src={icon2} alt="icon"></img>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 col-sm-8 col-8 titles">
                                                                    <h4> Hardware Error <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span></h4>
                                                                    <p>Antena Malfunction <span>17 June</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-table-row">
                                                        <div className="container-fluid system-error">
                                                            <div className="row">
                                                                <div className="col-md-4 col-sm-4 col-4 icons">
                                                                    <div className="container-fluid icon">
                                                                        <img src={icon1} alt="icon"></img>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 col-sm-8 col-8 titles">
                                                                    <h4> System Error <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span></h4>
                                                                    <p>Update New OS <span>15 June</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
