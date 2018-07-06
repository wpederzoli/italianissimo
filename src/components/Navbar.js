import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { NavLinks } from '.'
import { navbarEntranceAnimation } from '../animations'

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
        const {navbarStyle, logoImgStyle, navlinksContainerStyle, navbarMenuIconContainerStyle, menuIconStyle } = styles
        
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

const styles = {
    navbarStyle: { backgroundColor: '#f7f7f7' },
    logoImgStyle: { width: 100, height: 100, margin: 5 },
    navlinksContainerStyle: { flex: 1, marginRight: 20 },
    navbarMenuIconContainerStyle: { float: 'right' },
    menuIconStyle: { fontSize: 40 }
}

export { Navbar }