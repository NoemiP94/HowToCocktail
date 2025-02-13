import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const SearchResults = ({ drink }) => {
  const [result, setResults] = useState('')
  useEffect(() => {
    setResults(drink)
    // console.log('result', result)
  }, [drink])

  return (
    <>
      {result ? (
        <View key={result.idDrink}>
          <Text>{result.idDrink}</Text>
          <Text>{result.strDrink}</Text>
        </View>
      ) : null}
    </>
  )
}

export default SearchResults
