import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getDrinksByCategory } from '../redux/action'
import { useEffect, useState } from 'react'
import SearchResults from '../components/SearchResults'
import CategoryList from '../components/CategoryList'

const CategoryDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { category } = route.params
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(15)
  const [batchSize, setBatchSize] = useState(5)

  const transformCategoryName = (name) => {
    return name.replace(/ /g, '_')
  }

  const categoryName = transformCategoryName(category)

  useEffect(() => {
    setLoading(true)
    dispatch(getDrinksByCategory(categoryName, page, perPage)).finally(() => {
      setLoading(false)
    })
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
    <View style={styles.main}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{category}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="100" color="#FB7D8A" style={styles.loader} />
      ) : (
        <ScrollView>
          {drinkChunks.slice(0, page).map((chunk, index) => (
            <ScrollView key={index} horizontal>
              <View style={styles.resultContainer}>
                {chunk.map((drink, i) => {
                  console.log(drink.idDrink)
                  return drink.idDrink ? (
                    <View
                      key={drink.idDrink || i}
                      style={styles.drinkContainer}
                    >
                      <SearchResults drink={drink.idDrink} />
                    </View>
                  ) : null
                })}
              </View>
            </ScrollView>
          ))}

          {drinkList && drinkList.drinks && drinkList.drinks.length > page && (
            <View style={styles.buttonBox}>
              <TouchableOpacity onPress={loadMoreDrinks} style={styles.button}>
                <Text style={styles.buttonText}>Load more...</Text>
              </TouchableOpacity>
            </View>
          )}
          <ScrollView horizontal>
            <View>
              <CategoryList />
            </View>
          </ScrollView>
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FEF9E4',
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Raleway-Italic-VariableFont_wght',
    fontSize: 30,
    paddingTop: 10,
  },
  titleBox: {
    paddingBottom: 10,
    borderBottomColor: '#FB7D8A',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
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
  buttonBox: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FEF9E4',
    padding: 5,
  },
  buttonText: {
    fontFamily: 'Raleway-Regular',
    color: '#FB7D8A',
    fontSize: 16,
    textAlign: 'center',
  },
  loader: { marginTop: 20 },
})

export default CategoryDetail
