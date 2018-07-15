import React from 'react'
import Carousel from 'nuka-carousel'

import { Navbar, Footer } from '../components'

const Menu = () =>{
    return(
        <div>
            <Navbar />
            <Carousel style={{ marginTop: 150 }}>
                <img src='./img/menu-portada.png' />
                <img src='./img/menu-pag1.png' />
                <img src='./img/menu-pag2.png' />
                <img src='./img/menu-pag3.png' />
                <img src='./img/menu-pag4.png' />
                <img src='./img/menu-pag5.png' />
                <img src='./img/menu-pag6.png' />
                <img src='./img/menu-pag7.png' />
            </Carousel>
            <Footer />
        </div>
    )
}

export default Menu