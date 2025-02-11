import { View, Text } from 'react-native'
import { Searchbar, Appbar } from 'react-native-paper'
import { useEffect, useState } from 'react'

import SingleCocktail from '../components/SingleCocktail'
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
  }, [dispatch, query])

  return (
    <View>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title="How to Cocktail" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setQuery(text)}
        value={query}
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

export default Home
