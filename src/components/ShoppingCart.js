import React from 'react'
import { Button } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

const ShoppingCart = ({ order }) => {

    const { cartStyle, activeCartStyle } = styles

    return (
        <div>
            <Button variant='fab' disabled={ order !== undefined && order.length > 0 ? false :  true }>
                <Restaurant style={order !== undefined && order.length > 0 ? activeCartStyle : cartStyle} />
                {
                    order !== undefined && order.length > 0 ?
                        <div style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: 'red', position: 'absolute', bottom: 0, right: 0 }}>
                            <p style={{ textAlign: 'center', color: '#fff', margin: '0 auto', fontSize: 15 }}>{order.length}</p>
                        </div> : 
                        null
                }
            </Button>

        </div>
    )
}

const styles = {
    cartStyle: { fontSize: 30, color: 'lightGrey' },
    activeCartStyle: { fontSize: 30, color: 'green' }
}

export { ShoppingCart }