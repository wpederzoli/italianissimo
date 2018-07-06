import React from 'react'
import { Grid } from '@material-ui/core'

const MenuCompleto = ({ categories, fullMenu }) => {

    const {
        menuContainerStyle,
        menuPageContainerStyle,
        categoryTitle,
        categoryTitleContainer,
        menuItemTitle,
        menuItemDescription,
        menuItemPrice
    } = styles

    return (
        <div style={menuContainerStyle}>
            {
                categories.map((category, key) => {
                    return (
                        <div style={menuPageContainerStyle}>
                            <div key={key} style={{ padding: '5%' }}>
                                <Grid container>
                                    <Grid item lg={4} md={4} xs={4} />
                                    <Grid item lg={4} md={4} xs={4} style={categoryTitleContainer}>
                                        <p style={categoryTitle}>{category.toUpperCase()}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} xs={4} />
                                </Grid>
                                <Grid container>
                                    {
                                        fullMenu[category].map((item, key) => {
                                            return (
                                                <Grid key={key} item lg={6} md={6} xs={12}>
                                                    <p style={menuItemTitle}>{item.name.toUpperCase()}</p>
                                                    <p style={menuItemDescription}>{item.description}</p>
                                                    <p style={menuItemPrice}>${item.price}</p>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </div>
                        </div>
                    )
                })
            }
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
        textAlign: 'center',
        fontWeight: '600'
    },
    menuItemTitle: {
        textAlign: 'center',
        color: 'grey',
        fontWeight: '500'
    },
    menuItemDescription: {
        textAlign: 'center'
    },
    menuItemPrice: {
        textAlign: 'center',
        color: 'darkgrey',
        fontWeight: '600'
    }
}

export { MenuCompleto }