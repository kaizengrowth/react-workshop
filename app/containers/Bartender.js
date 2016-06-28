import React, { Component } from 'react'
import { casesOfBeer } from '../helpers'
import { BarItem } from '../views'

// ==== Challenge ====
// 1. Hook up the BarItem view
// 2. Provide an event handler to BarItem to handle drinking a beer
// 3. Keep a running count of how many of each beer gets drunk
// 4. When no beers are left, hide the drink button and strikeout the row
// 5. Show the contents and size within BarItem
//
// ----   Extra   ----
// 6. Correctly pluralize contents when only one is left
// 7. Bring in filtering implementation from BeerList
// ===================

export default class Bartender extends Component {
  state = {
  }

  render() {
    const beers = casesOfBeer.map((caseOf, index) => {
      // TODO: implement this
      return <BarItem />
    })

    return <section id="bartender" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Bartender</h1>

          <ul>{beers}</ul>
        </div>
      </div>
    </section>
  }
}
