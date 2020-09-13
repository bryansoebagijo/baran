import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle'
import '../css/login.scss'
import '../css/dashboard.scss'
import '../css/products.scss'


function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps}></Component>
    )
}
export default MyApp;
