import { View, Text, Image } from 'react-native'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail } from '../redux/action'

const SingleCocktail = () => {
  const dispatch = useDispatch()
  const singleCocktailData = useSelector(
    (state) => state.cocktail.singleCocktail
  )

  useEffect(() => {
    dispatch(getSingleCocktail())
  }, [dispatch])
  return (
    <View>
      {singleCocktailData && singleCocktailData.drinks && (
        <View>
          <Text>Name: {singleCocktailData.drinks[0].strDrink}</Text>
          <Text>Category: {singleCocktailData.drinks[0].strCategory}</Text>
          <Text>IBA: {singleCocktailData.drinks[0].strIBA}</Text>
          <Text>Alcoholic: {singleCocktailData.drinks[0].strAlcoholic}</Text>
          <Text>Glass: {singleCocktailData.drinks[0].strGlass}</Text>
          <Text>
            Instructions: {singleCocktailData.drinks[0].strInstructions}
          </Text>
          <View>
            <Text>Ingredients:</Text>
            <Text>
              {singleCocktailData.drinks[0].strIngredient1} |{' '}
              {singleCocktailData.drinks[0].strMeasure1}
            </Text>
            <Text>
              {singleCocktailData.drinks[0].strIngredient2} |{' '}
              {singleCocktailData.drinks[0].strMeasure2}
            </Text>
            <Text>
              {singleCocktailData.drinks[0].strIngredient3} |{' '}
              {singleCocktailData.drinks[0].strMeasure3}
            </Text>
            <Text>{singleCocktailData.drinks[0].strIngredient4}</Text>
          </View>
          <Image
            source={{ uri: singleCocktailData.drinks[0].strDrinkThumb }}
            style={{ width: 100, height: 100 }}
            alt={singleCocktailData.drinks[0].strImageAttribution}
          />
        </View>
      )}
    </View>
  )
}

export default SingleCocktail
