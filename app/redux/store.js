import { createStore } from 'redux'
import reducer from './combined-reducers'

export default(
  createStore(reducer)
)
