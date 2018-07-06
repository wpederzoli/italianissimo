import React, { Component } from 'react'

import { Navbar, Footer, MenuCompleto } from '../components'
import { getFullMenu } from '../helpers'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            fullMenu:{}
        }
        this.setupData = this.setupData.bind(this)
    }

    componentWillMount(){
        this.setupData()
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
                <Navbar />
                    <MenuCompleto categories={this.state.categories} fullMenu={this.state.fullMenu} />
                <Footer />
            </div>
        )
    }
}

export { Menu }