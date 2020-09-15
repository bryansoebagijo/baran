import {combineReducers} from 'redux';
import {firstReducer} from './firstReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

const persistConfig ={
    key:'root',
    storage,
    whitelist:['state']
}

const mainReducer = combineReducers({
    state:firstReducer
})

export default persistReducer(persistConfig, mainReducer);