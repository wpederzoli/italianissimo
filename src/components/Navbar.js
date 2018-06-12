import React from 'react'
import { AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core'
import MenuIcon  from '@material-ui/icons/Menu'

import { NavLinks } from '.'
import { logoImgStyle, menuIconStyle, navbarMenuIconContainerStyle, navlinksContainerStyle, navbarStyle } from '../styles'

const Navbar = ({ width, toggleMenu, showMenu }) => {
    return (
        <div>
        <AppBar id='navbar' style={navbarStyle} >
            <Toolbar>
                <img alt='Logo' id='logo' src='./img/logo.png' style={logoImgStyle} />
                <div style={navlinksContainerStyle}>
                    {
                        width <= 600 ? <IconButton id='hamburguer' style={navbarMenuIconContainerStyle} onClick={toggleMenu}><MenuIcon style={menuIconStyle}/></IconButton> : <NavLinks />
                    }
                </div>
            </Toolbar>
        </AppBar>
        <Drawer anchor='top' open={showMenu} onClick={toggleMenu}>
            <NavLinks drawer />
        </Drawer>
        </div>
    )
}

export { Navbar }