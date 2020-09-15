import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import {store, persistor} from '../components/store/store'
import {PersistGate} from 'redux-persist/integration/react'
import '../css/login.scss'
import '../css/dashboard.scss'
import '../css/products.scss'


function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps}></Component>
    )
}
const makeStore =()=>store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
