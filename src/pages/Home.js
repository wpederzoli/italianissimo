import React, { Component } from 'react'
import { Navbar, Banner, Featured, Reviews, Footer } from '../components'
import { connect } from 'react-redux'
import { bannerEntranceAnimation } from '../animations'
import FontAwesome from 'react-fontawesome'

import { setReviews } from '../Actions'


class Home extends Component {
    
    componentWillMount() {
        this.props.setReviews()
    }

    componentDidMount() {
        bannerEntranceAnimation()
    }

    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Featured />
                <Reviews reviews={this.props.reviews} />
                <Footer
                    leftElements={[<p style={{ color: '#fff', textAlign: 'center', margin: '0 auto', padding: 3 }}>©Italianissimo 2018</p>]}
                    centerElements={[
                        <a href="#">
                            <FontAwesome name="facebook" style={{ color: '#fff', fontSize: 15, textAlign: 'center' }} />
                        </a>
                    ]}
                    rightElements={[
                        <div>
                            <FontAwesome name="phone" style={{ color: '#fff', fontSize: 15, display: 'inline' }} />
                            <p style={{ color: '#fff', textAlign: 'center', margin: '0 auto', display: 'inline' }}>(735)35-6-13-28</p>
                        </div>
                    ]}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.home.reviews
    }
}

export default connect(mapStateToProps, { setReviews })(Home)