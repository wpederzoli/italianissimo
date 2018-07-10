import { combineReducers } from 'redux'
import ShoppingCartReducer from './ShoppingCartReducer'
import HomeReducer from './HomeReducer'

export default combineReducers({
    cart: ShoppingCartReducer,
    home: HomeReducer
})