import React from 'react'
import Carousel from 'nuka-carousel'

const Reviews = ({ reviews }) => {
    return (
        <section>
            <div style={{ position: 'relative', flex: 1, backgroundColor: '#000', minHeight: 250 }}>
                <img alt='reviews' src='../img/reviews.png' style={{ width: '100%', minHeight: 250, opacity: 0.5 }} />
                <div style={{ width: '100%', position: 'absolute', top: '10%', textAlign: 'center' }}>
                <h3 style={{ color: '#fff' }}>Algunas reseñas de nuestros clientes</h3>
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
                        { reviews.map((review, key) => {
                            console.log(review)
                            return(
                                <div>
                                    <h2 style={{ color: '#fff' }}>{review.author_name}</h2>
                                </div>
                            )
                        })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export { Reviews }