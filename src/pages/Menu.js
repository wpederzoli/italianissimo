import React, { Component } from 'react'

import { Navbar, Footer, MenuCompleto } from '../components'

class Menu extends Component {
    constructor(props) {
        super(props)
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