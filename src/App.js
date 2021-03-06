import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Home from './pages/Home'
import Menu from './pages/Menu'
import PedirEnLinea from './pages/PedirEnLinea'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowSize: window.innerWidth,
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize() {
    this.setState({ windowSize: window.innerWidth })
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => <Home width={this.state.windowSize} /> } />
          <Route path='/menu' render={() => <Menu />} />
          <Route path='/pedir-en-linea' render={() => <PedirEnLinea />} />
        </div>
      </Router>

    )
  }
}

export default App
