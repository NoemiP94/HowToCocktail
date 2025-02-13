export const GET_SINGLE_COCKTAIL = 'GET_SINGLE_COCKTAIL'
export const GET_SEARCH_BY_NAME = 'GET_SEARCH_BY_NAME'

export const getSingleCocktail = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`, //full cocktail details by id
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        // console.log(data)
        dispatch({
          type: GET_SINGLE_COCKTAIL,
          payload: data,
        })
        console.log('Load correctly')
      } else {
        throw new Error('Load is failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const searchByName = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      )
      if (res.ok) {
        const data = await res.json()
        // console.log(data)
        dispatch({
          type: GET_SEARCH_BY_NAME,
          payload: data,
        })
      } else {
        throw new Error('Search is failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}
