import { SET_BEER, BEER_DRUNK } from '../actions/Bartender'

export default function (state = {}, action) {
  switch (action.type) {
  case SET_BEER:
    const { casesOfBeer } = action

    let newState = {
      ...state
    }

    casesOfBeer.forEach((caseOf) => {
      newState[caseOf.name] = caseOf.quantity * caseOf.case_count
    })

    console.log(SET_BEER, newState)

    return newState

  case BEER_DRUNK:
    const { caseOf } = action

    console.log(BEER_DRUNK, caseOf)

    return {
      ...state,
      [caseOf.name]: 0
    }

  default:
    return state
  }
}
