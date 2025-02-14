import { Text } from 'react-native'

const CategoryDetail = ({ route }) => {
  const { category } = route.params
  console.log(category)
  return <Text>Categoria: {category}</Text>
}

export default CategoryDetail
