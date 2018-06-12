import React from 'react'
import Carousel from 'nuka-carousel'

const Reviews = () => {
    return (
        <section>
            <div style={{ position: 'relative', flex: 1, backgroundColor: '#000' }}>
                <img alt='reviews' src='../img/reviews.png' style={{ width: '100%', opacity: 0.5 }} />
                <div style={{ width: '100%', position: 'absolute', top: '50%', textAlign: 'center' }}>
                    <Carousel 
                        autoplay 
                        swiping 
                        dragging
                        wrapAround 
                        renderTopCenterControls={() => false}
                        renderCenterCenterControls={() => false}
                        renderBottomCenterControls={() => false} 
                        renderCenterLeftControls={() => false} 
                        renderCenterRightControls={() => false}
                    >
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export { Reviews }