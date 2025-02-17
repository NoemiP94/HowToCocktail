import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCocktail } from '../redux/action'

const SingleCocktail = ({ route }) => {
  const dispatch = useDispatch()
  const { drinkId } = route.params
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(getSingleCocktail(drinkId)).finally(() => {
      setLoading(false)
    })
  }, [dispatch, drinkId])

  const drinkDetail = useSelector(
    (state) => state.cocktail.singleCocktail[drinkId]
  )

  const getIngredientImage = (ingredient) => {
    switch (ingredient) {
      // juice
      case 'Apple juice':
        return require('../assets/lemon_juice.png')
      case 'Pineapple juice':
        return require('../assets/lemon_juice.png')
      case 'Lemon juice':
        return require('../assets/lemon_juice.png')
      case 'Tomato juice':
        return require('../assets/lemon_juice.png')
      case 'Cranberry juice':
        return require('../assets/lemon_juice.png')
      case 'Grape juice':
        return require('../assets/lemon_juice.png')
      case 'Grapefruit juice':
        return require('../assets/lemon_juice.png')
      case 'Lime juice':
        return require('../assets/lemon_juice.png')
      //sugar
      case 'Sugar':
        return require('../assets/sugar.png')
      case 'Salt':
        return require('../assets/sugar.png')
      //fruit
      case 'Strawberries':
        return require('../assets/fruit.png')
      case 'Mango':
        return require('../assets/fruit.png')
      case 'Ginger':
        return require('../assets/fruit.png')
      case 'Lime':
        return require('../assets/fruit.png')
      case 'Cantaloupe':
        return require('../assets/fruit.png')
      case 'Berries':
        return require('../assets/fruit.png')
      case 'Grapes':
        return require('../assets/fruit.png')
      case 'Kiwi':
        return require('../assets/fruit.png')
      case 'Orange':
        return require('../assets/fruit.png')
      case 'Cranberries':
        return require('../assets/fruit.png')
      case 'Lemon':
        return require('../assets/lemon_piece.png')
      //soda
      case 'Tea':
        return require('../assets/soda.png')
      case 'Carbonated water':
        return require('../assets/soda.png')
      case 'Sugar syrup':
        return require('../assets/soda.png')
      case 'Milk':
        return require('../assets/soda.png')
      case 'Chocolate syrup':
        return require('../assets/soda.png')
      case 'Yoghurt':
        return require('../assets/soda.png')
      case 'Water':
        return require('../assets/soda.png')
      case 'Ice':
        return require('../assets/ice.png')
      default:
        return require('../assets/drink.png')
    }
  }

  return (
    <ScrollView>
      <View style={styles.mainBg}>
        <Image
          source={require('../assets/Vector 23.png')}
          style={styles.bg}
          alt="bg"
        />
        {loading ? (
          <ActivityIndicator size="100" color="#FB7D8A" style={styles.loader} />
        ) : (
          drinkDetail && (
            <View style={styles.main}>
              <View>
                <Text style={styles.title}>{drinkDetail.strDrink}</Text>
              </View>
              <View style={styles.box}>
                <View>
                  <Text style={[styles.subTitle, styles.text1]}>Category</Text>
                  <Text style={[styles.detail, styles.text1]}>
                    {drinkDetail.strCategory}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.subTitle, styles.text2]}>Alcoholic</Text>
                  <Text style={[styles.detail, styles.text2]}>
                    {drinkDetail.strAlcoholic}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.subTitle, styles.text3]}>Glass</Text>
                  <Text style={[styles.detail, styles.text3]}>
                    {drinkDetail.strGlass}
                  </Text>
                </View>
                <Image
                  source={{ uri: drinkDetail.strDrinkThumb }}
                  style={styles.image}
                  alt={drinkDetail.strImageAttribution}
                />
              </View>
              <View style={styles.box}>
                <View>
                  <Text style={styles.ingredientTitle}>Ingredients &gt;</Text>
                </View>
                <View style={styles.ingredientBox}>
                  {drinkDetail.strIngredient1 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient1)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient1}
                      </Text>
                      {drinkDetail.strMeasure1 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure1}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient2 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient2)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient2}
                      </Text>
                      {drinkDetail.strMeasure2 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure2}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient3 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient3)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient3}
                      </Text>
                      {drinkDetail.strMeasure3 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure3}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient4 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient4)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient4}
                      </Text>
                      {drinkDetail.strMeasure4 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure4}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient5 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient5)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient5}
                      </Text>
                      {drinkDetail.strMeasure5 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure5}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient6 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient6)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient6}
                      </Text>
                      {drinkDetail.strMeasure6 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure6}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient7 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient7)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient7}
                      </Text>
                      {drinkDetail.strMeasure7 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure7}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient8 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient8)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient8}
                      </Text>
                      {drinkDetail.strMeasure8 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure8}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient9 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient9)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient9}
                      </Text>
                      {drinkDetail.strMeasure9 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure9}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient10 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient10)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient10}
                      </Text>
                      {drinkDetail.strMeasure10 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure10}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient11 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient11)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient11}
                      </Text>
                      {drinkDetail.strMeasure11 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure11}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient12 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient12)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient12}
                      </Text>
                      {drinkDetail.strMeasure12 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure12}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient13 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient13)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient13}
                      </Text>
                      {drinkDetail.strMeasure13 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure13}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient14 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient14)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient14}
                      </Text>
                      {drinkDetail.strMeasure14 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure14}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                  {drinkDetail.strIngredient15 ? (
                    <View style={styles.singleIngredient}>
                      <Image
                        source={getIngredientImage(drinkDetail.strIngredient15)}
                        style={styles.ingrImage}
                      />
                      <Text style={styles.ingrName}>
                        {drinkDetail.strIngredient15}
                      </Text>
                      {drinkDetail.strMeasure15 ? (
                        <Text style={styles.ingrMeasure}>
                          {drinkDetail.strMeasure15}
                        </Text>
                      ) : null}
                    </View>
                  ) : null}
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.instructionsTitle}>Instructions &gt;</Text>
                <Text style={styles.instructionsText}>
                  {drinkDetail.strInstructions}
                </Text>
              </View>
            </View>
          )
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: 'white',
  },
  bg: {
    position: 'absolute',
    zIndex: 10,
    right: -70,
    top: -120,
  },
  main: {
    zIndex: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
    paddingTop: 10,
    color: '#1E2742',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
  detail: {
    fontSize: 32,
    fontFamily: 'Raleway-Bold',
    marginBottom: 20,
  },
  box: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  text1: {
    color: '#1E2742',
  },
  text2: {
    color: '#82B70B',
  },
  text3: {
    color: '#F1A411',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 50,
    right: -55,
    top: 35,
  },
  ingredientTitle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 24,
    color: '#FB7D8A',
    marginTop: 100,
  },
  ingredientBox: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  singleIngredient: {
    backgroundColor: '#FEF9E4',
    width: 130,
    height: 130,
    borderRadius: 100,
    borderColor: '#FBE897',
    borderWidth: 1,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingrName: {
    fontFamily: 'Raleway-Regular',
    color: '#1E2742',
    fontSize: 16,
  },
  ingrMeasure: {
    fontFamily: 'Raleway-Bold',
    color: '#FB7D8A',
    fontSize: 18,
  },
  ingrImage: {
    width: 40,
    height: 40,
    margin: 2,
  },
  instructionsTitle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 24,
    color: '#FB7D8A',
    marginVertical: 20,
  },
  instructionsText: {
    fontFamily: 'Raleway-Regular',
    marginBottom: 40,
  },
  loader: { marginTop: 20 },
})

export default SingleCocktail
