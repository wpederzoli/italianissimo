import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Footer, MenuCompleto } from '../components'
import { addToCart, setupData } from '../Actions'

class PedirEnLinea extends Component {

    componentWillMount() {
        this.props.setupData()
    }

    render() {
        const { addToCart } = this.props
        return (
            <div>
                <Navbar />
                <MenuCompleto
                    categories={this.props.categories}
                    fullMenu={this.props.fullMenu}
                    addItem={addToCart}
                    order={this.props.order}
                />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { categories, fullMenu } = state.onlineMenu
    return {
        order: state.cart.order,
        categories,
        fullMenu
    }
}

export default connect(mapStateToProps, { addToCart, setupData })(PedirEnLinea)