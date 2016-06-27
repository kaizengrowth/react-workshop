import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Masthead } from '../views'

export class Game extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return <section id="game">
      <Masthead />
      {this.props.children}
    </section>
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Game)
