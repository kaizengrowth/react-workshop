import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Masthead extends Component {
  render() {
    return <header role="banner" className="masthead">
      <Link to='/' className="masthead-title">Hello, World!</Link>
    </header>
  }
}
