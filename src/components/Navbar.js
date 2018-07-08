import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import { NavLinks, ShoppingCart } from '.'
import { navbarEntranceAnimation } from '../animations'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowSize: window.innerWidth,
            showHamburguer: false,
            cartModal: false
        }
        this.toggleHamburguer = this.toggleHamburguer.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.openCart = this.openCart.bind(this)
        this.hideCart = this.hideCart.bind(this)
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
        navbarEntranceAnimation()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
    }

    handleResize() {
        this.setState({ windowSize: window.innerWidth })
    }

    toggleHamburguer = () => {
        this.state.showHamburguer ? this.setState({ showHamburguer: false }) :
            this.setState({ showHamburguer: true })
    }

    openCart = () =>{
        console.log('opening cart ' + this.state.cartModal)
        this.setState({ cartModal: true })
    }

    hideCart = () =>{
        this.setState({ cartModal: false })
    }

    render() {
        const { navbarStyle, logoImgStyle, navbarMenuIconContainerStyle, menuIconStyle } = styles

        return (
            <div>
                <AppBar id='navbar' style={navbarStyle} >
                    <Toolbar>
                        <Grid container justify='space-between' alignItems='center'>
                            <Grid item lg={3} md={3} xs={4}>
                                <img alt='Logo' id='logo' src='./img/logo.png' style={logoImgStyle} />
                            </Grid>
                            <Grid item lg={6} md={6} xs={5} style={{ textAlign: 'center' }}>
                                <ShoppingCart 
                                    order={this.props.order} 
                                    showOrder={this.state.cartModal}
                                    hideOrder={this.hideCart}
                                    onClick={this.openCart} 
                                />
                            </Grid>
                            <Grid item lg={3} md={3} xs={3}>
                                {
                                    this.state.windowSize <= 600 ?
                                        <IconButton id='hamburguer' style={navbarMenuIconContainerStyle} onClick={() => this.toggleHamburguer()}>
                                            <Menu style={menuIconStyle} />
                                        </IconButton> :
                                        <NavLinks />
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='top' open={this.state.showHamburguer} onClick={() => this.toggleHamburguer()}>
                    <NavLinks drawer />
                </Drawer>
            </div>
        )
    }
}

const styles = {
    navbarStyle: { backgroundColor: '#f7f7f7' },
    logoImgStyle: { width: 100, height: 100, margin: 5 },
    navlinksContainerStyle: { flex: 1, marginRight: 20 },
    navbarMenuIconContainerStyle: { float: 'right' },
    menuIconStyle: { fontSize: 40 },
    shopCartContainer: { width: '100%', textAlign: 'center' },
}

export { Navbar }