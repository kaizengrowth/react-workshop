import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Masthead extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
  }

  state = {
    links: [
      {
        path: '/character-sheet',
        title: 'Character Sheet',
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

      return <li className={`tabs_list_item ${activeClass}`}>
        <Link
          to={`${path}`}
          className="tabs_list_item_title"
        >{title}</Link>
      </li>
    })

    return <header role="banner" className="masthead">
      <Link to='/' className="masthead-title">Shiny Space Pirates</Link>

      <nav className="tabs">
        <ul className="tabs_list">{links}</ul>
      </nav>
    </header>
  }
}
