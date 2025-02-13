import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { useEffect } from 'react'
import { getCategories } from '../redux/action'

const CategoryList = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.cocktail.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const getCategoryImage = (category) => {
    switch (category) {
      case 'Cocktail':
        return require('../assets/mint2.png')
      case 'Ordinary Drink':
        return require('../assets/lemon.png')
      case 'Punch / Party Drink':
        return require('../assets/cherry.png')
      case 'Shake':
        return require('../assets/olive.png')
      case 'Other / Unknown':
        return require('../assets/blue.png')
      case 'Cocoa':
        return require('../assets/cola.png')
      case 'Shot':
        return require('../assets/orange.png')
      case 'Coffee / Tea':
        return require('../assets/light.png')
      case 'Homemade Liqueur':
        return require('../assets/mint2.png')
      case 'Beer':
        return require('../assets/cola.png')
      case 'Soft Drink':
        return require('../assets/strawberry.png')
      default:
        return require('../assets/mint2.png')
    }
  }

  return (
    <>
      <ScrollView horizontal>
        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => (
            <View key={index}>
              <View style={styles.main}>
                <View style={styles.imageBox}>
                  <Image
                    source={getCategoryImage(item.strCategory)}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text
                    style={styles.mainText}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.strCategory}
                  </Text>
                </View>
                <View style={styles.numberBox}>
                  <Text style={styles.text}>N° mixes</Text>
                </View>
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
  image: {
    width: 40,
    height: 40,
  },
  imageBox: {
    height: 30,
  },
  textBox: {
    height: 45,
  },
  numberBox: {
    height: 20,
  },
})

export default CategoryList
