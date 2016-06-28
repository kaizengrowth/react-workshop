import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Workshop, HelloWorld, MemeGenerator, TipCalculator, BeerList, Bartender } from './containers'
import { Welcome } from './views'

export default (
  <Route path="/" component={Workshop}>
    <IndexRoute component={Welcome} />
    <Route path="hello-world" component={HelloWorld} />
    <Route path="meme-generator" component={MemeGenerator} />
    <Route path="beer-list" component={BeerList} />
    <Route path="tip-calculator" component={TipCalculator} />
    <Route path="bartender" component={Bartender} />
  </Route>
)
