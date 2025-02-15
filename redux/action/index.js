export const GET_SINGLE_COCKTAIL = 'GET_SINGLE_COCKTAIL'
export const GET_SEARCH_BY_NAME = 'GET_SEARCH_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_DRINK_BY_CATEGORY = 'GET_DRINK_BY_CATEGORY'

export const getSingleCocktail = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, //full cocktail details by id
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      // console.log(data)
      if (!data.drinks || data.drinks.length === 0) {
        throw new Error('')
      }
      dispatch({
        type: GET_SINGLE_COCKTAIL,
        payload: data.drinks[0],
      })
      console.log('Load correctly', data.drinks[0].idDrink)
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

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      )
      if (res.ok) {
        const data = await res.json()

        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        })
      } else {
        throw new Error('Get categories is failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const getDrinksByCategory = (category) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_DRINK_BY_CATEGORY,
          payload: {
            category,
            drinks: data.drinks,
            count: data.drinks.length,
          },
        })
      } else {
        throw new Error('Get drinks by category is failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}
