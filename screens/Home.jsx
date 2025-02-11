import { View } from 'react-native'
import { Searchbar, Appbar } from 'react-native-paper'
import { useState } from 'react'

import SingleCocktail from '../components/SingleCocktail'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

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
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <SingleCocktail />
    </View>
  )
}

export default Home
