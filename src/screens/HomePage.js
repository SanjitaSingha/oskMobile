import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import styles from '../styles/HomePage';
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
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
		this.viewFood = this.viewFood.bind(this);
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }
  viewFood() {
    console.log('View food pressed');
    this.props.navigation.navigate('food');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView onLayout={this._onLayoutDidChange}
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
        >
          <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
            buttonColor="red"
          >
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']}
                style={styles.linearGradient}
              >
                <Text>1</Text>
              </LinearGradient>
            </View>
            <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
            <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
          </Swiper>
          <View>
  					<View style={styles.listHeading}>
  						<Text style={styles.listHeadingLeft}>Trending</Text>
  						<TouchableOpacity>
  							<Text
  								style={styles.listHeadingRight}
                >
  								See all
  							</Text>
  						</TouchableOpacity>
  					</View>
  					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  						{nonVeg.map(info => (
  							<SingleFoodCard key={info.id} info={info} viewFood={this.viewFood} />
  						))}
  					</ScrollView>

  				</View>
          <View>
  					<View style={styles.listHeading}>
  						<Text style={styles.listHeadingLeft}>All Foods</Text>
  						<TouchableOpacity onPress={() => this.props.navigation.navigate('foodList')}>
  							<Text
  								style={styles.listHeadingRight}
                >
  								See all
  							</Text>
  						</TouchableOpacity>
  					</View>
  					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  						{nonVeg.map(info => (
  							<SingleFoodCard key={info.id} info={info} viewFood={this.viewFood} />
  						))}
  					</ScrollView>

  				</View>
        </ScrollView>
      </View>
    )
  }
}

export default HomePage;