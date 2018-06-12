import { TweenMax } from 'gsap'

export const growLink = (imgID) =>{
    TweenMax.to(`#${imgID}`, 0.5, {
        width: 210,
        height: 210,
        borderRadius: 105
    })
}

export const shrinkLink = (imgID) =>{
    TweenMax.to(`#${imgID}`, 0.5, {
        width: 200,
        height: 200,
        borderRadius: 100
    })
}