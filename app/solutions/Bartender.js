import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { casesOfBeer } from '../helpers'
import { BarItem } from '../views'
import { setBeer, drinkBeer } from '../actions'

export class Bartender extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    bartender: PropTypes.object.isRequired,
  }

  componentWillMount() {
    setBeer(this.props.dispatch, casesOfBeer)
  }

  render() {
    const { bartender } = this.props

    const beers = casesOfBeer.map((caseOf, index) => {
      const totalRemaining =  bartender[caseOf.name]

      return <BarItem
        caseOf={caseOf}
        totalRemaining={totalRemaining}
        onDrink={() => drinkBeer(this.props.dispatch, caseOf)}
      />
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

function mapStateToProps(state) {
  return {
    bartender: state.bartender,
  }
}

export default connect(mapStateToProps)(Bartender)
