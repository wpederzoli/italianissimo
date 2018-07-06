import React, { Component } from 'react'

import { Navbar, Footer, MenuCompleto } from '../components'
import { getFullMenu } from '../helpers'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        console.log(getFullMenu())
    }

    render() {
        return (
            <div>
                <Navbar />
                    <MenuCompleto />
                <Footer />
            </div>
        )
    }
}

export { Menu }