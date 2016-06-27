import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Game } from './containers'
import { Welcome } from './views'

export default (
  <Route path='/' component={Game}>
    <IndexRoute component={Welcome} />
  </Route>
)
