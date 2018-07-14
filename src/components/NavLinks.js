import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavLinks = ({ drawer }) => {
    return (
        <div style={drawer ? { display: 'inline-flex' } : null} >
            <Link to='/pedir-en-linea'>
                <Button id='pedirEnLinea' style={{ float: 'right', backgroundColor: '#f30606ba', color: '#fff' }}>
                    Pedir en Línea
            </Button>
            </Link>
            <Button id='contacto' style={{ float: 'right' }}>
                Contacto
            </Button>
            <Link to='/menu'>
                <Button id='verMenu' style={{ float: 'right', backgroundColor: '#0e8b29ba', color: '#fff' }}>
                    Ver Menú
            </Button>
            </Link>
        </div>
    )
}

export { NavLinks }