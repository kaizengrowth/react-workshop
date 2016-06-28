export const SET_BEER = 'SET_BEER'
export const BEER_DRUNK = 'BEER_DRUNK'

export function setBeer(dispatch, casesOfBeer) {
  console.log(SET_BEER, casesOfBeer)

  dispatch({
    type: SET_BEER,
    casesOfBeer
  })
}

export function drinkBeer(dispatch, caseOf) {
  console.log(BEER_DRUNK, caseOf)

  dispatch({
    type: BEER_DRUNK,
    caseOf
  })
}
