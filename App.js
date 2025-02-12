import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
// import { useFonts } from 'expo-font'

import Home from './screens/Home.jsx'

export default function App() {
  // //font
  // const [fontLoaded, fontError] = useFonts({
  //   'MeowScript-Regular': require('./assets/fonts/MeowScript-Regular.ttf'),
  // })
  // if (!fontLoaded && !fontError) {
  //   return null
  // }

  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Home />
        </View>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9E4',
    width: '100%',
    height: '100%',
    // fontFamily: 'MeowScript-Regular',
    // fontSize: 40,
  },
})
