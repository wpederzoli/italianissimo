import { ADD_TO_CART, HIDE_ORDER, DISPLAY_ORDER } from '../Actions/types'

const INITIAL_STATE = {
    order: [],
    showOrder: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('this is the reducer: ' + JSON.stringify(state))
            return { ...state, order: action.payload }
        case HIDE_ORDER:
            return {...state, showOrder: false}
        case DISPLAY_ORDER:
            return {...state, showOrder: true}
        default:
            return state
    }
}