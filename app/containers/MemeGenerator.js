import React, { Component } from 'react'
import { Meme } from '../views'

// ==== Challenge ====
// 1. Hookup meme display to use quotes array
// 2. Make the initial meme text displayed on page load randomly selected
// 3. Hook up a "Refresh" button to render a new random component
// ===================

const quotes = [
  { topLine: 'Not sure if song skipping',
    bottomLine: 'Or remix' },
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

export default class MemeGenerator extends Component {
  state = {
    selectedQuote: 0,
  }

  render() {
    return <section id="meme-generator" className="content-area">
      <div className="g-row">
        <div className="g-column small-12">
          <h1>Meme Generator</h1>

          <button
            className="button"
          >Refresh</button>

          <Meme
            topLine="Not sure if song is skipping"
            bottomLine="or remix"
          />
        </div>
      </div>
    </section>
  }
}

