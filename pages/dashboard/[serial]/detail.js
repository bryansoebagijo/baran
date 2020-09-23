import React, {useState} from 'react';
import Head from '../../../components/head';
import Sidebar from '../../../components/sidebar';
import Navpil from '../../../components/navpil';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'react-chartjs-2';

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

const dataBar = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label:'data 1',
            barPercentage:0.3,
            data: [51, 29, 72, 46, 83, 10, 67],
            borderWidth: 0,
            backgroundColor: '#04ACD4',
            fill:false,
            pointBackgroundColor:'#04ACD4',
            pointHoverBackgroundColor: 'rgba(90,192,255,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
        },
        {
            label:'data 2',
            barPercentage:0.3,
            data: [151, 129, 172, 146, 183, 110, 167],
            borderWidth: 0,
            backgroundColor: '#F15822',
            fill:false,
            pointBackgroundColor:'#F15822',
            pointHoverBackgroundColor: 'rgba(90,192,255,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
        }
    ]
};

export default function detail() {

    const[time, setTime] = useState('daily')

    const icon1 = require('../../../public/circuit-svgrepo-com.svg');
    const icon2 = require('../../../public/hardware-svgrepo-com.svg');

    const handlerTime = (time) =>{
        setTime(time);
        console.log(time);
    };

    const route = useRouter();
    const {serial} = route.query;

    return (
        <div className="dashboard">
            <Head props={{ description: "power detail" }}></Head>
            <div className="container-fluid wrapper-dashboard">
                <div className="row table-row">
                    <div className="col-md-2 col-sm-1 col-1 sidebarCol" id="test">
                        <Sidebar>
                            <ul className="navbar-nav navi">
                                <li className="active"><Link href="#"><a><i className="fa fa-tachometer" aria-hidden="true"><span>Dashboard</span></i></a></Link></li>
                                <li className="nav-items"><Link href="#"><a><i className="fa fa-users" aria-hidden="true"><span>Product Details</span></i></a></Link></li>
                                <li className="nav-items"><Link href="#"><a><i className="fa fa-list-alt" aria-hidden="true"><span>Contact us</span></i></a></Link></li>
                                <hr className="sidebar-divider"></hr>

                                {/* <li className="nav-items"><Link href="#"><a><i className="fa fa-cog" aria-hidden="true"><span>Main Setting</span></i></a></Link></li>
                                        <li className="nav-items"><Link href="#"><a><i className="fa fa-plus-square" aria-hidden="true"><span>Integrations</span></i></a></Link></li> */}
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
                                <div className='col-12 col-overall'>
                                    <div className="container-fluid overall">
                                        <div className="overall-header">
                                            <h3>Hardware Performance</h3>
                                        </div>
                                        <div className="bar-chart">
                                            <Bar data={dataBar} className='bar-font' options={
                                                {
                                                    maintainAspectRatio: false,
                                                    cornerRadius: 20,
                                                    responsive: true,
                                                    legend: {
                                                        display: true,
                                                        labels:{
                                                            fontColor:"#A6ACBE",
                                                            usePointStyle:true,
                                                            padding:20
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
                                                            stacked:true

                                                        }],

                                                        xAxes: [{
                                                            //barPercentage :0.3,
                                                            gridLines: {
                                                                display: false
                                                            },
                                                            stacked:true,
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

                            <div className="row power-detail">
                                <div className="col-md-6 col-sm-6 col-12 col-detail">
                                    <div className="container-fluid powerwall-detail">
                                        <div className="powerwall-header">
                                            <h2>Powerwall Details</h2>
                                        </div>
                                        <div className='power-datail-img'>
                                            <img className='img-fluid detail-img' alt='baran-powerwall' src={''}></img>
                                        </div>
                                        <div className="d-table powerwall-info">
                                            <div className="d-table-row">
                                                <div className="d-table-cell">
                                                    <ul>
                                                        <li>Serial Number <span>:</span></li>
                                                        <li>Warranty Number <span>:</span></li>
                                                        <li>Batch Number <span>:</span></li>
                                                        <li>Date Purchased <span>:</span></li>
                                                    </ul>
                                                </div>
                                                <div className="d-table-cell">
                                                    <ul className="code">
                                                        <li>{serial}</li>
                                                        <li>176-UV-7283-9IND</li>
                                                        <li>S71-0207</li>
                                                        <li>12 August 2020</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-sm-6 col-12 col-log">
                                    <div className="container-fluid system-log">
                                        <div className="log-header">
                                            <h3>System Logs</h3>
                                        </div>
                                        <div className="d-table">
                                            <div className="d-table-row">
                                                <div className="container-fluid system-error">
                                                    <div className="row system-error-row">
                                                        <div className="col-md-4 col-sm-4 col-4 icons">
                                                            <div className="container-fluid icon">
                                                                <img src={icon1} alt="icon" className='img-fluid'></img>
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
                        <hr/>
                    </div>
                </div>
            </div>
        </div>

    )
}
