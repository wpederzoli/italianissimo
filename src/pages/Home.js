import React, { Component } from 'react'
import { Navbar, Banner, Featured, Reviews, Footer } from '../components'
import { bannerEntranceAnimation } from '../animations'
import FontAwesome from 'react-fontawesome'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
        this.showSection = this.showSection.bind(this)
        this.setReviews = this.setReviews.bind(this)
    }

    componentWillMount() {
        this.setReviews()
    }

    componentDidMount() {
        bannerEntranceAnimation()
    }


    showSection = (section, visible) => {
        console.log('this is running ' + visible)
        switch (section) {
            case 'featured':
                this.setState({ showFeatured: true })
                break
            default:
                return
        }
    }

    setReviews = async () => {
        const data = await fetch('http://localhost:1235/proxy?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fdetails%2Fjson%3Fplaceid%3DChIJ-RYfc0xszoURCj1q6uzndmM%26key%3DAIzaSyCHpN7D1O9uaVqFQ5lZ5hw48n-r3YEjMO0')
        const response = await data.json()
        this.setState({
            reviews: response.result.reviews
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <Featured />
                <Reviews reviews={this.state.reviews} />
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

export { Home }