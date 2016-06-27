import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Masthead extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
    pirate: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isSaved: PropTypes.bool.isRequired,
      availablePoints: PropTypes.number.isRequired,
      totalMoney: PropTypes.number.isRequired,
    }).isRequired
  }

  state = {
    links: [
      {
        path: '/character-sheet',
        title: 'Character Sheet',
      },
      {
        path: '/spaceship',
        title: 'Spaceship',
      }
    ]
  }

  activeFor(path) {
    if (path === this.props.currentPath) {
      return 'active'
    }

    return ''
  }

  render() {
    const links = this.state.links.map((link) => {
      const { path, title } = link
      const activeClass = this.activeFor(path)

      return <li
        key={path}
        className={`tabs_list_item ${activeClass}`}
      >
        <Link
          to={`${path}`}
          className="tabs_list_item_title"
        >{title}</Link>
      </li>
    })

    const { pirate } = this.props

    return <header role="banner" className="masthead">
      <Link to='/' className="masthead-title">Shiny Space Pirates</Link>

      <nav className="tabs">
        <ul className="tabs_list">{links}</ul>
      </nav>

      <nav className="tabs -right">
        <ul className="tabs_list">
          <li className="tabs_list_item" title="How many points you have to spend in your character sheet">
            <span className="tabs_list_item_title">
              Attribute Points: {pirate.availablePoints}
            </span>
          </li>
          <li className="tabs_list_item" title="How much money you have">
            <span className="tabs_list_item_title">
              Available Cash: {pirate.totalMoney}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  }
}
