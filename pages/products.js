import React, { useRef } from 'react'
import Head from '../components/head'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import useSWR from 'swr';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

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
    },
    {
        status:'offline',
        connection:'off',
        serialNumber: '31-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'okay'
    },
    {
        status:'offline',
        connection:'off',
        serialNumber: '32-BSD-07-PW-20',
        product :'Power Wall',
        location : 'Villa Bogor',
        condition : 'warning'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin:'auto',
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

function products() {

    const classes = useStyles();
    const rowPerPage = 5;

    const [search, setsearch] = useState('')
    const [sorttype, setsort] = useState(false)
    const [filter, setfilter] = useState(false)
    const [checked1, setcheck1]= useState(true)
    const [checked2, setcheck2]= useState(true)
    const [dataFilter, setDataFilter] = useState([])
    const [newcheck, setnewcheck] = useState('')
    const [sortradio, setsortradio] = useState({serial:false, product:false, location:false})
    const [editloc, seteditloc] = useState('');
    const [inEditMode, setInEditMode] = useState({status:false, rowkey:null})
    const [dataLoc, setDataLoc] = useState([{}])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)

    
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

    const username = useSelector(state =>{
        return state.state.username
    })

    console.log(username)

    useEffect(()=>{
        if(!username){
            alert('you are not loggin yet!');
            // route.replace({
            //     pathname:'/'
            // })
        }
    },[username]);

    if(username){
        //const url = 'https://api.jikan.moe/v3/top/anime/1/airing';

        const url = 'http://192.168.5.73/products/' + username;

        const fetcher = (...args) => fetch(...args,{method:'GET', credentials:'include'}).then(res=>res.json())
        
        const {data, error} = useSWR(url, fetcher, {dedupingInterval:10000, onSuccess:(newdata)=>{
            console.log(newdata)
        },
        onError:(error)=>{
            console.log(error);
        }
    })

    const INVENTORY_API_URL ='';

    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}`)
            .then(res => res.json())
            .then(json => setDataLoc(json));
    }

    const onEdit = ({id, currentLoc}) => {
        console.log('onEdit');
        setInEditMode({
            status: true,
            rowkey: id
        })
        seteditloc(currentLoc);
    }

    const updateInventory = ({id, newLoc}) => {
        fetch(`${INVENTORY_API_URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                location: newLoc
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                // reset inEditMode and unit price state values
                onCancel();

                // fetch the updated data
                fetchInventory();
            })

        onCancel();
    }

    const onSave = ({id, newLoc}) => {
        updateInventory({id, newLoc});
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
            setDataFilter(outputfilter)
        }
        if(offchecked && !onchecked){
            const filteroff = filterbyoff.current.value;
            console.log(filteroff);
            setfilter(false)
            setnewcheck('')
            outputfilter = productlist.filter((product)=>{
                return product.connection == 'off'
            })
            setDataFilter(outputfilter)
        }
        if(!onchecked && !offchecked){
            setfilter(false)
            console.log("2 2 nya mati mas");
            setDataFilter([])
            setnewcheck('both')
            console.log(dataFilter);
            console.log(dataFilter.length);
            setCount(dataFilter.length)
        }
        if(onchecked && offchecked){
            outputfilter = productlist.filter((product)=>{
                return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            })
            setnewcheck('')
            setDataFilter(outputfilter)
        }

        setfilter(false)

    })


    //SORT HANDLER FUNCTION
    const sorthandler= ()=>{

        serialselect = sortbyserial.current.checked;
        productselect = sortbyproduct.current.checked;
        locationselect = sortbylocation.current.checked;

        if(serialselect){
            console.log('serial number selected');
            setDataFilter(filtered.sort((a,b)=>{
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
            setDataFilter(filtered.sort((a,b)=>{
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
            setDataFilter(filtered.sort((a,b)=>{
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

    //JUST A BACKDROP
    const backdrop = () =>{
        return(
            <div className='backdrop' onClick={()=>{
                setfilter(false)
                setsort(false)
            }}></div>
        )
    }

    //FILTER MODAL JSX
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

    //SORT MODAL JSX
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

    // filter logic
    let filtered; 

    useEffect(()=>{
        console.log(filtered);
    },[dataFilter])

    dataFilter.length > 0? filtered = dataFilter.filter((product)=>{
        return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }):filtered = productlist.filter((product)=>{
        return product.serialNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if(newcheck == 'both'){
        filtered = productlist.filter((product)=>{
            return product.connection == 'none'
        });
    }

    useEffect(()=>{
        if(filtered.length > 0){
            let tempCount = filtered.length
            //console.log(tempCount);
            let pageCount = Math.ceil(tempCount /rowPerPage)
            setCount(pageCount)
            //console.log(count);
        }
        else{
            setCount(1)
        }
    }, [filtered])

    const handlePageChange = (event, value) =>{
        console.log(value);
        setPage(value);
    }

    return (
        <div className="dashboard">
            <Head></Head>
            <div className="container-fluid wrapper-dashboard">
                {filter?backdrop():''}
                {filter?filterModal():''}
                {sorttype?backdrop():''}
                {sorttype?sortModal():''}
                <div className="row table-row">
                    <div className="col-md-12 col-sm-12 col-12 page-content">
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
                                                    <th scope="col" className='first-sm'>Status</th>
                                                    <th scope="col" className='second-sm'>Connection</th>
                                                    <th scope="col">Serial Number</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Condition</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filtered.slice((page-1) * rowPerPage,(page-1) * rowPerPage + rowPerPage ).map(product => {
                                                    return (
                                                            <tr key={product.serialNumber}>
                                                                <td className='first-sm'>{product.status == 'online' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                                <td className='second-sm'>{product.connection == 'on' ? <span className='green_round'></span> : <span className='red_round'></span>}</td>
                                                                <td>
                                                                    <Link href="/dashboard/[serial]" as={`/dashboard/${product.serialNumber}`} key={product.serialNumber}>
                                                                        <a>{product.serialNumber}</a>
                                                                    </Link>
                                                                </td>
                                                                <td>{product.product}</td>
                                                                <td>
                                                                {inEditMode.status && inEditMode.rowkey === product.serialNumber ? 
                                                                <form className='edit-location'>
                                                                    <input placeholder="Edit location" name="location" className='inputLoc' onChange={(e) => seteditloc(e.target.value)} value={editloc}></input>
                                                                    <i class="fa fa-check check-icon" aria-hidden="true" onClick={() => onSave({ id: product.serialNumber, newLoc: editloc })}></i>
                                                                    <i class="fa fa-ban ban-icon" aria-hidden="true" onClick={onCancel}></i>
                                                                </form> 
                                                                : product.location}

                                                                    {inEditMode.status && inEditMode.rowkey === product.serialNumber?'':<i className="fa fa-pencil edit-icon" onClick={()=>onEdit({id:product.serialNumber, currentLoc:product.location})}></i>}
                                                                </td>
                                                                <td>{(() => {
                                                                    if (product.condition == 'okay') return <i className="fa fa-check okay" aria-hidden="true"></i>
                                                                    else if (product.condition == 'warning') return <i className="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
                                                                    else return <i className="fa fa-exclamation-circle error" aria-hidden="true"></i>
                                                                })()}</td>
                                                            </tr>
                                                    )
                                                })}
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
