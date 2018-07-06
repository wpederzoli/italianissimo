import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { NavLinks } from '.'
import { navbarEntranceAnimation } from '../animations'
import { logoImgStyle, menuIconStyle, navbarMenuIconContainerStyle, navlinksContainerStyle, navbarStyle } from '../styles'

class Navbar extends Component {
    constructor(props){
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

    toggleHamburguer = () =>{
        this.state.showHamburguer ? this.setState({ showHamburguer: false }) :
        this.setState({ showHamburguer: true })
    }

    render() {
        return (
            <div>
                <AppBar id='navbar' style={navbarStyle} >
                    <Toolbar>
                        <img alt='Logo' id='logo' src='./img/logo.png' style={logoImgStyle} />
                        <div style={navlinksContainerStyle}>
                            {
                                this.state.windowSize <= 600 ? <IconButton id='hamburguer' style={navbarMenuIconContainerStyle} onClick={() => this.toggleHamburguer()}><MenuIcon style={menuIconStyle} /></IconButton> : <NavLinks />
                            }
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='top' open={this.state.showHamburguer} onClick={() => this.toggleHamburguer()}>
                    <NavLinks drawer />
                </Drawer>
            </div>
        )
    }
}

export { Navbar }