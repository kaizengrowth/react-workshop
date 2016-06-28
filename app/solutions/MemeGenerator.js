import React, { Component } from 'react'
import { Meme } from '../views'

const quotes = [
  { topLine: 'Not sure if password wrong',
    bottomLine: 'Or username wrong' },
  { topLine: 'Not sure if highbeams',
    bottomLine: 'Or just headlights' },
  { topLine: 'Not sure if real life',
    bottomLine: 'Or if just fantasy' },
  { topLine: 'Not sure if serious',
    bottomLine: 'Or sarcasm' },
  { topLine: 'Not sure if bored',
    bottomLine: 'Or out of meme ideas' },
]

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export default class MemeGenerator extends Component {
  state = {
    selectedQuote: 0,
  }

  componentWillMount() {
    this.setRandomQuote()
  }

  setRandomQuote() {
    const selectedQuote = randomNumberBetween(0, quotes.length)
    this.setState({ selectedQuote })
  }

  render() {
    const { selectedQuote } = this.state
    const { topLine, bottomLine } = quotes[selectedQuote]

    return <section id="meme-generator" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Meme Generator</h1>

          <button
            className="button"
            onClick={() => this.setRandomQuote()}
          >Refresh</button>

          <Meme
            topLine={topLine}
            bottomLine={bottomLine}
          />
        </div>
      </div>
    </section>
  }
}

