import { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { getSingleCocktail } from '../redux/action'

const SearchResults = ({ drink }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  // console.log(drink)
  const [result, setResults] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (drink) {
      const fetchData = async () => {
        try {
          setLoading(true)
          const response = await dispatch(getSingleCocktail(drink))
          setResults(response)
        } catch (err) {
          console.error('Load error', err)
          setError(err)
        } finally {
          setLoading(false)
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
    return console.log('Error', error)
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size="100" color="#FB7D8A" style={styles.loader} />
      ) : result ? (
        <View>
          <TouchableOpacity
            key={result.idDrink}
            style={styles.container}
            onPress={() => {
              navigation.navigate('DrinkDetail', { drinkId: result.idDrink })
              console.log('cliccato')
            }}
          >
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
          </TouchableOpacity>
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
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'absolute',
    bottom: -40,
    right: 85,
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
  loader: { marginTop: 20 },
})

export default SearchResults
