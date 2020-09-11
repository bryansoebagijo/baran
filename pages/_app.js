import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.scss'
import '../css/dashboard.scss'
import '../css/products.scss'


function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps}></Component>
    )
}
export default MyApp;
