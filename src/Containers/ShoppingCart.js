import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Grid } from '@material-ui/core'
import { Restaurant } from '@material-ui/icons'
import FontAwesome from 'react-fontawesome'

import { PayPalComponent, ConfirmationModal } from '../components'
import { addToCart, hideOrder, displayOrder, paymentSuccess, closeConfirmationModal } from '../Actions'

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
            totalTextStyle,
            totalNumberStyle
        } = styles

        const { order, showOrder, hideOrder, displayOrder, items, total, confirmation, success, paymentSuccess, closeConfirmationModal } = this.props
        return (
            <div>
                <Button variant='fab' disabled={order.length > 0 ? false : true} onClick={() => displayOrder(order)}>
                    <Restaurant style={order.length > 0 ? activeCartStyle : cartStyle} />
                    {
                        order.length > 0 ?
                            <div style={numberOfItemsInCartStyle}>
                                <p style={numberOfItemsInCartText}>{items}</p>
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
                                    <Grid container justify='center' alignItems='center' key={key}>
                                        <Grid item xs={4}>
                                            <p style={showOrderItemNameStyle}>{item.name}</p>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button size='small'>
                                                <FontAwesome name='minus-circle' />
                                            </Button>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p style={{ textAlign: 'center' }}>x{item.quantity}</p>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button size='small'>
                                                <FontAwesome name='plus-circle' />
                                            </Button>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p style={showOrderItemPriceStyle}>${item.price * item.quantity}</p>
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
                                            <p>${total}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                                : null
                        }
                        <div style={{ textAlign: 'center' }}>
                            <PayPalComponent
                                amount={total}
                                onSuccess={() => paymentSuccess()}
                            />
                        </div>
                    </div>
                </Modal>
                <ConfirmationModal 
                    show={confirmation}
                    success={success}
                    close={() => closeConfirmationModal()}
                />
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
    const { order, showOrder, items, total, confirmation, success } = state.cart
    return {
        order,
        showOrder,
        items,
        total,
        confirmation,
        success
    }
}

export default connect(mapStateToProps, { addToCart, hideOrder, displayOrder, paymentSuccess, closeConfirmationModal })(ShoppingCart)