import React, { Component } from 'react'
import { Hex } from '../views'

export default class Welcome extends Component {
  render() {
    return <section id="welcome" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Hello, World!</h1>
        </div>
      </div>
    </section>
  }
}

