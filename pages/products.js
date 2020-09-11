import React, { useRef } from 'react'
import Head from '../components/head'
import Sidebar from '../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
//import { useSelector } from 'react-redux'

const productlist =[
    {
        status:'online',
        connection:'off',
        serialNumber: '27-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'okay'
    },
    {
        status:'online',
        connection:'on',
        serialNumber: '28-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'okay'
    },
    {
        status:'offline',
        connection:'on',
        serialNumber: '29-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'warning'
    },
    {
        status:'online',
        connection:'on',
        serialNumber: '30-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'okay'
    }
]

function products() {

    const [search, setsearch] = useState('')
    const [sorttype, setsort] = useState(false)
    const [filter, setfilter] = useState(false)
    const [checked1, setcheck1]= useState(true)
    const [checked2, setcheck2]= useState(true)
    const [data, setdata] = useState([])
    const [newcheck, setnewcheck] = useState('')
    const [sortradio, setsortradio] = useState({serial:false, product:false, location:false})
    
    const filterbyon = useRef();
    const filterbyoff = useRef();
    const sortbyserial = useRef();
    const sortbyproduct = useRef();
    const sortbylocation = useRef();

    let onchecked = true;
    let offchecked = true;
    let outputfilter = [{}];
    let serialselect;
    let productselect;
    let locationselect;

    const route = useRouter();

    // const username = useSelector(state =>{
    //     return state.state.username
    // })

    //console.log(username)

    // useEffect(()=>{
    //     if(!username){
    //         alert('you are not loggin yet!');
    //         // route.replace({
    //         //     pathname:'/'
    //         // })
    //     }
    // },[username]);

    const filterhandler=(e =>{
        onchecked = filterbyon.current.checked;
        offchecked = filterbyoff.current.checked;
        if (onchecked && !offchecked) {

            const filteron = filterbyon.current.value;
            console.log(filteron);  
            setfilter(false)
            setnewcheck('')
            outputfilter = productlist.filter((product)=>{
                return product.connection == 'on'
            })
            setdata(outputfilter)
        }
        if(offchecked && !onchecked){
            const filteroff = filterbyoff.current.value;
            console.log(filteroff);
            setfilter(false)
            setnewcheck('')
            outputfilter = productlist.filter((product)=>{
                return product.connection == 'off'
            })
            setdata(outputfilter)
        }
        if(!onchecked && !offchecked){
            setfilter(false)
            console.log("2 2 nya mati mas");
            setdata([])
            setnewcheck('both')
            console.log(data);
            console.log(data.length);
        }
        if(onchecked && offchecked){
            outputfilter = productlist.filter((product)=>{
                return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            })
            setnewcheck('')
            setdata(outputfilter)
        }

        setfilter(false)

    })

    const sorthandler= ()=>{

        serialselect = sortbyserial.current.checked;
        productselect = sortbyproduct.current.checked;
        locationselect = sortbylocation.current.checked;

        if(serialselect){
            console.log('serial number selected');
            setdata(filtered.sort((a,b)=>{
                var statusA = a.serialNumber.toLowerCase();
                var statusB = b.serialNumber.toLowerCase();
                if (statusA > statusB) {
                    return 1;
                }
                if (statusA < statusB) {
                    return -1
                }
                return 0;
            }))
            setsort(false)
        }

        else if(productselect){
            console.log('product selected');
            setsort(false)
            setdata(filtered.sort((a,b)=>{
                var statusA = a.product.toLowerCase();
                var statusB = b.product.toLowerCase();
                if (statusA > statusB) {
                    return -1;
                }
                if (statusA < statusB) {
                    return 1
                }
                return 0;
            }))
        }
        else if(locationselect){
            console.log('location selected');
            setsort(false)
            setdata(filtered.sort((a,b)=>{
                var statusA = a.location.toLowerCase();
                var statusB = b.location.toLowerCase();
                if (statusA > statusB) {
                    return -1;
                }
                if (statusA < statusB) {
                    return 1
                }
                return 0;
            }))
        }
        else{
            console.log('jangepong');
            setsort(false)
        }
    }
    
    const backdrop = () =>{
        return(
            <div className='backdrop' onClick={()=>{
                setfilter(false)
                setsort(false)
            }}></div>
        )
    }
    const filterModal =() =>{
        return(
            <div className='container filtercard'>
                <h3>Filter products by</h3>
                <form>
                    <div className='d-flex'>
                        <label>connection : on</label>
                        <input ref={filterbyon} type='checkbox' name='on' value='on' checked={checked1} onChange={()=>setcheck1(!checked1)}></input>
                    </div>
                    <div className='d-flex'>
                        <label>connection : off</label>
                        <input ref={filterbyoff} type='checkbox' name='off' value='off' checked={checked2} onChange={()=>setcheck2(!checked2)}></input>
                    </div>
                </form>
                <hr></hr>
                <div className='buttons'>
                    <button type='button' className='btn btn-danger cancel' onClick={() => setfilter(false)}>cancel</button>
                    <button type='button' className='btn btn-primary ok' onClick={filterhandler}>OK</button>
                </div>
            </div>
        )
    }

    const sortModal =() =>{
        return(
            <div className='container sortcard'>
                <h3>Sort products by</h3>
                <form>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbyserial} name='sort' type='radio' value='serial-number' checked={sortradio.serial?? false} onChange={()=> setsortradio((prevState)=>({serial : !prevState.serial}))}></input>
                        <label className='form-check-label'>Serial Number</label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbyproduct} name='sort' type='radio' value='product' checked={sortradio.product?? false} onChange={()=> setsortradio((prevState)=>({product : !prevState.product}))}></input>
                        <label className='form-check-label'>Product</label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbylocation} name='sort' type='radio' value='location' checked={sortradio.location?? false} onChange={()=> setsortradio((prevState)=>({location : !prevState.location}))}></input>
                        <label className='form-check-label'>Location</label>
                    </div>
                </form>
                <hr></hr>
                <div className='buttons'>
                    <button type='button' className='btn btn-danger cancel' onClick={() => setsort(false)}>cancel</button>
                    <button type='button' className='btn btn-primary ok' onClick={sorthandler}>OK</button>
                </div>
            </div>
        )
    }

    let filtered; 

    useEffect(()=>{
        console.log(filtered);
    },[data])

    data.length > 0? filtered = data.filter((product)=>{
        return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }):filtered = productlist.filter((product)=>{
        return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if(newcheck == 'both'){
        filtered = productlist.filter((product)=>{
            return product.connection == 'none'
        });
    }

    // if(sorttype){
    //     filtered.sort((a,b)=>{
    //         var statusA = a.status.toLowerCase();
    //         var statusB = b.status.toLowerCase();
    //         if(statusA > statusB){
    //             return -1;
    //         }
    //         if(statusA < statusB){
    //             return 1
    //         }
    //         return 0;
    //     })
    // }
    // else{
    //     filtered.sort((a,b)=>{
    //         var statusA = a.status.toLowerCase();
    //         var statusB = b.status.toLowerCase();
    //         if(statusA > statusB){
    //             return 1;
    //         }
    //         if(statusA < statusB){
    //             return -1
    //         }
    //         return 0;
    //     })
    // }

    //console.log(filtered);

    return (
        <div className="dashboard">
            <Head></Head>
            <div className="container-fluid wrapper-dashboard">
                {filter?backdrop():''}
                {filter?filterModal():''}
                {sorttype?backdrop():''}
                {sorttype?sortModal():''}
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
                                <h2>Your Products</h2>
                            </div>
                            <div className="row search_section">
                                <div className='col-lg-8 col-md-8 col-sm-6 col-6 searchbar'>
                                    <div className='container-fluid'>
                                        <input type='text' onChange={(e)=>setsearch(e.target.value)} value={search} placeholder='Search Product...'></input>
                                        <button type='button'><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3 col-3 sort'>
                                    <button type='button' onClick={()=>setsort(!sorttype)}>
                                        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                                        <span>Sort</span>
                                    </button>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3 col-3 filter'>
                                    <button type='button' onClick={()=>setfilter(true)}>
                                        <i className="fa fa-filter" aria-hidden="true"></i>
                                        <span>Filter</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row products">
                                <div className='col-12 table_product'>
                                    <div className='table-responsive-sm'>
                                        <table className='table table-hover product_list'>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Connection</th>
                                                    <th scope="col">Serial Number</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Condition</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filtered.map(product => {
                                                    return (
                                                        <Link href={'/dashboard'} key={product.serialNumber}>
                                                            <tr>
                                                                <td>{product.status == 'online' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                                <td>{product.connection == 'on' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                                <td>{product.serialNumber}</td>
                                                                <td>{product.product}</td>
                                                                <td>{product.location}</td>
                                                                <td>{(() => {
                                                                    if (product.condition == 'okay') return <i className="fa fa-check okay" aria-hidden="true"></i>
                                                                    else if (product.condition == 'warning') return <i className="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
                                                                    else return <i className="fa fa-exclamation-circle error" aria-hidden="true"></i>
                                                                })()}</td>
                                                            </tr>
                                                        </Link>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default products
