import { StyleSheet, Text, View, Image } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import store from './redux/store/index.js'

import Home from './screens/Home.jsx'
import CategoryDetail from './screens/CategoryDetail.jsx'
const CustomTitle = () => {
  return <Text style={styles.headerTitle}>How to Cocktail</Text>
}
export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FEF9E4',
              },
              headerTitleStyle: {
                fontFamily: 'MeowScript-Regular',
                color: '#F66372',
                fontSize: 40,
              },
              headerTintColor: '#F66372',
              headerTitle: () => <CustomTitle />,
            }}
          >
            <Stack.Screen name="How to Cocktail" component={Home} />
            <Stack.Screen name="CategoryResults" component={CategoryDetail} />
          </Stack.Navigator>
          <Image
            source={require('./assets/mint.png')}
            style={styles.mintImage}
            alt="glass"
          />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9E4',
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontFamily: 'MeowScript-Regular',
    color: '#F66372',
    fontSize: 40,
    // textAlign: 'center',
  },
  mintImage: {
    width: '150',
    height: '140',
    position: 'absolute',
    right: 0,
    top: -10,
  },
})
