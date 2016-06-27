import React, { Component, PropTypes } from 'react'

export default class Meme extends Component {
  static propTypes = {
    topLine: PropTypes.string.isRequired,
    bottomLine: PropTypes.string.isRequired,
  }

  render() {
    const { topLine, bottomLine } = this.props

    return <section id="meme">
      <div className="-wrapper">
        <blockquote id="top-line">{topLine}</blockquote>
        <img src="/images/fry.png" />
        <blockquote id="bottom-line">{bottomLine}</blockquote>
      </div>
    </section>
  }
}

