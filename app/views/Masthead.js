import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Masthead extends Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
  }

  state = {
    links: [
      {
        path: '/hello-world',
        title: '1. Hello World',
      },
      {
        path: '/meme-generator',
        title: '2. Meme Generator',
      },
      {
        path: '/beer-list',
        title: '3. Beer List',
      },
      {
        path: '/tip-calculator',
        title: '4. Tip Calculator',
      },
      {
        path: '/shopping-list',
        title: '5. Shopping List',
      },
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

    return <header role="banner" className="masthead">
      <Link to='/' className="masthead-title">React Training</Link>

      <nav className="tabs">
        <ul className="tabs_list">{links}</ul>
      </nav>
    </header>
  }
}
