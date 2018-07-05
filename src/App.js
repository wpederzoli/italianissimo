import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { Home, Menu } from './pages';

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
        </div>
      </Router>

    )
  }
}

export default App
