import React from 'react'

function Navpil({handlerTime, time}) {
    return (
        <div className="row navpil">
            <div className="col-md-9 col-sm-9 col-9 col-navpil">
                <div className="navpill">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className={time =='daily'? "nav-link active":"nav-link"} href='#' onClick={()=>handlerTime('daily')}>Daily</a>
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
            <div className="col-md-3 col-sm-3 col-3 d-flex online-button">
                <button type="button" className="btn btn-primary online ml-auto">Online</button>
            </div>
        </div>
    )
}

export default Navpil
