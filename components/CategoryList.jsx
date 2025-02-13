import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useEffect } from 'react'
import { getCategories } from '../redux/action'

const CategoryList = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.cocktail.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <ScrollView horizontal>
        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => (
            <View key={index}>
              <View style={styles.main}>
                <Text style={styles.mainText}>{item.strCategory}</Text>
                <Text style={styles.text}>N° mixes</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 100,
    height: 150,
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 12, height: 13 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
  },
  mainText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Raleway-Regular',
    color: '#FB7D8A',
    fontSize: 15,
  },
})

export default CategoryList
