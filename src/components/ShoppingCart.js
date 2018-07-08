import React from 'react'
import { Button, Modal, Grid } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

const ShoppingCart = ({ order, showOrder, hideOrder, onClick }) => {

    const { cartStyle, activeCartStyle } = styles

    return (
        <div>
            <Button variant='fab' disabled={order !== undefined && order.length > 0 ? false : true} onClick={onClick}>
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
                <div style={{ width: 500, maxHeight: '75%', maxWidth: '100%', margin: '0 auto', marginTop: 100, backgroundColor: '#fff', borderRadius: '5%', border: '1px solid red', outline: 0, overflowY: 'scroll' }}>
                    <Grid container justify='center'>
                        <Grid item xs={4}>
                            <p style={{ textAlign: 'center', fontSize: 24, color: 'green', borderBottom: '1px dotted lightcoral' }}>MI PEDIDO</p>
                        </Grid>
                    </Grid>
                    {
                        order !== undefined && order.length > 0 ? order.map((item, key) => {
                            return (
                                <Grid container>
                                    <Grid item xs={10}>
                                        <p style={{ textAlign: 'center', fontWeight: '600', color: 'grey' }}>{item.name}</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p style={{ textAlign: 'center' }}>${item.price}</p>
                                    </Grid>
                                </Grid>
                            )
                        }) : null
                    }
                </div>
            </Modal>
        </div>
    )
}

const styles = {
    cartStyle: { fontSize: 30, color: 'lightGrey' },
    activeCartStyle: { fontSize: 30, color: 'green' }
}

export { ShoppingCart }