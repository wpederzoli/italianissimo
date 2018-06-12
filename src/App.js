import React, { Component } from 'react'

import { Home } from './pages'

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
      <Home width={this.state.windowSize} />
    )
  }
}

export default App
