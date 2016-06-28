import React, { Component } from 'react'
import { casesOfBeer } from '../helpers'

// ==== Challenge ====
// 1. Brainstorm a better user experience for filter visibilty
// 2. Check the appropriate radio button for each filter
// 3. Compute the total quantity of bottles or cans for each case
// 4. Update the output row to display the size (ex: 12oz)
// 5. Implement the type and subtype filters
//
// ----   Extra   ----
// 6. Move the the list item for beers to their own component
// 7. Move the filters to their own component
// ===================

export default class BeerList extends Component {
  state = {
    drinkType: 'all',
    drinkSubtype: 'any',
  }

  render() {
    const { drinkType, drinkSubtype } = this.state

    console.log('cases of beer', casesOfBeer)
    console.log('selectd drinkType', drinkType)
    console.log('selectd drinkSubtype', drinkSubtype)

    // TODO: implement filtering list of beers based on type and/or subtype
    const beers = casesOfBeer.map((caseOf, index) => {
      const total = 0 // not yet implemented

      return <li key={index}>
        {`${total}x ${caseOf.contents} of ${caseOf.name}`}
      </li>
    })

    return <section id="beer-list" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Beer List</h1>

          <form>
            <fieldset>
              <legend>Type</legend>
              <label>
                <input
                  type="radio" name="type" value="all"
                  onChange={() => this.setState({ drinkType: 'all' })}
                /> All
              </label>
              <label>
                <input
                  type="radio" name="type" value="soft"
                  onChange={() => this.setState({ drinkType: 'soft' })}
                /> Soft Drink
              </label>
              <label>
                <input
                  type="radio" name="type" value="hard"
                  onChange={() => this.setState({ drinkType: 'hard' })}
                /> Hard Drink
              </label>
            </fieldset>
            <fieldset>
              <legend>Subtype</legend>
              <label>
                <input
                  type="radio" name="subtype" value="any"
                  onChange={() => this.setState({ drinkSubtype: 'any' })}
                /> Any
              </label>
              <label>
                <input
                  type="radio" name="subtype" value="ale"
                  onChange={() => this.setState({ drinkSubtype: 'ale' })}
                /> Ale
              </label>
              <label>
                <input
                  type="radio" name="subtype" value="lager"
                  onChange={() => this.setState({ drinkSubtype: 'lager' })}
                /> Lager
              </label>
            </fieldset>
          </form>

          <ul>{beers}</ul>
        </div>
      </div>
    </section>
  }
}

