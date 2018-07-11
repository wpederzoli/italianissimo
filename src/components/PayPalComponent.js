import React, { Component } from 'react'
import PayPalExpressBtn from 'react-paypal-express-checkout'

const PayPalComponent = ({ amount }) =>{
    return(
        <PayPalExpressBtn 
            client={{
                sandbox: 'clientID'
            }}
            currency={'MXN'}
            total={amount}
        />
    )
}

export { PayPalComponent }