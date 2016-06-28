export const BEER_DRUNK = 'BEER_DRUNK'

export function drinkBeer(dispatch, caseOf) {
  dispatch({
    type: BEER_DRUNK,
    caseOf
  })
}
