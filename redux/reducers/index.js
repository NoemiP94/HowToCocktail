import { GET_SINGLE_COCKTAIL } from '../action/index'

const initialState = {
  singleCocktail: null,
}

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_COCKTAIL:
      return {
        ...state,
        singleCocktail: action.payload,
      }
    default:
      return state
  }
}

export default cocktailReducer
