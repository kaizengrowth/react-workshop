import React, { Component, PropTypes } from 'react'

// ==== Challenge ====
// 1. Hook up changing the total
// 2. Implement computing the tip
// 3. Round the tip output to two decimal places
//
// ----   Extra   ----
// 4. Make the filters work more like the total
// 5. Switch total onChange event to onKeyDown
// 6. Make initially selected tip based on the initial state object
// ===================

export default class TipCalculator extends Component {
  state = {
    total: 0,
    tipPercent: 10,
  }

  handleTotalChange(event) {
    // TODO: handle total changed
    console.log('total changed to', event.target.value)
  }

  render() {
    const { tipPercent, total } = this.state
    const percentage = (tipPercent / 100)

    console.log('tipPercent', tipPercent)
    console.log('total', total)
    console.log('percentage', percentage)

    // TODO: Implement this...
    const tipAmount = 0

    return <section id="tip-calculator" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Tip Calculator</h1>
          <form>
            <label for="total">Total ($)</label>
            <input  id="total"
              type="number"
              onChange={this.handleTotalChange}
              defaultValue="0"
            />

            <fieldset>
              <legend>Tip Amount</legend>
              <label>
                <input
                  type="radio" name="tipAmount" value="10%"
                  onChange={() => this.setState({ tipPercent: 10 })}
                  checked
                /> 10%
              </label>
              <label>
                <input
                  type="radio" name="tipAmount" value="15%"
                  onChange={() => this.setState({ tipPercent: 15 })}
                /> 15%
              </label>
              <label>
                <input
                  type="radio" name="tipAmount" value="20%"
                  onChange={() => this.setState({ tipPercent: 20 })}
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

