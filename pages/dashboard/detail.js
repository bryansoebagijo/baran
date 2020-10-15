import React, { useState, useEffect } from 'react';
import Head from '../../components/head';
import Sidebar from '../../components/sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner'

import { useSelector } from 'react-redux';

export default function detail() {

    const [time, setTime] = useState('today')
    const [user, setuser] = useState('')

    const icon1 = require('../../public/circuit-svgrepo-com.svg');
    const icon2 = require('../../public/hardware-svgrepo-com.svg');

    const baranPW = require('../../public/BaranPW.png')

    const username = useSelector(state => {
        return state.state.username
    })

    useEffect(() => {
        if (!username) {
            alert('you are not loggin yet!')
            route.replace({
                pathname: '/'
            })
        }
        else {
            setuser(username)
        }
    }, []);

    const route = useRouter();
    const { serial } = route.query;

    return (
        <div className="dashboard">
            <Head props={{ description: "power detail" }}></Head>
            <div className="container-fluid wrapper-dashboard">
                <div className="row table-row">
                    <div className="col-md-2 col-sm-1 col-1 sidebarCol" id="test">
                        <Sidebar>
                            <ul className="navbar-nav navi">
                                <li className="nav-items"><Link href={{ pathname: "/dashboard", query: { serial: serial } }}><a><i className="fa fa-tachometer" aria-hidden="true"><span>Dashboard</span></i></a></Link></li>
                                <li className="active"><Link href="#"><a><i className="fa fa-users" aria-hidden="true"><span>Product Details</span></i></a></Link></li>
                                <li className="nav-items"><Link href={{ pathname: "/dashboard/contact", query: { serial: serial } }}><a><i className="fa fa-list-alt" aria-hidden="true"><span>Contact us</span></i></a></Link></li>
                                <hr className="sidebar-divider"></hr>
                            </ul>
                        </Sidebar>
                    </div>
                    <div className="col-md-10 col-sm-11 col-11 page-content">
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className='row'>
                                    <div className='col-9 col-dashboard-header'>
                                        <h2>Product Details</h2>
                                    </div>
                                    <div className='col-3 col-product-button'>
                                        <Link href='/products'>
                                            <a>
                                                Your Product <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='row user-intro'>
                                <div className="col-12 col-user-intro">
                                    <div className="row user-intro-inside">
                                        <div className='col-6 user-section'>
                                            <h2>Hello {user},</h2>
                                            <p>Your powerwall has emmited bekelmmsodmv sindvimsmdvklskd nsimvsodimdnn sdimvso sidimvspsmd somvsokmdo jsksjfkjadkja lskakjsld ksdiaj askdakd kjasdkja akmsdlak jasdajn aokmsdkam asjkdak maksdaaksdlalkmasdlkml.
                                            </p>
                                        </div>
                                        <div className='col-6 powerwall-image-section'>
                                            <div className='container-fluid half-circle' />
                                            <img src={baranPW} alt="powerwall" className='img-fluid powerwall-img' />
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
                        <hr />
                    </div>
                </div>
            </div>
        </div>

    )
}

// detail.getInitialProps = async ({query}) =>{
//     const {serial} = query

//     return {serial}
// }
