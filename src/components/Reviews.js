import React from 'react'
import Carousel from 'nuka-carousel'
import { Star, FormatQuote } from '@material-ui/icons'
import { getStarsFromRating } from '../helpers'

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
                        {reviews.map((review, key) => {
                            return (
                                <div key={key}>
                                    <h2 style={{ color: '#fff' }}>{review.author_name}</h2>
                                    <div style={{ flexDirection: 'row' }}>
                                        {
                                            getStarsFromRating(review.rating).map((point) => {
                                                return <Star key={point} style={{ color: '#fff57e' }} />
                                            })
                                        }
                                    </div>
                                    <div style={{ flexDirection: 'row' }}>
                                        <h3 style={{ color: '#fff' }}>
                                            <FormatQuote style={{ color: '#fff57e' }} />
                                                {review.text}
                                            <FormatQuote style={{ color: '#fff57e' }} />
                                        </h3>
                                    </div>
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