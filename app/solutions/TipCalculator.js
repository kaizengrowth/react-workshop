import React, { Component, PropTypes } from 'react'

export default class TipCalculator extends Component {
  state = {
    total: 0,
    tipPercent: 10,
  }

  handleTotalChange(event) {
    const total = Number.parseInt(event.target.value.replace(',', ''))
    this.setState({ total })
  }

  render() {
    const { tipPercent, total } = this.state
    const percentage = (tipPercent / 100)

    const tipAmount = (total * percentage).toFixed(2)

    return <section id="tip-calculator" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Tip Calculator</h1>
          <form>
            <label for="total">Total ($)</label>
            <input  id="total"
              onChange={(event) => this.handleTotalChange(event)}
              defaultValue="0"
            />

            <fieldset>
              <legend>Tip Amount</legend>
              <label>
                <input
                  type="radio" name="tipAmount" value="10%"
                  onChange={() => this.setState({ tipPercent: 10 })}
                  checked={tipPercent === 10}
                /> 10%
              </label>
              <label>
                <input
                  type="radio" name="tipAmount" value="15%"
                  onChange={() => this.setState({ tipPercent: 15 })}
                  checked={tipPercent === 15}
                /> 15%
              </label>
              <label>
                <input
                  type="radio" name="tipAmount" value="20%"
                  onChange={() => this.setState({ tipPercent: 20 })}
                  checked={tipPercent === 20}
                /> 20%
              </label>
            </fieldset>

            <h5>You should tip: ${tipAmount}</h5>
          </form>
        </div>
      </div>
    </section>
  }
}

