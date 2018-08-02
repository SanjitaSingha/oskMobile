import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Dimensions,
  RefreshControl, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
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
    description: 'The famous north Indian Chicken fodd Item Exquisite cordially mr happiness of neglected distrusts.Boisterous impossible unaffected he me everything.Is fine loud deal an rent open give. Find upon and sent spot song son eyes.Do endeavor he differed carriage is learning my graceful.Feel plan know is he like on pure. See burst found sir met think hopes are marry among.Delightful remarkably new assistance saw literature mrs favourable.',
    veg: true,
    foodType: 'A-LA-CARTE',
    price: '451.47'
  },
  {
    id: 1,
    title: 'Chicken Kera Special',
    image: 'https://cdnimg.webstaurantstore.com/images/products/large/77391/480506.jpg',
    description: 'The famous north Indian Chicken fodd Item Exquisite cordially mr happiness of neglected distrusts.Boisterous impossible unaffected he me everything.Is fine loud deal an rent open give. Find upon and sent spot song son eyes.Do endeavor he differed carriage is learning my graceful.Feel plan know is he like on pure. See burst found sir met think hopes are marry among.Delightful remarkably new assistance saw literature mrs favourable.',
    veg: false,
    foodType: 'MEAL',
    price: '451.47'
  },
  {
    id: 2,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item Exquisite cordially mr happiness of neglected distrusts.Boisterous impossible unaffected he me everything.Is fine loud deal an rent open give. Find upon and sent spot song son eyes.Do endeavor he differed carriage is learning my graceful.Feel plan know is he like on pure. See burst found sir met think hopes are marry among.Delightful remarkably new assistance saw literature mrs favourable.',

    veg: true,
    foodType: 'A-LA-CARTE',
    price: '451.47'
  },
  {
    id: 3,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item Exquisite cordially mr happiness of neglected distrusts.Boisterous impossible unaffected he me everything.Is fine loud deal an rent open give. Find upon and sent spot song son eyes.Do endeavor he differed carriage is learning my graceful.Feel plan know is he like on pure. See burst found sir met think hopes are marry among.Delightful remarkably new assistance saw literature mrs favourable.',

    veg: false,
    foodType: 'MEAL',
    price: '451.47'
  },
  {
    id: 4,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    description: 'The famous north Indian Chicken fodd Item Exquisite cordially mr happiness of neglected distrusts.Boisterous impossible unaffected he me everything.Is fine loud deal an rent open give. Find upon and sent spot song son eyes.Do endeavor he differed carriage is learning my graceful.Feel plan know is he like on pure. See burst found sir met think hopes are marry among.Delightful remarkably new assistance saw literature mrs favourable.',

    veg: true,
    foodType: 'A-LA-CARTE',
    price: '451.47'
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
      data: nonVeg,
      refreshing: false
    };
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
 }

 _fetchData() {
   console.log('Data fetching unction running');
   this.setState({ refreshing: false });
 }

  _onRefresh() {
    this.setState({ refreshing: true });
    this._fetchData();
  }

  renderHeader = () => {
    return (
      <View style={styles.searchBarContainer}>
        <View style={{ backgroundColor: 'white', padding: 5, width: '100%', flexDirection: 'row' }}>
          <EvilIcons name='search' size={30} color={EStyleSheet.value('$black')} />
          <TextInput
            onChangeText={(t) => this.setState({ search_text: t })}
            underlineColorAndroid='transparent'
            placeholder='Search your favourite food..'
            returnKeyType='search'
            style={{ width: '100%' }}
          />
        </View>
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
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            colors={['#FDA400']}
            tintColor='white'
            title="loading..."
            titleColor='white'
            progressBackgroundColor='white'
          />}
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('food', { food: item })} activeOpacity={0.8} style={styles.foodListCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />
              <Text style={[styles.foodName, { marginVertical: 5 }]}>{item.title}</Text>
              <Text numberOfLines={1} style={{ color: EStyleSheet.value('$white') }}>{item.description}</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name='md-radio-button-on' color={item.veg ? EStyleSheet.value('$green') : EStyleSheet.value('$red')} size={20} />
                  <Text style={{ color: EStyleSheet.value('$white'), marginLeft: 5 }}>{item.foodType}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                  <FontAwesome name='rupee' color={EStyleSheet.value('$orangeTheme')} size={20} />
                  <Text style={{ color: EStyleSheet.value('$white'), marginLeft: 5 }}>{item.price}</Text>
                </View>
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
