import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Welcome extends Component {
  render() {
    return <section id="welcome" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>React Training</h1>
          <p>This workshop contains five exercises:</p>

          <ol>
            <li>
              <Link to="/hello-world">Hello World</Link>
            </li>
            <li>
              <Link to="/meme-generator">Meme Generator</Link>
            </li>
            <li>
              <Link to="/tip-calculator">Tip Calculator</Link>
            </li>
            <li>
              <Link to="/beer-list">Beer List</Link>
            </li>
            <li>
              <Link to="/bartender">Bartender</Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  }
}

