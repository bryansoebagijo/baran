import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
//import baran_white from '../static/public/Logo High-White.png'
import Head from '../components/head'
import { useRouter } from 'next/router';
 import {useDispatch} from 'react-redux';
 import {addUser} from '../components/store/actions/basicAction'


function login() {
    const isProd = process.env.NODE_ENV === 'production';

    const next_public = process.env.NEXT_PUBLIC_BASE_PATH? process.env.NEXT_PUBLIC_BASE_PATH:'';
    const PREFIX = isProd? next_public : '';


    const baran_white = require("../public/logo-baran.png");
    const route = useRouter();

    const [response, setResponse] = useState({
        type: '',
        message: ''
      });

    const input1= useRef();
    const input2 = useRef();

    const dispatch = useDispatch();

    const submit = async (e) =>{
        e.preventDefault();
        const inputusername = {
            username: input1.current.value,
            password : input2.current.value 
        }

        console.log(inputusername);


        try{
            // const resp = await fetch('https://jsonplaceholder.typicode.com/posts',{
            //     method:"POST",
            //     body : JSON.stringify(inputusername),
            //     headers:{'Content-Type':'application/json'}
            // })

            const resp = await fetch('http://192.168.5.73/user/login',{
                method :'POST',
                credentials:'include',
                body : JSON.stringify(inputusername),
                headers:{'Content-Type':'application/json'}
            })
            
            if (resp.ok){
                    const data = await resp.json()
                    console.log(data);
                    dispatch(addUser(inputusername.username))
                    route.push(PREFIX+'/products')
                    //location.assign(PREFIX+'/products');
                    // sessionStorage.setItem(
                    //     'username', inputusername.username
                    // )
                    //route.push('/dashboard')
                    //route.prefetch('/dashboard')
                    //  route.push({
                    //      pathname:'/dashboard',
                    //      //query:{
                    //     //     username : inputusername.username
                    //     // }.
                    //  })
                
            }

            //const json = await res.json();
            
            /*console.log(json);

            if(json != null){
                setResponse(prevstate => {
                    return{
                    type:'success',
                    message:'Thank you for posting'
                    }
                });
            }
            else{
                setResponse({
                    type:'error',
                    message :json.message
                });
            }*/
        }
        catch (error){
            console.log('An error occured', error);
            setResponse({
                type:'error',
                message:'An error occured while submitting the form'
            });
        }
    }

    // useEffect(()=>{
    //     console.log(response)
    // },[response]);

    return (
            <div className="login">
                <Head></Head>
                <nav className="navbar">
                    <img src={baran_white} alt="Baran logo" className="navbar-brand"></img>
                    <i className="fa fa-map icon-pajangan" aria-hidden="true"></i>
                </nav>

                <div className="container login-content">
                    <div className="login-header">
                        <h1>Sign In</h1>
                    </div>
                    <form className='signin-form'>
                        <label className="email-label" htmlFor="email">Email Address</label>
                        <input ref={input1} type='email' className='form-control' id='email' name='email' placeholder='email address' required></input>
                        <label className="email-label" htmlFor="password">Password</label>
                        <input ref={input2} type='password' className='form-control' id='password' name='password' placeholder='Password' required></input>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {submit}>SIGN IN</button>
                        <div className='forgot-pass'>
                            <Link href="#">
                                <a>Forgot password?</a>
                            </Link>
                        </div>
                    </form>
                </div>
                <footer className="fixed-bottom">
                    <p>Baran Energy  2020</p>
                </footer>

            </div>
    )
}

export default login
