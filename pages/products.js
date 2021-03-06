import React, { useRef } from 'react';
import Head from '../components/head';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: 'auto',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            marginTop: theme.spacing(2),
        },
        '& ul': {
            color: 'white',
        },
        '& .MuiPaginationItem-root ': {
            color: 'white',

        }
    },
}));

const isProd = process.env.NODE_ENV === 'production';
const PREFIX = isProd ? 'https://test.vincentreynard.com' : 'http://192.168.5.73'

function products() {

    const classes = useStyles();
    const rowPerPage = 5;

    let productlist =
        [
            {
                status: '1',
                connection: '0',
                serialnumberid: '27-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'okay'
            },
            {
                status: '1',
                connection: '1',
                serialnumberid: '28-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'okay'
            },
            {
                status: '0',
                connection: '1',
                serialnumberid: '29-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'warning'
            },
            {
                status: '1',
                connection: '1',
                serialnumberid: '30-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'okay'
            },
            {
                status: '0',
                connection: '0',
                serialnumberid: '31-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'okay'
            },
            {
                status: '0',
                connection: '0',
                serialnumberid: '32-BSD-07-PW-20',
                producttype: 'Power Wall',
                label: 'Villa Bogor',
                condition: 'warning'
            }
        ]

    const [search, setsearch] = useState('')
    const [sorttype, setsort] = useState(false)
    const [filter, setfilter] = useState(false)
    const [checked1, setcheck1] = useState(true)
    const [checked2, setcheck2] = useState(true)
    const [dataFilter, setDataFilter] = useState([])
    const [newcheck, setnewcheck] = useState('')
    const [sortradio, setsortradio] = useState({ serial: false, producttype: false, label: false })
    const [editloc, seteditloc] = useState('');
    const [inEditMode, setInEditMode] = useState({ status: false, rowkey: null })
    const [dataLoc, setDataLoc] = useState([{}])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const [tempFetchData, setTempFetchData] = useState([])


    const filterbyon = useRef();
    const filterbyoff = useRef();
    const sortbyserial = useRef();
    const sortbyproducttype = useRef();
    const sortbylabel = useRef();

    let onchecked = true;
    let offchecked = true;
    let outputfilter = [{}];
    let serialselect;
    let producttypeselect;
    let labelselect;

    const route = useRouter();

    const username = useSelector(state => {
        return state.state.username
    })

    //console.log(username)

    useEffect(() => {
        if (!username) {
            alert('you are not loggin yet!');
            route.replace({
                pathname: '/'
            })
        }
    }, [username]);

    //const url = 'https://api.jikan.moe/v3/top/anime/1/airing';

    const url = PREFIX + '/products/' + username;

    const fetcher = (...args) => fetch(...args, { method: 'GET', credentials: 'include' }).then(res => res.json())

    const { data, error } = useSWR(url, fetcher, {
        onSuccess: (newdata) => {
            if (newdata.status === 401) {
                alert('your session has expired!')
                sessionStorage.clear();
                route.replace('/')
            }
            console.log(newdata.products)
            setTempFetchData(newdata.products)
        },
        onError: (error) => {
            console.log(error);
        }
    })

    useEffect(() => {
        console.log(tempFetchData);
    }, [tempFetchData])

    tempFetchData ? productlist = tempFetchData : productlist = productlist;

    const INVENTORY_API_URL = '';

    const onEdit = ({ id, currentLoc }) => {
        console.log('onEdit');
        setInEditMode({
            status: true,
            rowkey: id
        })
        seteditloc(currentLoc);
    }

    const updateInventory = async ({ id, newLoc }) => {
        const res = await fetch(PREFIX + `/products/${id}/label`, {
            method: "PATCH",
            credentials: 'include',
            body: JSON.stringify({
                label: newLoc
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        //     .then(response => response.json())
        //     .then(json => {
        //         // reset inEditMode and unit price state values
        //         onCancel();

        //         // fetch the updated data
        //         fetchInventory();
        //     })

        // onCancel();

        if (res.ok) {
            const data = await res.json()
            console.log(data);
            alert('value changed!')
            onCancel();
        }
    }

    const onSave = ({ id, newLoc }) => {
        updateInventory({ id, newLoc });
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        seteditloc(null);
    }

    //FILTER HANDLER FUNCTION
    const filterhandler = (e => {
        onchecked = filterbyon.current.checked;
        offchecked = filterbyoff.current.checked;
        if (onchecked && !offchecked) {

            const filteron = filterbyon.current.value;
            console.log(filteron);
            setfilter(false)
            setnewcheck('')
            outputfilter = productlist.filter((product) => {
                return product.connection == "1"
            })
            if (outputfilter.length > 0) {
                console.log(outputfilter);
                setDataFilter(outputfilter)
            }
            else {
                setnewcheck('both')
                setDataFilter([])
            }

        }
        if (offchecked && !onchecked) {
            const filteroff = filterbyoff.current.value;
            console.log(filteroff);
            setfilter(false)
            setnewcheck('')
            outputfilter = productlist.filter((product) => {
                return product.connection == "0"
            })
            if (outputfilter.length > 0) {
                console.log(outputfilter);
                setDataFilter(outputfilter)
            }
            else {
                setnewcheck('both')
                setDataFilter([])
            }
        }
        if (!onchecked && !offchecked) {
            setfilter(false)
            console.log("2 2 nya mati mas");
            setDataFilter([])
            setnewcheck('both')
            console.log(dataFilter);
            console.log(dataFilter.length);
            setCount(dataFilter.length)
        }
        if (onchecked && offchecked) {
            outputfilter = productlist.filter((product) => {
                return product.serialnumberid.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            })
            setnewcheck('')
            setDataFilter(outputfilter)
        }

        setfilter(false)

    })


    //SORT HANDLER FUNCTION
    const sorthandler = () => {

        serialselect = sortbyserial.current.checked;
        producttypeselect = sortbyproducttype.current.checked;
        labelselect = sortbylabel.current.checked;

        if (serialselect) {
            console.log('serial number selected');
            setDataFilter(filtered.sort((a, b) => {
                var statusA = a.serialnumberid.toLowerCase();
                var statusB = b.serialnumberid.toLowerCase();
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

        else if (producttypeselect) {
            console.log('product selected');
            setsort(false)
            setDataFilter(filtered.sort((a, b) => {
                var statusA = a.producttype.toLowerCase();
                var statusB = b.producttype.toLowerCase();
                if (statusA > statusB) {
                    return -1;
                }
                if (statusA < statusB) {
                    return 1
                }
                return 0;
            }))
        }
        else if (labelselect) {
            console.log('label selected');
            setsort(false)
            setDataFilter(filtered.sort((a, b) => {
                var statusA = a.label.toLowerCase();
                var statusB = b.label.toLowerCase();
                if (statusA > statusB) {
                    return -1;
                }
                if (statusA < statusB) {
                    return 1
                }
                return 0;
            }))
        }
        else {
            console.log('jangepong');
            setsort(false)
        }
    }

    //JUST A BACKDROP
    const backdrop = () => {
        return (
            <div className='backdrop' onClick={() => {
                setfilter(false)
                setsort(false)
            }}></div>
        )
    }

    //FILTER MODAL JSX
    const filterModal = () => {
        return (
            <div className='container filtercard'>
                <h3>Filter products by</h3>
                <form>
                    <div className='d-flex'>
                        <label>connection : on</label>
                        <input ref={filterbyon} type='checkbox' name='on' value='on' checked={checked1} onChange={() => setcheck1(!checked1)}></input>
                    </div>
                    <div className='d-flex'>
                        <label>connection : off</label>
                        <input ref={filterbyoff} type='checkbox' name='off' value='off' checked={checked2} onChange={() => setcheck2(!checked2)}></input>
                    </div>
                </form>
                <hr></hr>
                <div className='buttons'>
                    <button type='button' aria-label='cancel' className='btn btn-danger cancel' onClick={() => setfilter(false)}>cancel</button>
                    <button type='button' aria-label='ok' className='btn btn-primary ok' onClick={filterhandler}>OK</button>
                </div>
            </div>
        )
    }

    //SORT MODAL JSX
    const sortModal = () => {
        return (
            <div className='container sortcard'>
                <h3>Sort products by</h3>
                <form>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbyserial} id='serial' type='radio' value='serial-number' checked={sortradio.serial ?? false} onChange={() => setsortradio((prevState) => ({ serial: !prevState.serial }))}></input>
                        <label className='form-check-label' htmlFor='serial'>Serial Number</label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbyproducttype} id='producttype' type='radio' value='producttype' checked={sortradio.producttype ?? false} onChange={() => setsortradio((prevState) => ({ producttype: !prevState.producttype }))}></input>
                        <label className='form-check-label' htmlFor='producttype'>Product type</label>
                    </div>
                    <div className='form-check'>
                        <input className='form-check-input radio' ref={sortbylabel} id='label' type='radio' value='label' checked={sortradio.label ?? false} onChange={() => setsortradio((prevState) => ({ label: !prevState.label }))}></input>
                        <label className='form-check-label' htmlFor='label'>Label</label>
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

    // filter logic
    let filtered;

    dataFilter.length > 0 ? filtered = dataFilter.filter((product) => {
        return product.serialnumberid.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }) : filtered = productlist.filter((product) => {
        return product.serialnumberid.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (newcheck == 'both') {
        filtered = productlist.filter((product) => {
            return product.connection == 'none'
        });
    }

    useEffect(() => {
        if (filtered.length > 0) {
            let tempCount = filtered.length
            //console.log(tempCount);
            let pageCount = Math.ceil(tempCount / rowPerPage)
            setCount(pageCount)
            //console.log(count);
        }
        else {
            setCount(1)
        }
    }, [filtered])

    const handlePageChange = (event, value) => {
        console.log(value);
        setPage(value);
    }

    return (
        <div className="dashboard">
            <Head props={{ description: "product" }}></Head>
            <div className="container-fluid wrapper-dashboard">
                {filter ? backdrop() : ''}
                {filter ? filterModal() : ''}
                {sorttype ? backdrop() : ''}
                {sorttype ? sortModal() : ''}
                <div className="row table-row">
                    <div className="col-md-12 col-sm-12 col-12 page-content-product">
                        <div className="container-fluid">
                            <div className="page-header">
                                <h2>Your Products</h2>
                            </div>
                            <div className="row search_section">
                                <div className='col-lg-8 col-md-8 col-sm-6 col-6 searchbar'>
                                    <div className='container-fluid'>
                                        <input type='text' onChange={(e) => setsearch(e.target.value)} value={search} placeholder='Search Product...'></input>
                                        <button type='button'><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3 col-3 sort'>
                                    <button type='button' onClick={() => setsort(!sorttype)}>
                                        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                                        <span>Sort</span>
                                    </button>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3 col-3 filter'>
                                    <button type='button' onClick={() => setfilter(true)}>
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
                                                    <th scope="col" className='first-sm'>Status</th>
                                                    <th scope="col" className='second-sm'>Connection</th>
                                                    <th scope="col">Serial Number</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Label</th>
                                                    <th scope="col">Condition</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(tempFetchData && (tempFetchData.length > 0)) ? filtered.slice((page - 1) * rowPerPage, (page - 1) * rowPerPage + rowPerPage).map(product => {
                                                    return (
                                                        <tr key={product.serialnumberid}>
                                                            <td className='first-sm'>{product.status == '1' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                            <td className='second-sm'>{product.connection == '1' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                            <td>
                                                                <Link href={{ pathname: "/dashboard", query: { serial: product.serialnumberid } }} key={product.serialnumberid} passHref>
                                                                    <a>{product.serialnumberid}</a>
                                                                </Link>
                                                            </td>
                                                            <td>{product.producttype}</td>
                                                            <td>
                                                                {inEditMode.status && inEditMode.rowkey === product.serialnumberid ?
                                                                    <form className='edit-label'>
                                                                        <input placeholder="Edit label" name="label" className='inputLoc' onChange={(e) => seteditloc(e.target.value)} value={editloc}></input>
                                                                        <i className="fa fa-check check-icon" aria-hidden="true" onClick={() => onSave({ id: product.serialnumberid, newLoc: editloc })}></i>
                                                                        <i className="fa fa-ban ban-icon" aria-hidden="true" onClick={onCancel}></i>
                                                                    </form>
                                                                    : product.label}

                                                                {inEditMode.status && inEditMode.rowkey === product.serialnumberid ? '' : <i className="fa fa-pencil edit-icon" onClick={() => onEdit({ id: product.serialnumberid, currentLoc: product.label })}></i>}
                                                            </td>
                                                            <td>
                                                                {/* {(() => {
                                                                    if (product.condition == 'okay') return <i className="fa fa-check okay" aria-hidden="true"></i>
                                                                    else if (product.condition == 'warning') return <i className="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
                                                                    else return <i className="fa fa-exclamation-circle error" aria-hidden="true"></i>
                                                                })()} */}
                                                                unknown
                                                                </td>
                                                        </tr>
                                                    )
                                                })
                                                    :<tr>
                                                        <td>loading...</td>
                                                        <td>loading...</td>
                                                        <td>loading...</td>
                                                        <td>loading...</td>
                                                        <td>loading...</td>
                                                        <td>loading...</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={classes.root}>
                                    <Pagination className={classes.root} count={count} page={page} color={'primary'} onChange={handlePageChange} showFirstButton showLastButton />
                                </div>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default products
