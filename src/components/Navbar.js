import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, Grid } from '@material-ui/core'
import { Menu, Restaurant } from '@material-ui/icons'

import { NavLinks } from '.'
import { navbarEntranceAnimation } from '../animations'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowSize: window.innerWidth,
            showHamburguer: false,
        }
        this.toggleHamburguer = this.toggleHamburguer.bind(this)
        this.handleResize = this.handleResize.bind(this)
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

    render() {
        const { navbarStyle, logoImgStyle, navlinksContainerStyle, navbarMenuIconContainerStyle, menuIconStyle, shopCartContainer, cartStyle } = styles

        return (
            <div>
                <AppBar id='navbar' style={navbarStyle} >
                    <Toolbar>
                        <Grid container justify='space-between' alignItems='center'>
                            <Grid item lg={3} md={3} xs={4}>
                                <img alt='Logo' id='logo' src='./img/logo.png' style={logoImgStyle} />
                            </Grid>
                            <Grid item lg={6} md={6} xs={5} style={{ textAlign: 'center' }}>
                                <Restaurant style={cartStyle} />
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
    cartStyle: { fontSize: 30, color: 'lightGrey' }
}

export { Navbar }