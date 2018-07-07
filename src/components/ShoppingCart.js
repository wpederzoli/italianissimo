import React from 'react'
import { Restaurant } from '@material-ui/icons'

const ShoppingCart = ({ order }) => {

    const { cartStyle, activeCartStyle } = styles

    return (
        <div>
            <Restaurant style={order !== undefined && order.length > 0 ? activeCartStyle : cartStyle} />
        </div>
    )
}

const styles = {
    cartStyle: { fontSize: 30, color: 'lightGrey' },
    activeCartStyle: { fontSize: 30, color: 'green' }
}

export { ShoppingCart }