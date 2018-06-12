import { TweenMax } from 'gsap'

const bannerImageAnimation = () =>{
    TweenMax.from('#bannerImg', 2, {
        marginTop: -200,
        onComplete: bannerTextAnimation
    })
}

const bannerTextAnimation = () =>{
    TweenMax.to('#bannerTxt', 2, {
        opacity: 1,
        onComplete: locationIconAnimationGrow
    })
}

const locationIconAnimationGrow = () =>{
    TweenMax.to('#locationIcon', 0.5, {
        fontSize: 40,
        marginTop: 0,
        color: '#4da860',
        onComplete: locationIconAnimationShrink
    })
}

const locationIconAnimationShrink = () =>{
    TweenMax.to('#locationIcon', 0.5, {
        fontSize: 30,
        color: '#fff',
        marginTop: 5
    })
}

export const bannerEntranceAnimation = () =>{
    bannerImageAnimation()
}