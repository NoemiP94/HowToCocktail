import { View, Text } from 'react-native'

const SearchResults = (drink) => {
  return (
    <View>
      <Text>{drink.idDrink}</Text>
      <Text>{drink.strDrink}</Text>
    </View>
  )
}

export default SearchResults
