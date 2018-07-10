import { ADD_TO_CART, HIDE_ORDER, DISPLAY_ORDER } from './types'

export const addToCart = (item, order) => {
    const all = order
    const index = all.indexOf(item)
    if (index !== -1) {
        item.quantity = all[all.indexOf(item)].quantity + 1
        all.splice(index, 1)
    } else {
        item.quantity = 1
    }
    all.push(item)

    return{
        type: ADD_TO_CART,
        payload: all
    }
}

export const hideOrder = () =>{
    return{
        type: HIDE_ORDER
    }
}

export const displayOrder = () =>{
    return{
        type: DISPLAY_ORDER
    }
}