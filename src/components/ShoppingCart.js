import React from 'react'
import { Button, Modal, Grid } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

const ShoppingCart = ({ order, showOrder, hideOrder, onClick }) => {

    const { cartStyle, activeCartStyle } = styles

    return (
        <div>
            <Button variant='fab' disabled={ order !== undefined && order.length > 0 ? false :  true } onClick={onClick}>
                <Restaurant style={order !== undefined && order.length > 0 ? activeCartStyle : cartStyle} />
                {
                    order !== undefined && order.length > 0 ?
                        <div style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: 'red', position: 'absolute', bottom: 0, right: 0 }}>
                            <p style={{ textAlign: 'center', color: '#fff', margin: '0 auto', fontSize: 15 }}>{order.length}</p>
                        </div> : 
                        null
                }
            </Button>
            <Modal open={showOrder} onClose={hideOrder}>
                <Grid container justify='center' style={{ width: 500, maxHeight: '75%', maxWidth: '100%', margin: '0 auto', marginTop: 100, backgroundColor: '#fff', borderRadius: '5%', border: '1px solid red', outline: 0 }}>
                    <Grid item xs={4}>
                        <p style={{ textAlign: 'center', fontSize: 24, color: 'green', borderBottom: '1px dotted lightcoral' }}>MI PEDIDO</p>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    )
}

const styles = {
    cartStyle: { fontSize: 30, color: 'lightGrey' },
    activeCartStyle: { fontSize: 30, color: 'green' }
}

export { ShoppingCart }