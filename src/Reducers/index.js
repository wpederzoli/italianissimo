import { combineReducers } from 'redux'
import ShoppingCartReducer from './ShoppingCartReducer'
import HomeReducer from './HomeReducer'
import OnlineMenuReducer from './OnlineMenuReducer'

export default combineReducers({
    cart: ShoppingCartReducer,
    home: HomeReducer,
    onlineMenu: OnlineMenuReducer
})