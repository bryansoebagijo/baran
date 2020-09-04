import * as type from '../types'

const initialState = {
    username: '',
    loading: false,
    error: ''
}

export const firstReducer = (state=initialState, action) =>{
    switch (action.type){
        case type.ACTIONS.ADD_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case type.ACTIONS.DEL_USERNAME:
            return {
                ...state,
                username:''
            }
        default:
            return state
    }
}