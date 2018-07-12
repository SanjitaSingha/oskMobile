import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, TouchableOpacity, Image } from 'react-native';
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
class Food extends Component {
  static navigationOptions = {
    title: 'Home',
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
    };
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
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
        <View>
          <Swiper
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
            buttonColor="red"
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
  						<Image source={{ uri: 'http://www.philipsmall.co.uk/flash/food1.jpg' }} style={styles.cardImage} />
  						<View style={styles.cardDetails}>
  							<Text style={styles.cardTitle}>Food Name</Text>
  							<Text style={styles.foodType}>A-LA-CARTE</Text>
  							<View style={styles.cardGenre}>
										<Text style={styles.cardGenreItem}>
                      <FontAwesome name="rupee" size={20} color="white" />
                      <Text>158</Text>
                    </Text>
  							</View>
  							<View style={styles.cardNumbers}>
  								<View style={styles.cardStar}>
                    <Text style={styles.cardGenreItem}>15 times ordered</Text>
  									<Text style={styles.cardStarRatings}>Veg</Text>
  								</View>

  								<Text style={styles.cardRunningHours} />
  							</View>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={{ fontWeight: '500' }}>Buy</Text>
                </TouchableOpacity>
  						</View>
  					</View>

            <View style={{
            		flex: 1,
            		marginTop: 157
            	}}>
              <View style={{ backgroundColor: '#131313', borderBottomWidth: 3, borderColor: '#FDA400', paddingVertical: 10, paddingHorizontal: 15 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Description</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: 'white' }}>
                  Exquisite cordially mr happiness of neglected distrusts.
                  Boisterous impossible unaffected he me everything.
                  Is fine loud deal an rent open give. Find upon and sent spot song son eyes.
                  Do endeavor he differed carriage is learning my graceful.
                  Feel plan know is he like on pure. See burst found sir met think hopes are marry among.
                  Delightful remarkably new assistance saw literature mrs favourable.

                </Text>
              </View>
              <View style={{ backgroundColor: '#131313', borderBottomWidth: 3, borderColor: '#FDA400', paddingVertical: 10, paddingHorizontal: 15 }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Ingredient</Text>
              </View>
              <View style={{ padding: 15 }}>
                <Text style={{ color: 'white' }}>
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

export default Food;
