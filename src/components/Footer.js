import React from 'react'
import { Grid } from '@material-ui/core'

const Footer = ({ leftElements, centerElements, rightElements }) => {
    const { footerContainerStyle, footerElementsContainerStyle } = styles
    return (
        <Grid container style={footerContainerStyle}>
            <Grid item lg={4} md={4} xs={4}>
                <Grid container style={footerElementsContainerStyle}>
                    {leftElements  ?
                        leftElements.map((el, key) => {
                            return <Grid item key={key} style={{ margin: '0 auto' }}>{el}</Grid>
                        }) :
                        null
                    }
                </Grid>
            </Grid>
            <Grid item lg={4} md={4} xs={4}>
                <Grid container style={footerElementsContainerStyle}>
                    {centerElements ?
                        centerElements.map((el, key) => {
                            return <Grid item key={key} style={{ margin: '0 auto' }}>{el}</Grid>
                        }) :
                        null
                    }
                </Grid>
            </Grid>
            <Grid item lg={4} md={4} xs={4}>
                <Grid container style={footerElementsContainerStyle}>
                    {rightElements ?
                        rightElements.map((element, key) => {
                            return <Grid item key={key} style={{ margin: '0 auto' }}>{element}</Grid>
                        }) :
                        null
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}


const styles = {
    footerContainerStyle: {
        backgroundColor: '#ce5a5a',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '5%',
        borderRadius: 2,
        padding: 3
    },
    footerElementsContainerStyle:{
        textAlign: 'center', 
        alignSelf: 'center' 
    }
}

export { Footer }