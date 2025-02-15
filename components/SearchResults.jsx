import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail } from '../redux/action'

const SearchResults = ({ drink }) => {
  const dispatch = useDispatch()
  // console.log(drink)
  const [result, setResults] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (drink) {
      const fetchData = async () => {
        try {
          const response = await dispatch(getSingleCocktail(drink))
          setResults(response)
        } catch (err) {
          console.error('Load error', err)
          setError(err)
        }
      }
      fetchData()
    }
  }, [dispatch, drink])

  const drinkDetail = useSelector(
    (state) => state.cocktail.singleCocktail[drink]
  )

  useEffect(() => {
    if (drinkDetail && result !== drinkDetail) {
      setResults(drinkDetail)
    }
  }, [drinkDetail, result])

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <>
      {result ? (
        <View>
          <View key={result.idDrink} style={styles.container}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {result.strDrink}
            </Text>
            <View style={styles.textBox}>
              <Entypo
                name="drink"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.text}>{result.strCategory}</Text>
            </View>
            <View style={styles.textBox}>
              <MaterialIcons
                name="local-drink"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.text}>{result.strAlcoholic}</Text>
            </View>

            <Image
              source={{ uri: result.strDrinkThumb }}
              style={styles.image}
            />
          </View>
        </View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FB7D8A',
    padding: 15,
    borderRadius: 20,
    width: 300,
    height: 400,
    display: 'flex',
    marginTop: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 12, height: 13 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
  },
  title: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
    fontSize: 70,
    zIndex: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway-Regular',
    fontSize: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    position: 'absolute',
    bottom: -40,
    right: 70,
  },
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: 10,
    marginRight: 10,
  },
})

export default SearchResults
