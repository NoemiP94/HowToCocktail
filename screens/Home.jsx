import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

import Welcome from '../components/Welcome'

import { useDispatch, useSelector } from 'react-redux'
import { searchByName } from '../redux/action'
import SearchResults from '../components/SearchResults'

const Home = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const content = useSelector((state) => state.cocktail.content)

  useEffect(() => {
    if (query) {
      dispatch(searchByName(query))
    }
  }, [dispatch, query])

  //font
  const [fontLoaded, fontError] = useFonts({
    'MeowScript-Regular': require('../assets/fonts/MeowScript-Regular.ttf'),
    'Raleway-Italic-VariableFont_wght': require('../assets/fonts/Raleway-Italic-VariableFont_wght.ttf'),
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  })

  if (!fontLoaded && !fontError) {
    return null
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <View style={styles.main}>
      <Text style={styles.searchbarTopText}>I want to learn...</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setQuery(text)}
        value={query}
        style={styles.searchbar}
        onIconPress={handleClear}
      />
      <View>
        {query === '' ? (
          <Welcome />
        ) : (
          content &&
          content.length > 0 &&
          content.map((drink, index) => (
            <View key={drink.idDrink || index} style={styles.resultContainer}>
              <SearchResults drink={drink} />
            </View>
          ))
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FEF9E4',
  },
  searchbar: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  searchbarTopText: {
    fontSize: 25,
    color: '#1E2742',
    fontFamily: 'Raleway-Bold',
    marginLeft: 35,
    marginBottom: 10,
    marginTop: 10,
  },
  resultContainer: {
    margin: 10,
  },
})

export default Home
