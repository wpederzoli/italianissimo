import React, { Component } from 'react'
import { Navbar, Banner, Featured, Reviews } from '../components'
import { navbarEntranceAnimation, bannerEntranceAnimation } from '../animations'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            showFeatured: false,
            reviews: []
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.showSection = this.showSection.bind(this)
        this.setReviews = this.setReviews.bind(this)
    }

    componentWillMount(){
        this.setReviews()
    }

    componentDidMount() {
        navbarEntranceAnimation()
        bannerEntranceAnimation()
        console.log(this.state)
    }


    toggleMenu = () => {
        this.state.showMenu ? this.setState({ showMenu: false }) :
            this.setState({ showMenu: true })
    }

    showSection = (section, visible) =>{
        console.log('this is running ' + visible)
        switch(section){
            case 'featured':
                this.setState({ showFeatured: true })
                break
            default:
                return
        }
    }

    setReviews = async() =>{
        const data = await fetch('http://localhost:1235/proxy?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fdetails%2Fjson%3Fplaceid%3DChIJ-RYfc0xszoURCj1q6uzndmM%26key%3DAIzaSyCHpN7D1O9uaVqFQ5lZ5hw48n-r3YEjMO0')
        const response = await data.json()
        this.setState({
            reviews: response.result.reviews
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    width={this.props.width}
                    showMenu={this.state.showMenu}
                    toggleMenu={() => this.toggleMenu()}
                />
                <Banner />
                <Featured />
                <Reviews reviews={this.state.reviews} /> 
            </div>
        )
    }
}

export { Home }