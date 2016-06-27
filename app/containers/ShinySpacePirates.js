import React, { Component, PropTypes } from 'react'
import { Masthead } from '../views'

export default class ShinySpacePirates extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { children, location } = this.props

    return <section id="shiny-space-pirates">
      <Masthead
        currentPath={location.pathname}
      />

      {children}
    </section>
  }
}
