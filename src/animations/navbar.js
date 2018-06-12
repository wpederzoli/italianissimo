import { TweenMax } from 'gsap'

const logoEntranceAnimation = () => {
    TweenMax.from('#logo', 2, {
        rotation: -360,
        marginLeft: -200,
        opacity: 0
    })
}

const topbarEntranceAnimation = () => {
    TweenMax.from('#navbar', 1, {
        height: 0
    })
}

const navLinksEntranceAnimation = () =>{
    TweenMax.from('#contacto', 2, {
        marginRight: -200
    })
    TweenMax.from('#verMenu', 2, {
        marginRight: -200
    })
    TweenMax.from('#pedirEnLinea', 2, {
        marginRight: -600
    })
}

const hamburguerEntranceAnimation = () =>{
    TweenMax.from('#hamburguer', 2, {
        marginRight: -200
    })
}

export const navbarEntranceAnimation = () =>{
    logoEntranceAnimation()
    topbarEntranceAnimation()
    navLinksEntranceAnimation()
    hamburguerEntranceAnimation()
}