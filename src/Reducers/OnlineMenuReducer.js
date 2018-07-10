import { SETUP_DATA } from '../Actions/types'

const INITIAL_STATE = {
    categories: [],
    fullMenu: {}
}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SETUP_DATA:
            return {...state, categories: action.payload.categories, fullMenu: action.payload.data}
        default:
            return state
    }
}