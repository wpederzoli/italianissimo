import React from 'react'
import { Grid } from '@material-ui/core'

const MenuCompleto = ({ categories, fullMenu }) => {

    const { menuContainerStyle, backgroundImageStyle, menuPageContainerStyle, categoryTitle, categoryTitleContainer } = styles

    return (
        <div style={menuContainerStyle}>
            <div style={menuPageContainerStyle}>
            {/* <img alt='fondo-menu' src='./img/fondo-menu.png' style={backgroundImageStyle} /> */}
                {
                    categories.map((category, key) =>{
                        return(
                            <Grid container>
                                <Grid item lg={4} md={4} xs={4} />
                                <Grid item lg={4} md={4} xs={4} style={categoryTitleContainer}>
                                    <p style={categoryTitle}>{category.toUpperCase()}</p>
                                </Grid>
                                <Grid item lg={4} md={4} xs={4} />
                            </Grid>
                        )
                    })
                }
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
        backgroundImage: 'url(img/fondo-menu.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    },
    backgroundImageStyle: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
    },
    categoryTitleContainer: {
        backgroundImage: 'url(img/fondo-categoria.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    },
    categoryTitle: { 
        color: '#fff', 
        textAlign:'center', 
        fontWeight:'600' 
    }
}

export { MenuCompleto }