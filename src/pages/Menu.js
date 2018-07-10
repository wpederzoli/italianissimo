import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Footer, MenuCompleto } from '../components'
import { getFullMenu } from '../helpers'
import { addToCart } from '../Actions'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            fullMenu: {},
        }
        this.setupData = this.setupData.bind(this)
    }

    componentWillMount() {
        this.setupData()
    }

    setupData = () => {
        const data = getFullMenu()
        const categories = Object.keys(data)
        this.setState({
            categories,
            fullMenu: data
        })
    }

    render() {
        const { addToCart } = this.props
        return (
            <div>
                <Navbar />
                <MenuCompleto
                    categories={this.state.categories}
                    fullMenu={this.state.fullMenu}
                    addItem={addToCart}
                    order={this.props.order}
                />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.cart.order
    }
}

export default connect(mapStateToProps, { addToCart })(Menu)