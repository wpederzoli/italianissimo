import React, { Component } from 'react'

import { Navbar, Footer } from '../components'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export { Menu }