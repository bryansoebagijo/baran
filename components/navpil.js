import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import useDidMountEffect from './useDidMountEffect';

function Navpil({handlerTime, time, serial}) {
    const [togglestate, setToggleState] = useState(true)

    const toggleHandler = async () =>{
        setToggleState(!togglestate)
    }

    useDidMountEffect(async ()=>{
        if(togglestate){
            try{
                const resp = await fetch('http://192.168.5.73/commands/activate',{
                    method :'POST',
                    credentials:'include',
                    body : JSON.stringify({'serialnumberid' : serial}),
                    headers:{'Content-Type':'application/json'}
                })
                if (resp.ok){
                    alert("your device is online");
                }
            }
            catch(error){
                console.log('An error occured', error);
            }
        }
        else{
            try{
                const resp = await fetch('http://192.168.5.73/commands/shutdown',{
                    method :'POST',
                    credentials:'include',
                    body : JSON.stringify({'serialnumberid' : serial}),
                    headers:{'Content-Type':'application/json'}
                })
                if (resp.ok){
                    alert("your device is offline");
                }
            }
            catch(error){
                console.log('An error occured', error);
            }
        }
    },[togglestate])

    useEffect(()=>{
        console.log(togglestate);
        console.log(serial);
    },[togglestate])

    return (
        <div className="row navpil">
            <div className="col-6 col-navpil">
                <div className="navpill">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={time =='today'? "nav-link active":"nav-link"} href='#' onClick={()=>handlerTime('today')}>today</a>
                        </li>
                        <li className="nav-item">
                            <a className={time =='yesterday'? "nav-link active":"nav-link"} href="#" onClick={()=>handlerTime('yesterday')}>Yesterday</a>
                        </li>
                        <li className="nav-item">
                            <a className={time =='weekly'? "nav-link active":"nav-link"} href="#" onClick={()=>handlerTime('weekly')}>Weekly</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-6 d-flex online-button">
                <div className="custom-switch custom-switch-sm" style={togglestate?{"background":"linear-gradient(0deg, #9BC53D, #9BC53D)"}:{"background":"#e00022"}}>
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={togglestate} onChange={toggleHandler} />
                    <label className="custom-control-label" htmlFor="customSwitch1">{togglestate ? 'On' : 'Off'}</label>
                </div>
                <button type="button" className="btn btn-primary online">Online</button>
            </div>
        </div>
    )
}

export default Navpil
