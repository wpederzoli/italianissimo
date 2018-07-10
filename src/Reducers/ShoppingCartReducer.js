import { ADD_TO_CART, HIDE_ORDER, DISPLAY_ORDER } from '../Actions/types'

const INITIAL_STATE = {
    order: [],
    showOrder: false,
    items: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, order: [...action.payload], items: state.items + 1 }
        case HIDE_ORDER:
            return {...state, showOrder: false}
        case DISPLAY_ORDER:
            return {...state, showOrder: true}
        default:
            return state
    }
}