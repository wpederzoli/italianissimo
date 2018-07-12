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
            style={{
                label: 'pay',
                fundingicons: true,
                color: 'silver',
            }}
            onSuccess={payment => console.log(payment)}
            onCancel={data => console.log('payment canceled! ' + JSON.stringify(data))}
        />
    )
}

export { PayPalComponent }