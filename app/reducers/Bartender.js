import { BEER_DRUNK } from '../actions/Bartender'

export default function (state = {}, action) {
  switch (action.type) {
  case BEER_DRUNK:
    const { caseOf } = action

    return {
      ...state,
      [caseOf.name]: {
        totalDrunk: 0
      }
    }

  default:
    return state
  }
}
