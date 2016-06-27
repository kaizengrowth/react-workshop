/*eslint no-unused-vars: [2, {"vars": "all", "varsIgnorePattern": "styles"}]*/
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './routes'
import styles from './assets/stylesheets/app.scss'

class App extends Component {
  render() {
    return <Provider store={store}>
      <Router history={hashHistory}>{Routes}</Router>
    </Provider>
  }
}

render(<App/>, document.getElementById('app'))

