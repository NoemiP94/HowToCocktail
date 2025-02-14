import {
  GET_CATEGORIES,
  GET_DRINK_BY_CATEGORY,
  GET_SEARCH_BY_NAME,
  GET_SINGLE_COCKTAIL,
} from '../action/index'

const initialState = {
  singleCocktail: [],
  content: [],
  categories: [],
  drinksByCategory: [],
}

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_COCKTAIL:
      return {
        ...state,
        singleCocktail: {
          ...state.singleCocktail,
          [action.payload.idDrink]: action.payload,
        },
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
    case GET_DRINK_BY_CATEGORY:
      return {
        ...state,
        drinksByCategory: {
          ...state.drinksByCategory,
          [action.payload.category]: {
            drinks: action.payload.drinks,
            count: action.payload.count,
          },
        },
      }
    default:
      return state
  }
}

export default cocktailReducer
