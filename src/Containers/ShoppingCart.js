import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Grid } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'

import { addToCart, hideOrder, displayOrder } from '../Actions'
import { getTotalBill } from '../helpers'

class ShoppingCart extends Component {

    render() {
        const {
            cartStyle,
            activeCartStyle,
            numberOfItemsInCartStyle,
            numberOfItemsInCartText,
            showOrderContainerStyle,
            showOrderTitleStyle,
            showOrderItemNameStyle,
            showOrderItemPriceStyle,
            payButtonContainerStyle,
            payButtonStyle,
            totalTextStyle,
            totalNumberStyle
        } = styles

        const { order, showOrder, hideOrder, displayOrder } = this.props
        return (
            <div>
                <Button variant='fab' disabled={ order.length > 0 ? false : true } onClick={() => displayOrder()}>
                    <Restaurant style={ order.length > 0 ? activeCartStyle : cartStyle} />
                    {
                         order.length > 0 ?
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
                             order.length > 0 ? order.map((item, key) => {
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
                        {
                             order.length > 0 ?
                                <div>
                                    <Grid container justify='center'>
                                        <Grid item xs={10} style={totalTextStyle}>
                                            <p>TOTAL: </p>
                                        </Grid>
                                        <Grid item xs={2} style={totalNumberStyle}>
                                            <p>${getTotalBill(order)}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                                : null
                        }
                        <div style={payButtonContainerStyle}>
                            <Button style={payButtonStyle}>Pagar</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
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
        overflowY: 'scroll',
        position: 'relative'
    },
    showOrderTitleStyle: {
        textAlign: 'center',
        fontSize: 24,
        color: 'green',
        borderBottom: '1px dotted lightcoral'
    },
    showOrderItemNameStyle: { textAlign: 'center', fontWeight: '600', color: 'grey' },
    showOrderItemPriceStyle: { textAlign: 'center' },
    payButtonContainerStyle: {
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        textAlign: 'center'
    },
    payButtonStyle: {
        backgroundColor: '#4da860',
        color: '#fff'
    },
    totalTextStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
        textAlign: 'right'
    },
    totalNumberStyle: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center'
    }
}


const mapStateToProps = state => {
    const { order, showOrder } = state.cart
    return {
        order,
        showOrder
    }
}

export default connect(mapStateToProps, { addToCart, hideOrder, displayOrder })(ShoppingCart)