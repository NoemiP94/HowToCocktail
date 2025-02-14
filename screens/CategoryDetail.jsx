import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getDrinksByCategory } from '../redux/action'
import { useEffect } from 'react'
import SearchResults from '../components/SearchResults'

const CategoryDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { category } = route.params

  const transformCategoryName = (name) => {
    return name.replace(/ /g, '_')
  }

  const categoryName = transformCategoryName(category)
  //console.log(categoryName)

  useEffect(() => {
    dispatch(getDrinksByCategory(categoryName))
  }, [dispatch, categoryName])
  const drinkList = useSelector(
    (state) => state.cocktail.drinksByCategory[categoryName]
  )
  //   console.log(drinkList)

  return (
    <View>
      <View>
        <Text>{category}</Text>
      </View>
      <ScrollView horizontal>
        <View>
          {drinkList.drinks &&
            drinkList.drinks.length > 0 &&
            drinkList.drinks.map((drink, i) => {
              console.log(drink.idDrink)
              return (
                <View key={drink.idDrink || i}>
                  <SearchResults drink={drink.idDrink} />
                </View>
              )
            })}
        </View>
      </ScrollView>
    </View>
  )
}

export default CategoryDetail
