import { Text, View, StyleSheet, Image } from 'react-native'
const Welcome = () => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text1}>It's time for a</Text>
        <Text style={styles.text2}>Drink</Text>
        <Text style={styles.text3}>
          The one-stop to find amazing drinks mixes for any occasion.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/splash.png')}
          style={styles.splashImage}
          alt="glass"
        />
        <Image
          source={require('../assets/glass.png')}
          style={styles.glassImage}
          alt="glass"
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 30,
  },
  text1: {
    fontSize: 30,
    color: '#1E2742',
    fontFamily: 'Raleway-Bold',
  },
  text2: {
    fontFamily: 'MeowScript-Regular',
    color: '#F66372',
    fontSize: 50,
  },
  text3: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
  glassImage: {
    height: 532,
    width: 302,
    position: 'absolute',
    left: 50,
    top: -50,
  },
  splashImage: {
    height: 532,
    width: 450,
    position: 'absolute',

    top: -50,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
})

export default Welcome
