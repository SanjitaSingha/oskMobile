import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome, Feather } from '@expo/vector-icons';
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 7 }} onPress={() => navigation.navigate('myProfile')}>
            <Feather name='user' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
          >
          <View
            style={{ marginRight: 15, flexDirection: 'row' }}>
            <Feather name="shopping-cart" size={25} color="white" />
            <Text style={{ marginLeft: -4,  fontWeight: 'bold', marginTop: -4 }}>2</Text>
          </View>
          </TouchableOpacity>
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

  };
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
              <Image source={{ uri: 'https://drop.ndtv.com/albums/COOKS/chicken-dinner/chickendinner_640x480.jpg'}} style={{ height: 248, backgroundColor: 'black' }}/>

              <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
                style={styles.linearGradient}
              />
            </View>
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
              <Image source={{ uri: 'http://www.philipsmall.co.uk/flash/food1.jpg'}} style={{ height: 248, backgroundColor: 'black' }}/>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
                style={styles.linearGradient}
              />
            </View>
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
              <Image source={{ uri: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'}} style={{ height: 248, backgroundColor: 'black' }}/>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
                style={styles.linearGradient}
              />
            </View>
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

          <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
            buttonColor="red"
            style={{ marginTop: 15 }}
          >
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
                style={styles.linearGradient}
              >
                <Text>1</Text>
              </LinearGradient>
            </View>
            <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          </Swiper>

          <View style={{ marginBottom: 15 }}>
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
