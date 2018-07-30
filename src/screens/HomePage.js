import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome, Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
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
const newItems = [
  {
    id: 0,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg'
  },
  {
    id: 1,
    title: 'Chicken Kera Special',
    image: 'https://cdnimg.webstaurantstore.com/images/products/large/77391/480506.jpg'
  },
  {
    id: 2,
    title: 'Chicken Kera Special',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg'
  },
];

const offers = [
  {
    id: 0,
    title: 'Welcome Offer',
    image: 'https://cdnimg.webstaurantstore.com/images/products/large/77391/480506.jpg',
    percent: '10%',
    code: 'OSKGHY10'
  },
  {
    id: 1,
    title: 'Special Offer',
    image: 'http://www.philipsmall.co.uk/flash/food1.jpg',
    percent: '20%',
    code: 'OSKWCP20'
  },
];

class HomePage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 7 }} onPress={() => navigation.navigate('myProfile')}>
            <Feather name='user' size={30} color={EStyleSheet.value('$white')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
          >
          <View
            style={{ marginRight: 15, flexDirection: 'row' }}>
            <Feather name="shopping-cart" size={25} color={EStyleSheet.value('$white')} />
            <Text style={{ marginLeft: -4,  fontWeight: 'bold', marginTop: -4 }}>2</Text>
          </View>
          </TouchableOpacity>
        </View>
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
      newItems: newItems,
      offers: offers
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

  _renderNewItems() {
    return this.state.newItems.map(d => {
      return (
        <View style={[this.state.size]}>
          <Image  source={{ uri: `${d.image}` }} style={{ height: 248, backgroundColor: 'black' }}/>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
            style={styles.linearGradient}
          >
            <Text style={[styles.viewDetailsButtonText, { marginBottom: 20, fontSize: 17 }]}>{d.title}</Text>
            <TouchableOpacity style={styles.viewDetails}>
              <Text style={styles.viewDetailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      );
    })
  }

  _renderOfferCard() {
    return this.state.offers.map(d => {
      return (
        <View style={{ width: this.state.size.width }}>
          <Image  source={{ uri: `${d.image}` }} style={{ height: 200 }}/>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.3)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.7)']}
            style={[styles.linearGradient, { height: 200 }]}
          >
            <Text style={[styles.viewDetailsButtonText, { fontSize: 20 }]}>{d.title}</Text>
            <Text style={[styles.viewDetailsButtonText, { marginVertical: 15 }]}>{d.percent}</Text>
            <Text style={[styles.viewDetailsButtonText, { fontSize: 25, color: EStyleSheet.value('$orangeTheme') }]}>CODE: <Text>{d.code}</Text></Text>

          </LinearGradient>
        </View>
      );
    })
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

          >
            {this._renderNewItems()}
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
            height={200}
            style={{ marginTop: 15 }}
          >
            {this._renderOfferCard()}
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
