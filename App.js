import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'

import Home from './screens/Home.jsx'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
