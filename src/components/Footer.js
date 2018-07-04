import React from 'react'
import { Grid } from '@material-ui/core'

const Footer = ({ leftElements, centerElements, rightElements }) => {
    const { footerContainerStyle, footerElementsContainerStyle, footerCenterElementsStyle, leftFooterElementsStyle } = styles
    return (
        <Grid container style={footerContainerStyle}>
            <Grid item lg={4}>
                {
                    leftElements.map((el, key) =>{
                        return <div key={key}>{el}</div>
                    })
                }
            </Grid>
            <Grid item lg={4}>
                {
                    centerElements.map((el, key) => {
                        return <div key={key}>{el}</div>
                    })
                }
            </Grid>
            <Grid item lg={4}>chau</Grid>
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
    }
}

export { Footer }