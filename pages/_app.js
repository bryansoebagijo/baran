import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle'
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import {store, persistor} from '../components/store/store';
import Router from 'next/router';
import {PersistGate} from 'redux-persist/integration/react';
import NProgress from 'nprogress';
import '../css/login.scss';
import '../css/dashboard.scss';
import '../css/products.scss';
import '../css/detail.scss';
import 'nprogress/nprogress.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

Router.events.on('routeChangeStart' , () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
});

Router.events.on('routeChangeError',() => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
});


function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps}></Component>
    )
}
const makeStore =()=>store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
