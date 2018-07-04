import React from 'react'
import { Grid } from '@material-ui/core'

const Footer = ({ leftElements, centerElements, rightElements }) => {
    const { footerContainerStyle, footerElementsContainerStyle, footerCenterElementsStyle, leftFooterElementsStyle } = styles
    return (
        <Grid container style={footerContainerStyle}>
            <Grid item lg={4} md={4} xs={4}>
                {
                    leftElements.map((el, key) =>{
                        return <div key={key}>{el}</div>
                    })
                }
            </Grid>
            <Grid item lg={4} md={4} xs={4} style={{ textAlign: 'center' }}>
                {
                    centerElements.map((el, key) => {
                        return <div key={key}>{el}</div>
                    })
                }
            </Grid>
            <Grid item lg={4} md={4} xs={4}>
                <Grid container style={{ textAlign: 'center', alignSelf: 'center' }}>
                    {
                        rightElements.map((element, key) =>{
                            return <Grid item key={key}>{element}</Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

// Uses Material UI Design
const styles = {
    footerContainerStyle: {
        backgroundColor: '#ce5a5a',
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '5%',
        borderRadius: 2,
        padding: 3
    }
}

export { Footer }