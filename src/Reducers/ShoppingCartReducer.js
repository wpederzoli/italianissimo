import { ADD_TO_CART, HIDE_ORDER, DISPLAY_ORDER, PAYMENT_SUCCESS } from '../Actions/types'

const INITIAL_STATE = {
    order: [],
    showOrder: false,
    items: 0,
    total: 0,
    confirmation: false,
    success: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, order: [...action.payload], items: state.items + 1 }
        case HIDE_ORDER:
            return {...state, showOrder: false}
        case DISPLAY_ORDER:
            return {...state, showOrder: true, total: action.payload}
        case PAYMENT_SUCCESS:
            return {...INITIAL_STATE, confirmation: true, success: true}
        default:
            return state
    }
}