import React, { useState, useEffect } from 'react'
import Head from '../../components/head';
import Sidebar from '../../components/sidebar';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import useSWR from 'swr';

const isProd = process.env.NODE_ENV === 'production';
const PREFIX = isProd ? 'https://test.vincentreynard.com' : 'http://192.168.5.73'

function contact() {
    const route = useRouter();
    const { serial } = route.query;
    const [products, setProducts] = useState([])
    const [productSelect, setProductSelect] = useState('DEFAULT')

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
    }, []);

    if (username) {
        //const url = 'https://api.jikan.moe/v3/top/anime/1/airing';

        const url = PREFIX + '/products/' + username;

        const fetcher = (...args) => fetch(...args, { method: 'GET', credentials: 'include' }).then(res => res.json())

        const { data, error } = useSWR(url, fetcher, {
            onSuccess: (newdata) => {
                if (newdata.status === 401) {
                    alert('your session has expired!')
                    route.replace('/')
                }
                console.log(newdata.products)
                setProducts(newdata.products)
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

    const selectHandler = (e) => {
        setProductSelect(e.target.value)
    }

    useEffect(() => {
        console.log(productSelect);
        console.log(serial);
    }, [productSelect])

    if (username) {
        return (
            <div className="dashboard">
                <Head props={{ description: "contact us" }}></Head>
                <div className="container-fluid wrapper-dashboard">
                    <div className="row table-row">
                        <div className="col-md-2 col-sm-1 col-1 sidebarCol" id="test">
                            <Sidebar>
                                <ul className="navbar-nav navi">
                                    <li className="nav-items"><Link href={{ pathname: "/dashboard/", query: { serial: serial } }}><a><i className="fa fa-tachometer" aria-hidden="true"><span>Dashboard</span></i></a></Link></li>
                                    <li className="nav-items"><Link href={{ pathname: "/dashboard/detail", query: { serial: serial } }}><a><i className="fa fa-users" aria-hidden="true"><span>Product Details</span></i></a></Link></li>
                                    <li className="active"><Link href="#"><a><i className="fa fa-list-alt" aria-hidden="true"><span>Contact us</span></i></a></Link></li>
                                    <hr className="sidebar-divider"></hr>
                                </ul>
                            </Sidebar>
                        </div>
                        <div className="col-md-10 col-sm-11 col-11 page-content">
                            <div className="container-fluid">
                                <div className="page-header">
                                    <div className='row'>
                                        <div className='col-9 col-dashboard-header'>
                                            <h2>Contact Us</h2>
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
                                <div className='row ticket-loc'>
                                    <div className='col-12 col-md-6 col-lg-6 ticket'>
                                        <div className='container-fluid'>
                                            <div className='ticket-header'>
                                                <h3>Have a Problem?</h3>
                                                <p>We are ready to help you solve any problem</p>
                                            </div>
                                            <form className='ticket-form'>
                                                <select className='form-control' id='product' value={productSelect} onChange={selectHandler} required>
                                                    <option value='DEFAULT' disabled>Select your product number</option>
                                                    {products ? products.map((product) => {
                                                        return (
                                                            <option key={product.serialnumberid} value={product.serialnumberid}>{product.serialnumberid}</option>
                                                        )
                                                    })
                                                        : ''}
                                                </select>
                                                <input type='text' className='form-control' id='problem' name='problem' placeholder='State your problem' required></input>
                                                <textarea className='form-control' name='describe' placeholder='Describe your problem here' />
                                                <br />
                                                <button className='btn ticket-submit'>SUBMIT</button>
                                                <hr />
                                            </form>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-6 maploc'>
                                        <div className='container-fluid'>
                                            <div className='maploc-header'>
                                                <h3>Our Location</h3>
                                                <p>Foresta Bussiness Loft 1 no 17</p>
                                            </div>
                                            <div className='google-map'>
                                                <iframe style={{ border: 0 }} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.754153677632!2d106.63845224983162!3d-6.2960041954208785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb921fa74565%3A0xd9a460a7fc734041!2sBaran%20Energy!5e0!3m2!1sen!2sid!4v1580232868218!5m2!1sen!2sid' width='100%' height='100%' frameBorder='0' allowFullScreen />
                                            </div>
                                            <p>Foresta Bussiness Loft 1 no 17<br />Jl BSD Raya Utama <br />Pagedangan, Tangerang, Banten 15</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className='row contact-info'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='col-4 col-location'>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <div className='location-header'>
                                                    <h4>Location</h4>
                                                    <p>Foresta Bussiness Loft 1 no 17<br />Jl BSD Raya Utama <br />Pagedangan, Tangerang, Banten 15</p>
                                                </div>
                                            </div>
                                            <div className='col-4 col-email'>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                <div className='email-header'>
                                                    <h4>Email</h4>
                                                    <p>info@baran-energy.com<br />marketing@baran-energy.com</p>
                                                </div>
                                            </div>
                                            <div className='col-4 col-phone'>
                                                <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                                <div className='phone-header'>
                                                    <h4>Phone</h4>
                                                    <p>(+62)215 056 0388<br />(+62)831 9523 1542</p>
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
    else {
        return (
            <div className='container-fluid' style={{ "height": "30vh" }}>
                <div className='d-flex flex-column justify-content-center align-items-center mt-5' style={{ "width": "100%", "height": "100%", "fontFamily": "Raleway" }}>
                    <h2 style={{ "color": "#fafafa" }}>Loading....</h2>
                    <Loader type='ThreeDots' color="#00BFFF" height={60} width={60} />
                </div>
            </div>
        )
    }
}

export default contact

// contact.getInitialProps = async ({query}) =>{
//     const {serial} = query

//     return {serial}
// }
