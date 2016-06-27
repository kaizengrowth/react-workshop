import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Welcome extends Component {
  render() {
    return <section id="welcome" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Shiny Space Pirates</h1>
          <p>Welcome to the universe! Design your own <Link to="/character-sheet">Shiny Space Pirate</Link> now!</p>
        </div>
      </div>
    </section>
  }
}

