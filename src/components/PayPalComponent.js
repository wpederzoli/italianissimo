import React, { Component } from 'react'
import PayPalExpressBtn from 'react-paypal-express-checkout'

const PayPalComponent = ({ amount, onSuccess }) =>{
    return(
        <PayPalExpressBtn 
            client={{
                sandbox: 'AQGTRI3WfHUUPDOxnSPzaz4wiGnNndWVxhVf0Q63qJjhJFyJX28YINYQxm0faHSWYI784BF42NS1WSV1'
            }}
            currency={'MXN'}
            total={amount}
            style={{
                label: 'pay',
                fundingicons: true,
                color: 'silver',
            }}
            onSuccess={onSuccess}
            onCancel={data => console.log('payment canceled! ' + JSON.stringify(data))}
        />
    )
}

export { PayPalComponent }