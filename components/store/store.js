import {createStore, applyMiddleware} from 'redux';
import mainReducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';

const middleware = [thunk]

const initialState = {}

const store = createStore(mainReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

const persistor = persistStore(store)

export {store, persistor};

