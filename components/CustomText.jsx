import { Text } from 'react-native'
import { useFonts } from 'expo-font'

const CustomText = (props) => {
  const [fontsLoaded] = useFonts({
    'MeowScript-Regular': require('../assets/fonts/MeowScript-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Text style={{ fontFamily: 'MeowScript-Regular', ...props.style }}>
      {props.children}
    </Text>
  )
}

export default CustomText
