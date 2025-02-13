import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SearchResults = ({ drink }) => {
  const [result, setResults] = useState('')
  useEffect(() => {
    setResults(drink)
    // console.log('result', result)
  }, [drink])

  return (
    <>
      {result ? (
        <View key={result.idDrink} style={styles.container}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {result.strDrink}
          </Text>
          <Text style={styles.text}>{result.strCategory}</Text>
          <Text style={styles.text}>{result.strAlcoholic}</Text>
          <Image source={{ uri: result.strDrinkThumb }} style={styles.image} />
        </View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FB7D8A',
    padding: 10,
    borderRadius: 20,
    width: 150,
    height: 100,
    display: 'flex',
  },
  title: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    zIndex: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway-Regular',
    fontSize: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    right: -10,
    bottom: -5,
  },
})

export default SearchResults
