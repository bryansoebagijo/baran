import React from 'react'
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
        // <Provider store={store}>
        //     <PersistGate persistor={persistor}>
        //         <Component {...pageProps}></Component>
        //     </PersistGate>
        // </Provider>
    )
}

const makeStore =()=>store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
