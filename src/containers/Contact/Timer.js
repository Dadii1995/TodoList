import React, { Component } from 'react'

class Timer extends Component {
  getTime = () => {
    this.setState({ currentTime: new Date().toLocaleTimeString() })
  }

  constructor(props) {
    super(props)
    this.state = { currentTime: new Date().toLocaleTimeString() }
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(this.getTime, 1000)

    this.getTime()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <h1>{this.state.currentTime}</h1>
  }
}

export default Timer
