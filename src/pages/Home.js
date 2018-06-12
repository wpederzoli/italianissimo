import React, { Component } from 'react'
import { Navbar, Banner, Featured, Reviews } from '../components'
import { navbarEntranceAnimation, bannerEntranceAnimation } from '../animations'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            showFeatured: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.showSection = this.showSection.bind(this)
    }

    componentDidMount() {
        navbarEntranceAnimation()
        bannerEntranceAnimation()
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

    test = () =>{
        console.log('hola')
        return <h1>nada</h1>
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
                <Reviews /> 
            </div>
        )
    }
}

export { Home }