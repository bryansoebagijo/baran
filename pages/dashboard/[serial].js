import React, { useState, useEffect } from 'react'
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

    const[time, setTime] = useState('daily')
    const[user, setuser] = useState('')
    const[dataDough, setDataDough]= useState([])
    const[dataLine, setDataLine] = useState([])

    const route = useRouter();
    const {serial} = route.query;

    const handlerTime = (time) =>{
        setTime(time);
        console.log(time);
        if(time == 'daily'){
            setDataLine([90, 30, 50, 100, 38, 46, 93])
        }
        else {
            setDataLine([47, 31, 98, 67, 28, 86, 13])
        }
    };

    useEffect(()=>{
        console.log(time);
    },[time]);

    let dataDoughnut = {
        labels: [
          'Red',
          'Green',
          'Yellow'
      ],
      datasets: [{
        data: dataDough.length != 0? dataDough:[300,500,200],
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

    let dataLineChart = {
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
                data: dataLine.length != 0 ?dataLine:[65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    useEffect(()=>{
        console.log(serial);
    },[])

    const username = useSelector(state =>{
        return state.state.username
    })

    console.log(username);

    useEffect(()=>{
        if(!username){
            alert('you are not loggin yet!')
            route.replace({
                pathname: '/'
            })
        }
        else{
            setuser(username)
        }
    },[]);

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

    //console.log(props)
    
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

                                    <div className='row user-intro'>
                                        <div className="col-12 col-user-intro">
                                            <div className="row user-intro-inside">
                                                <div className='col-6 user-section'>
                                                    <h2>Hello {user},</h2>
                                                    <p>Your powerwall has emmited bekelmmsodmv sindvimsmdvklskd nsimvsodimdnn sdimvso sidimvspsmd somvsokmdo jsksjfkjadkja lskakjsld ksdiaj askdakd kjasdkja akmsdlak jasdajn aokmsdkam asjkdak maksdaaksdlalkmasdlkml.
                                                    <Link href =''>
                                                        <a>Product details <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                                    </Link>
                                                    </p>
                                                </div>
                                                <div className='col-6 powerwall-image-section'>
                                                    <div className='container-fluid half-circle' />
                                                    <img src={''} alt="powerwall" className='img-fluid powerwall-img' />
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
                                                        {user?<Line data={dataLineChart} options={
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
                                                        }></Line>:<div className='d-flex justify-content-center' style={{"width" : "100%"}}><Loader type='ThreeDots' color="#00BFFF" height={80} width={80} /></div>}
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
