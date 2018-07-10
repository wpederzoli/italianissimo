import { SET_REVIEWS } from '../Actions/types'

const INITIAL_STATE = {
    reviews:[]
}

export default(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_REVIEWS:
            return {...state, reviews: action.payload}
        default:
            return state
    }
}