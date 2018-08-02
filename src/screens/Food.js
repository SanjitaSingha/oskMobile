import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, TouchableOpacity, Image, InteractionManager } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import styles from '../styles/Food';
import SingleFoodCard from '../components/SingleFoodCard';
import { addFoodToCart, getAllCartItems } from  '../actions';


const { width, height } = Dimensions.get('window');
const nonVeg = [
  {
    id: 0,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item'
  },
  {
    id: 1,
    title: 'Chicken Kera Special',
    image: 'https://cdnimg.webstaurantstore.com/images/products/large/77391/480506.jpg',
    description: 'The famous north Indian Chicken fodd Item'
  },
  {
    id: 2,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item'
  },
  {
    id: 3,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item'
  },
  {
    id: 4,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item'
  },
];
class Food extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('cart')}
        >
        <View
          style={{ marginRight: 15, flexDirection: 'row' }}>
          <Feather name="shopping-cart" size={25} color={EStyleSheet.value('$white')} />
          <Text style={{ marginLeft: -4,  fontWeight: 'bold', marginTop: -4 }}>{navigation.getParam('cartItemNo')}</Text>
        </View>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: EStyleSheet.value('$orangeTheme'),
      },
      headerTintColor: EStyleSheet.value('$white'),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

  };
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      cartItems: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    this.getAllCartItems();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps Food', this.props.cartItems, nextProps.cartItems);

    if(nextProps.cartItems !== this.props.cartItems) {
      this.setState({ cartItems: nextProps.cartItems });
      const cartItemNo = nextProps.cartItems.length;
      this.props.navigation.setParams({ cartItemNo: cartItemNo });
      console.log('Props not equal', cartItemNo, this.props.navigation.state.params.cartItemNo);

    }

  }

  getAllCartItems() {
    this.props.getAllCartItems();
    const cartItemNo = this.props.cartItems.length;
    this.props.navigation.setParams({ cartItemNo: cartItemNo });
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }

  addToCart(food) {
    this.props.addFoodToCart(food);
    // this.props.navigation.navigate('home');
  }

  render() {
    const { food } = this.props.navigation.state.params;
    console.log('Food list', food);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView onLayout={this._onLayoutDidChange}
          style={styles.container}
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => { this.getAllCartItems() }}
            colors={['#FDA400']}
            tintColor="white"
            title="loading..."
            titleColor="white"
            progressBackgroundColor="white"
          />}
        >
        <View>
          <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
          >
              <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
                <Image source={{ uri: 'http://www.philipsmall.co.uk/flash/food1.jpg'}} style={{ height: 248, backgroundColor: 'black' }}/>
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']}
                  style={styles.linearGradient}
                />
              </View>
              <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
              <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
            </Swiper>

            <View style={styles.cardContainer}>
  						<Image source={{ uri: food.image }} style={styles.cardImage} />
  						<View style={styles.cardDetails}>
  							<Text style={styles.cardTitle}>{food.title}</Text>
                <View style={styles.cardStar}>
                  <Ionicons name='md-radio-button-on' color={food.veg ? EStyleSheet.value('$green') : EStyleSheet.value('$red') } size={20} />
                  <Text style={[styles.foodType, { marginLeft: 5 }]}>{food.foodType}</Text>
                </View>
  							<View style={styles.cardGenre}>
										<Text style={styles.cardGenreItem}>
                      <FontAwesome name="rupee" size={20} color={EStyleSheet.value('$orangeTheme')} />
                      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{food.price}</Text>
                    </Text>
  							</View>
  							<View style={styles.cardNumbers}>

                  <Text style={styles.cardGenreItem}>15 times ordered</Text>


  								<Text style={styles.cardRunningHours} />
  							</View>
                <TouchableOpacity style={styles.buyButton} onPress={() => this.addToCart(food)}>
                  <Text style={{ fontWeight: '500' }}>Buy</Text>
                </TouchableOpacity>
  						</View>
  					</View>

            <View style={{
            		flex: 1,
            		marginTop: 157
            	}}>
              <View style={{ backgroundColor: EStyleSheet.value('$lightBlack'), borderBottomWidth: 3, borderColor: EStyleSheet.value('$orangeTheme'), paddingVertical: 10, paddingHorizontal: 15 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Description</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: EStyleSheet.value('$white') }}>
                  {food.description}
                </Text>
              </View>
              <View style={{ backgroundColor: EStyleSheet.value('$lightBlack'), borderBottomWidth: 3, borderColor: EStyleSheet.value('$orangeTheme'), paddingVertical: 10, paddingHorizontal: 15 }}>
                <Text style={{ color: EStyleSheet.value('$white'), fontWeight: '500' }}>Ingredient</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: EStyleSheet.value('$white') }}>
                  Chat masala, chicken, cabbage, bell pepper
                </Text>
              </View>
            </View>

  				</View>
        </ScrollView>
      </View>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cartItems
  }
}

export default connect(mapsStateToProps, { addFoodToCart, getAllCartItems })(Food);
