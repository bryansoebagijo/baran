import * as type from '../types'

export const addUser = (name)=>{
    return {
        type: type.ACTIONS.ADD_USERNAME,
        payload : name
    }
}

export const delUser = (name)=>{
    return({
        type: type.ACTIONS.DELETE_USERNAME,
        payload: name
    })
}