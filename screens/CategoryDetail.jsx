import { ScrollView, Text, View, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getDrinksByCategory } from '../redux/action'
import { useEffect, useState } from 'react'
import SearchResults from '../components/SearchResults'

const CategoryDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { category } = route.params

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(15)
  const [batchSize, setBatchSize] = useState(5)

  const transformCategoryName = (name) => {
    return name.replace(/ /g, '_')
  }

  const categoryName = transformCategoryName(category)

  useEffect(() => {
    dispatch(getDrinksByCategory(categoryName, page, perPage))
  }, [dispatch, categoryName, page, perPage])

  const drinkList = useSelector(
    (state) => state.cocktail.drinksByCategory[categoryName]
  )

  const loadMoreDrinks = () => {
    setPage(page + 1)
  }

  const splitArrayIntoChunks = (array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const drinkChunks =
    drinkList && drinkList.drinks
      ? splitArrayIntoChunks(drinkList.drinks, batchSize)
      : []

  return (
    <View>
      <View>
        <Text>{category}</Text>
      </View>
      <ScrollView>
        {drinkChunks.slice(0, page).map((chunk, index) => (
          <ScrollView key={index} horizontal>
            <View style={styles.resultContainer}>
              {chunk.map((drink, i) => {
                console.log(drink.idDrink)
                return drink.idDrink ? (
                  <View key={drink.idDrink || i} style={styles.drinkContainer}>
                    <SearchResults drink={drink.idDrink} />
                  </View>
                ) : null
              })}
            </View>
          </ScrollView>
        ))}

        {drinkList && drinkList.drinks && drinkList.drinks.length > page && (
          <View>
            <Button title="Load More" onPress={loadMoreDrinks} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 5,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  drinkContainer: {
    marginRight: 30,
  },
})

export default CategoryDetail
