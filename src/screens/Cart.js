import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import styles from '../styles/Cart';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const cartItem = [
    {
      id: 0,
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/portion_sizes_slideshow/getty_rm_photo_of_fish_meal_on_small_plate.jpg' ,
      foodName: 'Chicken Masala',
      quantity: 1,
      price: 120.27
    },
    {
      id: 1,
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/portion_sizes_slideshow/getty_rm_photo_of_fish_meal_on_small_plate.jpg' ,
      foodName: 'Paneer Masala',
      quantity: 1,
      price: 90
    },
    {
      id: 2,
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/portion_sizes_slideshow/getty_rm_photo_of_fish_meal_on_small_plate.jpg' ,
      foodName: 'Chicken th bjsj',
      quantity: 1,
      price: 105.12
    }
]
const total = 0;
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemLength: 1,
      size: { width, height },
      cartItem: cartItem,
      quantity: 1,
      currentCard: 0
    };
  }

  renderHeader = () => {
    return (
      <View style={[styles.cartHeader, { width: '100%' }]}>
        <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ color: 'white', fontSize: 12 }}>SUB TOTAL</Text>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Rs. <Text>{total}</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('checkout')}
          style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    )
  }

  isEmptyMessageRender() {
    console.log('Cart Lits', this.state.cartItemLength);
    if(this.state.cartItemLength === 0) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../constants/images/empty-cart.png')} style={{ width: 200, height: 150 }}/>
          <Text>Please add Items</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
            <Text>shop more</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          {this.renderCartList()}
        </View>
      )
    }

    }

  increaseQuntity(q, p, i) {
    if(q > 0) {

      if(this.state.currentCard !== i) {
        this.setState({
          quantity: q + 1,
        })
      } else {
        this.setState({
          quantity: this.state.quantity + 1,
        })
      }
      this.setState({
        currentCard: i
      }, function() {
        for (var j in this.state.cartItem) {
           if (this.state.cartItem[j].id === i) {
              this.state.cartItem[j].quantity = this.state.quantity;
              break; //Stop this loop, we found it!
           }
         }
        const b = p * this.state.quantity;
        this.setState({ total: b });
      });
    }
  }

  reduceQuntity(q, p, i) {
    if(q > 1) {
      if(this.state.currentCard !== i) {
        this.setState({
          quantity: q - 1,
        })
      } else {
        this.setState({
          quantity: this.state.quantity - 1,
        })
      }
      this.setState({
        currentCard: i
      }, function() {
        for (var j in this.state.cartItem) {
           if (this.state.cartItem[j].id === i) {
              this.state.cartItem[j].quantity = this.state.quantity;
              break; //Stop this loop, we found it!
           }
         }
        const b = p * this.state.quantity;
        this.setState({ total: b });
      });
    }
  }

  renderCartList() {
    console.log('ITEM CART', this.state.cartItem);

    return (
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
        data={this.state.cartItem}
        renderItem={({ item }) =>  (
          <View style={[styles.cartCard, { marginTop: item.id === 0 ? 10 : 0 }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/portion_sizes_slideshow/getty_rm_photo_of_fish_meal_on_small_plate.jpg' }} style={styles.cartItemImage} />
              <View style={{ marginLeft: 10, paddingVertical: 5 }}>
                <Text style={[styles.foodName, { marginBottom: 5 }]}>{item.foodName}</Text>
                <View>
                  <Text>
                    <FontAwesome name="rupee" size={15} color="black" style={{ paddingRight: 5 }} />
                    <Text style={styles.lightPriceBoldFont}>{item.price} X {item.id === this.state.currentCard ? this.state.quantity : item.quantity}</Text>
                  </Text>
                  <View style={{ flexDirection: 'row', marginVertical: 7 }}>
                    <FontAwesome onPress={() => this.increaseQuntity(item.quantity, item.price, item.id)} name="plus-circle" size={25} color="#ada8a8" />
                    <Text style={[{ marginHorizontal: 10 }]}>{item.id === this.state.currentCard ? this.state.quantity : item.quantity}</Text>
                    <FontAwesome onPress={() => this.reduceQuntity(item.quantity, item.price, item.id)} name="minus-circle" size={25} color="#ada8a8" />
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.priceBoldFont, { marginTop: 5, marginRight: 15 }]} >
                      <FontAwesome name="rupee" size={20} color="black" />
                      {item.quantity * item.price}
                    </Text>
                    <TouchableOpacity style={styles.removeButton}>
                      <Text>Remove</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>

          </View>
        )}
      />
    )
  }

  calCulate() {
    total = 0;
    for (var j in this.state.cartItem) {
       total = total + (this.state.cartItem[j].quantity * this.state.cartItem[j].price);
       total = Math.floor(total*Math.pow(10,2))/(Math.pow(10,2));
     }
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }
  render() {
    this.calCulate();
    return (
      <View>
        {this.isEmptyMessageRender()}
      </View>
    )
  }
}

export default Cart;
