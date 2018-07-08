import React, { Component } from 'react'

import { Navbar, Footer, MenuCompleto } from '../components'
import { getFullMenu } from '../helpers'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            fullMenu:{},
            order: [],
        }
        this.setupData = this.setupData.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentWillMount(){
        this.setupData()
    }

    addToCart = (item) =>{
        const all = this.state.order
        all.push(item)
        this.setState({
            order: all
        })
    }

    setupData = () =>{
        const data = getFullMenu()
        const categories = Object.keys(data)
        this.setState({
            categories,
            fullMenu: data
        })
    }

    render() {
        return (
            <div>
                <Navbar 
                    order={this.state.order}
                />
                    <MenuCompleto 
                        categories={this.state.categories} 
                        fullMenu={this.state.fullMenu}
                        addItem={this.addToCart} 
                    />
                <Footer />
            </div>
        )
    }
}

export { Menu }