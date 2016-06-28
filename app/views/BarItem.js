import React, { Component, PropTypes } from 'react'

export default class BarItem extends Component {
  static propTypes = {
    onDrink: PropTypes.func,
    totalRemaining: PropTypes.number.isRequired,
    caseOf: PropTypes.shape({
      name: PropTypes.string.isRequired,
      case_count: PropTypes.number.isRequired,
      contents: PropTypes.oneOf([
        'bottles',
        'cans'
      ]),
      quantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      softDrink: PropTypes.bool.isRequired,
      subtype: PropTypes.string,
    }).isRequired,
  }

  handleClick = () => {
    const { onDrink } = this.props

    if (!onDrink) {
      return
    }

    onDrink()
  }

  render() {
    const { caseOf, totalRemaining } = this.props

    if (!caseOf) {
      return <li>ERROR: Not properly implemented</li>
    }

    return <li key={caseOf.name}>
      {totalRemaining}x <strong>{caseOf.name}</strong>

      <button
        onClick={this.handleClick}
      >Drink</button>
    </li>
  }
}

