import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions,
  RefreshControl, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import styles from '../styles/FoodList';
import SingleFoodCard from '../components/SingleFoodCard';


const { width, height } = Dimensions.get('window');
const nonVeg = [
  {
    id: 0,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item',
    veg: true,
    foodType: 'A-LA-CARTE'
  },
  {
    id: 1,
    title: 'Chicken Kera Special',
    image: 'https://cdnimg.webstaurantstore.com/images/products/large/77391/480506.jpg',
    description: 'The famous north Indian Chicken fodd Item',
    veg: false,
    foodType: 'MEAL'
  },
  {
    id: 2,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item',
    veg: true,
    foodType: 'A-LA-CARTE'
  },
  {
    id: 3,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item',
    veg: false,
    foodType: 'MEAL'
  },
  {
    id: 4,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item',
    veg: true,
    foodType: 'A-LA-CARTE'
  },
];
class FoodList extends Component {
  static navigationOptions = {
    title: 'FoodList',
    headerRight: (
      <View style={{ marginRight: 15, flexDirection: 'row' }}>
        <FontAwesome name="shopping-cart" size={25} color="white" />
        <Text style={{ marginLeft: -4,  fontWeight: 'bold', marginTop: -4 }}>2</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#FDA400',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      data: nonVeg
    };
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }
  renderHeader = () => {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder='Search your favourite food..'
          returnKeyType='search' 
          style={{ backgroundColor: 'white', padding: 5, width: '100%' }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          onLayout={this._onLayoutDidChange}
          style={styles.container}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
          refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => { console.log('Test'); }}
            colors={['#FDA400']}
            tintColor="white"
            title="loading..."
            titleColor="white"
            progressBackgroundColor="white"
          />}
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('food')} activeOpacity={0.8} style={styles.foodListCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />
              <Text style={[styles.foodName, { marginVertical: 5 }]}>{item.title}</Text>
              <Text numberOfLines={1} style={{ color: '#fff' }}>{item.description}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name='md-radio-button-on' color={item.veg ? "green" : 'red'} size={20} />
                <Text style={{ color: '#fff', marginLeft: 5 }}>{item.foodType}</Text>
              </View>
            </TouchableOpacity>
          )}

          ListHeaderComponent={this.renderHeader}
        />

      </View>
    )
  }
}

export default FoodList;
