import React from 'react'
import { Grid, Button } from '@material-ui/core'

const MenuCompleto = ({ categories, fullMenu }) => {

    const {
        menuContainerStyle,
        menuPageContainerStyle,
        categoryTitle,
        categoryTitleContainer,
        menuItemTitle,
        menuItemDescription,
        menuItemPrice,
        addToCartButtonStyle
    } = styles

    return (
        <div style={menuContainerStyle}>
            {
                categories.map((category, key) => {
                    return (
                        <div key={key} style={menuPageContainerStyle}>
                            <div style={{ padding: '5%' }}>
                                <Grid container>
                                    <Grid item lg={4} md={4} xs={12} />
                                    <Grid item lg={4} md={4} xs={12} style={categoryTitleContainer}>
                                        <p style={categoryTitle}>{category.toUpperCase()}</p>
                                    </Grid>
                                    <Grid item lg={4} md={4} xs={12} />
                                </Grid>
                                <Grid container>
                                    {
                                        fullMenu[category].map((item, key) => {
                                            return (
                                                <Grid key={key} item lg={6} md={6} xs={12}>
                                                    <p style={menuItemTitle}>{item.name.toUpperCase()}</p>
                                                    <p style={menuItemDescription}>{item.description}</p>
                                                    <Grid container justify='center' alignItems='center'>
                                                        <Grid item lg={3} md={3} xs={3}>
                                                            <p style={menuItemPrice}>${item.price}</p>
                                                        </Grid>
                                                        <Grid item lg={1} md={1} xs={1}>
                                                            <Button variant='fab' style={addToCartButtonStyle} color='secondary'>+</Button>
                                                        </Grid>
                                                    </Grid>
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
    },
    addToCartButtonStyle: { 
        backgroundColor: '#4da860', 
        minWidth: '50%', 
        width:'100%', 
        height: '100%'  
    }
}

export { MenuCompleto }