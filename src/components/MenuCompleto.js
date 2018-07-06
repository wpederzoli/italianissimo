import React from 'react'

const MenuCompleto = () => {

    const { menuContainerStyle, backgroundImageStyle, menuPageContainerStyle } = styles

    return (
        <div style={menuContainerStyle}>
            <div style={menuPageContainerStyle}>
            <img alt='fondo-menu' src='./img/fondo-menu.png' style={backgroundImageStyle} />
            </div>
        </div>
    )
}

const styles = {
    menuContainerStyle: {
        width: '100%'
    },
    menuPageContainerStyle: {
        margin: '0 auto',
        marginTop: 120,
        position: 'relative'
    },
    backgroundImageStyle: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
    }
}

export { MenuCompleto }