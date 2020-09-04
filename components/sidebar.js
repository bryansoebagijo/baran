import React from 'react'
import Head from '../components/head'
import Link from 'next/link'
//import '../static/css/dashboard.scss'

function sidebar(props) {
    return (
        <div className="col-12 layer">
            <div className="profile-pic">
                <Link href="#"><a><img className="profile" src="none"></img></a></Link>
                <a role='button' className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">username<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                <div className="collapse bg-white" id="collapseOne" aria-labelledby="headingOne">
                    <h5 className="collapse-header">Profile</h5>
                    <h5 className="collapse-header">logout</h5>
                </div>
            </div>
            <hr className="sidebar-divider"></hr>
            {props.children}
        </div>
    )
}

export default sidebar
