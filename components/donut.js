import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS } from 'react-chartjs-2';
 
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

 function donut(data) {
     return (
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
     )
 }
 
 export default donut
 
