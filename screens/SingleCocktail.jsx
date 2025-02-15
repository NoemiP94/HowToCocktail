import { View, Text, Image } from 'react-native'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail } from '../redux/action'

const SingleCocktail = ({ route }) => {
  const dispatch = useDispatch()
  const { drinkId } = route.params

  useEffect(() => {
    dispatch(getSingleCocktail(drinkId))
  }, [dispatch, drinkId])

  const drinkDetail = useSelector(
    (state) => state.cocktail.singleCocktail[drinkId]
  )

  return (
    <View>
      {drinkDetail && (
        <View>
          <Text>Name: {drinkDetail.strDrink}</Text>
          <Text>Category: {drinkDetail.strCategory}</Text>
          <Text>IBA: {drinkDetail.strIBA}</Text>
          <Text>Alcoholic: {drinkDetail.strAlcoholic}</Text>
          <Text>Glass: {drinkDetail.strGlass}</Text>
          <Text>Instructions: {drinkDetail.strInstructions}</Text>
          <View>
            <Text>Ingredients:</Text>
            <Text>
              {drinkDetail.strIngredient1} | {drinkDetail.strMeasure1}
            </Text>
            <Text>
              {drinkDetail.strIngredient2} |{drinkDetail.strMeasure2}
            </Text>
            <Text>
              {drinkDetail.strIngredient3} |{drinkDetail.strMeasure3}
            </Text>
            <Text>{drinkDetail.strIngredient4}</Text>
          </View>
          <Image
            source={{ uri: drinkDetail.strDrinkThumb }}
            style={{ width: 100, height: 100 }}
            alt={drinkDetail.strImageAttribution}
          />
        </View>
      )}
    </View>
  )
}

export default SingleCocktail
