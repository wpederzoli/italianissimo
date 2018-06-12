import React from 'react'
import { Place } from '@material-ui/icons'

import {
    bannerContainerStyle,
    bannerImageStyle,
    bannerTextContainerStyle,
    bannerMainTitleStyle,
    bannerHeadTitleStyle,
    bannerFlagGreenStyle,
    bannerFlagRedStyle, bannerLocationIconStyle, bannerLocationTextStyle
} from '../styles'

const Banner = () => {
    return (
        <div id='banner' style={bannerContainerStyle}>
            <img id='bannerImg' alt='italianissimo' src='./img/banner.jpg' style={bannerImageStyle} />
            <div id='bannerTxt' style={bannerTextContainerStyle}>
                <h4 style={bannerHeadTitleStyle}>L'AUTENTICA CUCINA ITALIANA</h4>
                <div style={bannerFlagGreenStyle} />
                <h1 style={bannerMainTitleStyle}>ITALIANISSIMO DA MARIO</h1>
                <div style={bannerFlagRedStyle} />
                <Place id='locationIcon' style={bannerLocationIconStyle} />
                <p style={bannerLocationTextStyle}>
                    Sucursal Bosques - Junto a los Tacos de la entrada de Lomas. Sucursal Centro Comercial -
                    Zona de comida Centro Comercial Lomas de Cocoyoc.
                </p>
            </div>
        </div>
    )
}

export { Banner }