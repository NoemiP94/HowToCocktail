import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'

import Home from './screens/Home.jsx'

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
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
