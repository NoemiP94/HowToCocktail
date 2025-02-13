import {
  GET_CATEGORIES,
  GET_SEARCH_BY_NAME,
  GET_SINGLE_COCKTAIL,
} from '../action/index'

const initialState = {
  singleCocktail: null,
  content: [],
  categories: [],
}

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_COCKTAIL:
      return {
        ...state,
        singleCocktail: action.payload,
      }
    case GET_SEARCH_BY_NAME:
      return {
        ...state,
        content: action.payload.drinks || [],
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.drinks || [],
      }
    default:
      return state
  }
}

export default cocktailReducer
