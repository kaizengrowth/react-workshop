import React, { Component, PropTypes } from 'react'
import { Masthead } from '../views'

export default class ShinySpacePirates extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = {
    pirate: {
      name: '',
      isSaved: false,
      availablePoints: 40,
      totalMoney: 500000,
    },

    spaceship: {
      name: null,
      isSaved: false,
      hull: null,
      bays: {},
    }
  }

  render() {
    const { children, location } = this.props
    const { pirate, spaceship } = this.state

    // TODO - There's got to be a better way
    window.pirate = pirate
    window.spaceship = spaceship

    return <section id="shiny-space-pirates">
      <Masthead
        currentPath={location.pathname}
        pirate={pirate}
      />

      {children}
    </section>
  }
}
