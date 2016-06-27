import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ShinySpacePirates, CharacterSheet } from './containers'
import { Welcome } from './views'

export default (
  <Route path="/" component={ShinySpacePirates}>
    <IndexRoute component={Welcome} />
    <Route path="character-sheet" component={CharacterSheet} />
  </Route>
)
