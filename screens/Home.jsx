import { View, Text, StyleSheet } from 'react-native'
import { Searchbar, Appbar } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

// import SingleCocktail from '../components/SingleCocktail'
import CustomText from '../components/CustomText'

import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail, searchByName } from '../redux/action'

const Home = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const content = useSelector((state) => state.cocktail.content)

  useEffect(() => {
    if (query) {
      dispatch(searchByName(query))
    } else {
      dispatch(getSingleCocktail())
    }

    console.log('Font loaded:', fontLoaded)
    console.log('Font error:', fontError)
  }, [dispatch, query])

  //font
  const [fontLoaded, fontError] = useFonts({
    'MeowScript-Regular': require('../assets/fonts/MeowScript-Regular.ttf'),
  })

  if (!fontLoaded && !fontError) {
    return null
  }
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content
          title={
            <CustomText style={styles.appbarTitle}>How to Cocktail</CustomText>
          }
        />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setQuery(text)}
        value={query}
        style={styles.searchbar}
      />
      <View>
        {content && content.length > 0 ? (
          content.map((drink, index) => (
            <View key={drink.idDrink || index} style={{ margin: 10 }}>
              <Text>{drink.idDrink}</Text>
              <Text>{drink.strDrink}</Text>
            </View>
          ))
        ) : (
          <Text>No cocktails found</Text>
        )}
      </View>
      {/* <SingleCocktail /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#FEF9E4',
  },
  searchbar: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  appbarTitle: {
    fontFamily: 'MeowScript-Regular',
    color: '#F66372',
    fontSize: 40,
    textAlign: 'center',
  },
})

export default Home
