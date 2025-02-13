import { View, Text, StyleSheet, Image } from 'react-native'
import { Searchbar, Appbar } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

// import SingleCocktail from '../components/SingleCocktail'
import CustomText from '../components/CustomText'
import Welcome from '../components/Welcome'

import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail, searchByName } from '../redux/action'
import SearchResults from '../components/SearchResults'

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
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content
          title={
            <CustomText style={styles.appbarTitle}>How to Cocktail</CustomText>
          }
        />
        <Image
          source={require('../assets/mint.png')}
          style={styles.mintImage}
          alt="glass"
        />
      </Appbar.Header>
      <Text style={styles.searchbarTopText}>I want to learn...</Text>
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
              <SearchResults drink={drink} />
              {/* <Text>{drink.idDrink}</Text>
              <Text>{drink.strDrink}</Text> */}
            </View>
          ))
        ) : (
          <Welcome />
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
    zIndex: 10,
  },
  mintImage: {
    width: '150',
    height: '140',
    position: 'absolute',
    right: 0,
    top: -34,
    zIndex: 5,
  },
  searchbarTopText: {
    fontSize: 25,
    color: '#1E2742',
    fontFamily: 'Raleway-Bold',
    marginLeft: 35,
    marginBottom: 10,
  },
})

export default Home
