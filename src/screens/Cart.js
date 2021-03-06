import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import styles from '../styles/Cart';
import { removeFoodFromCart } from '../actions';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const total = 0;
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      cartItems: [],
      quantity: 1,
      currentCard: 0
    };
  }

  componentDidMount() {
    console.log('CARt Reducer list', this.props.cartItems);
    this.setState({ cartItems: this.props.cartItems });
  }

  componentWillReceiveProps(nextProps) {
    console.log('Cart nextProps', nextProps);
    this.setState({ cartItems: nextProps.cartItems });
  }

  renderHeader = () => {
    return (
      <View style={[styles.cartHeader, { width: '100%', paddingHorizontal: 50 }]}>
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: EStyleSheet.value('$white'), fontSize: 15 }}>SUB TOTAL</Text>
          <Text style={{ color: EStyleSheet.value('$white'), fontSize: 17, fontWeight: 'bold' }}>
            Rs. <Text>{total}</Text>
          </Text>
        </View>
        {/*<TouchableOpacity
          onPress={() => this.props.navigation.navigate('checkout', { subTotal: total })}
          style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
        </TouchableOpacity>*/}
      </View>
    )
  }

  removeItemCart(id) {
    this.props.removeFoodFromCart(id);
  }

  isEmptyMessageRender() {
    if(this.state.cartItems.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -70 }}>
          <Image source={require('../constants/images/empty-cart.png')} style={{ width: 200, height: 150 }}/>
          <Text>Please add Items</Text>
          <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('home')}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Shop More</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ position: 'relative', flex: 1 }}>
          {this.renderCartList()}
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => this.props.navigation.navigate('checkout', { subTotal: total })}
          >
            <Text style={{ marginRight: 5 }}>Checkout</Text>
            <Feather name='check-square' size={20} color={EStyleSheet.value('$black')} />
          </TouchableOpacity>
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
        for (var j in this.state.cartItems) {
           if (this.state.cartItems[j].id === i) {
              this.state.cartItems[j].quantity = this.state.quantity;
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
        for (var j in this.state.cartItems) {
           if (this.state.cartItems[j].id === i) {
              this.state.cartItems[j].quantity = this.state.quantity;
              break; //Stop this loop, we found it!
           }
         }
        const b = p * this.state.quantity;
        this.setState({ total: b });
      });
    }
  }

  renderCartList() {
    console.log('ITEM CART', this.state.cartItems);

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
            tintColor='white'
            title="loading..."
            titleColor='white'
            progressBackgroundColor='white'
        />}
        data={this.state.cartItems}
        renderItem={({ item }) =>  (
          <View style={[styles.cartCard, { marginTop: item.id === 0 ? 10 : 0 }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: item.image }} style={styles.cartItemImage} />
              <View style={{ marginLeft: 10, paddingVertical: 5 }}>
                <Text style={[styles.foodName, { marginBottom: 5 }]}>{item.title}</Text>
                <View>
                  <Text>
                    <FontAwesome name="rupee" size={15} color={EStyleSheet.value('$black')} style={{ paddingRight: 5 }} />
                    <Text style={styles.lightPriceBoldFont}>{item.price} X {item.id === this.state.currentCard ? this.state.quantity : item.quantity}</Text>
                  </Text>
                  <View style={{ flexDirection: 'row', marginVertical: 7 }}>
                    <FontAwesome onPress={() => this.increaseQuntity(item.quantity, item.price, item.id)} name="plus-circle" size={25} color={EStyleSheet.value('$darkGrey')} />
                    <Text style={[{ marginHorizontal: 10 }]}>{item.id === this.state.currentCard ? this.state.quantity : item.quantity}</Text>
                    <FontAwesome onPress={() => this.reduceQuntity(item.quantity, item.price, item.id)} name="minus-circle" size={25} color={EStyleSheet.value('$darkGrey')} />
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.priceBoldFont, { marginTop: 5, marginRight: 15 }]} >
                      <FontAwesome name="rupee" size={20} color={EStyleSheet.value('$black')} />
                      {item.quantity * item.price}
                    </Text>
                    <TouchableOpacity onPress={() => this.removeItemCart(item.id)} style={styles.removeButton}>
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
    for (var j in this.state.cartItems) {
       total = total + (this.state.cartItems[j].quantity * this.state.cartItems[j].price);
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
      <View style={{ flex: 1 }}>
        {this.isEmptyMessageRender()}
      </View>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cartItems
  }
}

export default connect(mapsStateToProps, { removeFoodFromCart })(Cart);
