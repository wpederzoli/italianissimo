import React from 'react'
import Carousel from 'nuka-carousel'

import { Navbar } from '../components'

const Menu = () =>{
    return(
        <div>
            <Navbar />
            <Carousel style={{ marginTop: 150 }}>
                <img src='./img/menu-portada.png' />
                <img src='./img/menu-pag1.png' />
                <img src='./img/menu-pag2.png' />
            </Carousel>
        </div>
    )
}

export default Menu