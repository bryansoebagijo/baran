import React, { useState, useRef } from 'react'
import Link from 'next/link'
//import '../static/css/login2.scss'
import baran_picture from '../public/logo_baran.png'
import Head from '../components/head'

const linklist=[
    "Terms of Service",
    "Privary Policy",
    "Copyright 2020 Aldebaran. All right reserved."
]

function Login2() {
    const [response, setResponse] = useState({
        type: '',
        message: ''
      });

    const input1 = useRef('');
    const input2 = useRef('')

    const submit = async e =>{
        e.preventDefault();
        const inputusername = {
            username : input1.current.value,
            password : input2.current.value 
        }

        console.log(inputusername);

        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method:"POST",
                body : JSON.stringify(inputusername),
                headers:{'Content-Type':'application/json'}
            });

            const json = await res.json();
            
            console.log(json);

            if(json != null){
                setResponse({
                    type:'success',
                    message:'Thank you for posting'
                });
            }
            else{
                setResponse({
                    type:'error',
                    message :json.message
                });
            }
        }
        catch (error){
            console.log('An error occured', e);
            setResponse({
                type:'error',
                message:'An error occured while submitting the form'
            });
        }

        console.log(response);
    }

    return (
        <body className="login2">
        <div className="container login-only">
            <Head></Head>
            <div className='card card-container'>
                    <img className='baran-photo' src={baran_picture} alt='baran logo'></img>
                    <h4 className='logo-title'> SMART POWER WALL INTEGRATED SYSTEM</h4>
                    <form className='form-signin'>
                        <input ref={input1} type='text' className='form-control' id='username' name='username' placeholder='Username' required></input>
                        <input ref={input2} type='password' className='form-control' id='password' name='password' placeholder='Password' required></input>
                        <div className='forgot-pass'>
                            <Link href="#">
                                <a>Forgot password?</a>
                            </Link>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" onClick = {submit}>Sign in</button>
                    </form>
            </div>
            <footer className='copyright'>
                <ul>
                    {linklist.map(e =>(
                            <li><a href='#'>{e}</a> &nbsp; &nbsp; |</li>
                    ))}
                </ul>
            </footer>
        </div>
        </body>
    )
}

export default Login2
