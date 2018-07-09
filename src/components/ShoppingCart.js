import React from 'react'
import { Button, Modal, Grid } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

const ShoppingCart = ({ order, showOrder, hideOrder, onClick }) => {

    const { 
        cartStyle, 
        activeCartStyle, 
        numberOfItemsInCartStyle,
        numberOfItemsInCartText,
        showOrderContainerStyle,
        showOrderTitleStyle,
        showOrderItemNameStyle,
        showOrderItemPriceStyle 
    } = styles

    return (
        <div>
            <Button variant='fab' disabled={order !== undefined && order.length > 0 ? false : true} onClick={onClick}>
                <Restaurant style={order !== undefined && order.length > 0 ? activeCartStyle : cartStyle} />
                {
                    order !== undefined && order.length > 0 ?
                        <div style={numberOfItemsInCartStyle}>
                            <p style={numberOfItemsInCartText}>{order.length}</p>
                        </div> :
                        null
                }
            </Button>
            <Modal open={showOrder} onClose={hideOrder}>
                <div style={showOrderContainerStyle}>
                    <Grid container justify='center'>
                        <Grid item xs={4}>
                            <p style={showOrderTitleStyle}>MI PEDIDO</p>
                        </Grid>
                    </Grid>
                    {
                        order !== undefined && order.length > 0 ? order.map((item, key) => {
                            return (
                                <Grid container key={key}>
                                    <Grid item xs={10}>
                                        <p style={showOrderItemNameStyle}>{item.name}</p>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <p style={showOrderItemPriceStyle}>${item.price}</p>
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
    activeCartStyle: { fontSize: 30, color: 'green' },
    numberOfItemsInCartStyle: { 
        width: 25, 
        height: 25, 
        borderRadius: 25, 
        backgroundColor: 'red', 
        position: 'absolute', 
        bottom: 0, 
        right: 0 
    },
    numberOfItemsInCartText: { textAlign: 'center', color: '#fff', margin: '0 auto', fontSize: 15 },
    showOrderContainerStyle: { 
        width: 500, 
        maxHeight: '75%', 
        maxWidth: '100%', 
        margin: '0 auto', 
        marginTop: 100, 
        backgroundColor: '#fff', 
        borderRadius: '5%', 
        border: '1px solid red', 
        outline: 0,
        overflowY: 'scroll' 
    },
    showOrderTitleStyle: { 
        textAlign: 'center', 
        fontSize: 24, 
        color: 'green', 
        borderBottom: '1px dotted lightcoral' 
    },
    showOrderItemNameStyle: { textAlign: 'center', fontWeight: '600', color: 'grey' },
    showOrderItemPriceStyle: { textAlign: 'center' }
}

export { ShoppingCart }