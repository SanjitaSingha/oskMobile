import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions,
  RefreshControl, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import styles from '../styles/Food';
import SingleFoodCard from '../components/SingleFoodCard';


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
      <View>
        <TextInput
          placeholder='Type your favourite food..'
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
            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: 'white' }}>{item.description}</Text>
            </View>
          )}

          ListHeaderComponent={this.renderHeader}
        />

      </View>
    )
  }
}

export default FoodList;
