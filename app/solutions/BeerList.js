import React, { Component } from 'react'
import { casesOfBeer } from '../helpers'

export default class BeerList extends Component {
  state = {
    drinkType: 'all',
    drinkSubtype: 'any',
  }

  renderFilterSubtype(drinkType, drinkSubtype) {
    if (drinkType === 'soft') {
      return null
    }

    return <fieldset>
      <legend>Subtype</legend>
      <label>
        <input
          type="radio" name="subtype" value="any"
          onChange={() => this.setState({ drinkSubtype: 'any' })}
          checked={drinkSubtype === 'any'}
        /> Any
      </label>
      <label>
        <input
          type="radio" name="subtype" value="ale"
          onChange={() => this.setState({ drinkSubtype: 'ale' })}
          checked={drinkSubtype === 'ale'}
        /> Ale
      </label>
      <label>
        <input
          type="radio" name="subtype" value="lager"
          onChange={() => this.setState({ drinkSubtype: 'lager' })}
          checked={drinkSubtype === 'lager'}
        /> Lager
      </label>
    </fieldset>
  }

  renderFilters(drinkType, drinkSubtype) {
    return <form>
      <fieldset>
        <legend>Type</legend>
        <label>
          <input
            type="radio" name="type" value="all"
            onChange={() => this.setState({ drinkType: 'all' })}
            checked={drinkType === 'all'}
          /> All
        </label>
        <label>
          <input
            type="radio" name="type" value="soft"
            onChange={() => this.setState({ drinkType: 'soft' })}
            checked={drinkType === 'soft'}
          /> Soft Drink
        </label>
        <label>
          <input
            type="radio" name="type" value="hard"
            onChange={() => this.setState({ drinkType: 'hard' })}
            checked={drinkType === 'hard'}
          /> Hard Drink
        </label>
      </fieldset>

      {this.renderFilterSubtype(drinkType, drinkSubtype)}
    </form>
  }

  render() {
    const { drinkType, drinkSubtype } = this.state

    const validBeers = casesOfBeer.filter((caseOf) => {
      switch (drinkType) {
      case 'soft':
        return caseOf.softDrink

      case 'hard':
        if (caseOf.softDrink) {
          return false
        }
      }

      switch (drinkSubtype) {
      case 'any':
        return true

      default:
        if (!caseOf.subtype) {
          return false
        }

        return (caseOf.subtype.toLowerCase() === drinkSubtype)
      }
    })

    const beers = validBeers.map((caseOf) => {
      const total = caseOf.quantity * caseOf.case_count

      return <li key={caseOf.name}>
        {`${total}x ${caseOf.contents} of ${caseOf.name}`}
      </li>
    })

    return <section id="beer-list" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Beer List</h1>

          {this.renderFilters(drinkType, drinkSubtype)}

          <ul>{beers}</ul>
        </div>
      </div>
    </section>
  }
}

