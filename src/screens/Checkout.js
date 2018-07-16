import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl,
  TextInput,
  TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import styles from '../styles/Checkout';


const { width, height } = Dimensions.get('window');
const oldAddressList = [
  {
    name: 'Sanjita Singha',
    address: 'House no.-14,Bylane- 14 Jatia, ghy '
  },
  {
    name: 'Sanjita Singha',
    address: 'House no.-14,Bylane- 14 Jatia, ghy '
  }
];
class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      address: true,
      oldAddressList: oldAddressList,
      cod: true,
      continueDisabled: true
    };

  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }

  renderNewAddressForm() {
    return (
      <View style={{ borderTopWidth: 0.5, borderColor: '#FDA400', paddingTop: 10, paddingHorizontal: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.checkoutHeader}>Please Fill Up delivery Address</Text>
          <TouchableOpacity onPress={() => this.setState({ address: true })}>
            <Ionicons name='ios-close-circle' size={30} color='#FDA400' />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Name</Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'Enter Name'}
            style={[styles.inputField, { marginTop: 5 }]}
          />
        </View>
        <View>
          <Text>Contact Number</Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'Enter contact Number'}
            style={[styles.inputField, { marginTop: 5 }]}
          />
        </View>
        <View>
          <Text>Address Line 1</Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'Enter Address'}
            style={[styles.inputField, { marginTop: 5 }]}
          />
        </View>
        <View>
          <Text>Landmark</Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'Enter Landmark'}
            style={[styles.inputField, { marginTop: 5 }]}
          />
        </View>
        <View>
          <Text>Pincode</Text>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder={'Enter Pincode'}
            style={[styles.inputField, { marginTop: 5 }]}
          />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  isRenderNewFormOrAddress() {
    if(!this.state.address) {
      return(
        <View>
          {this.renderNewAddressForm()}
        </View>
      )
    }
    return (
      <View>
        {this.renderOldAddress()}
      </View>
    )
  }

  renderEditButton(i) {
    if(i === this.state.addressSelected) {
      return (
        <View style={{ marginTop: 7, borderColor: '#FDA400', borderTopWidth: 0.5, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity style={{ flex: 1, borderRightWidth: 1, borderColor: '#FDA400', justifyContent: 'center', alignItems: 'center' }}>
            <Text>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>REMOVE</Text>
          </TouchableOpacity>
        </View>
      );
    }

  }

  renderAddressList() {
    return this.state.oldAddressList.map((d, i) => {
      return (
        <TouchableOpacity
          onPress={() => this.setState({ addressSelected: i, continueDisabled: false })}
          style={[styles.addressListSection,  { padding: 5, borderColor: '#FDA400', borderWidth: i === this.state.addressSelected ? 0.5 : 0 }]}>
          <Text style={[styles.checkoutHeader]}>
            {d.name}
          </Text>
          <Text noOfLines={1}>
            {d.address}
          </Text>
          {this.renderEditButton(i)}
        </TouchableOpacity>
      )
    })
  }

  renderAddAddressOrAddressForm() {
    if(this.state.address) {
      return (
        <TouchableOpacity onPress={() => this.setState({ address: false })}>
          <Text>+ Add new Address</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View>{this.renderNewAddressForm()}</View>
    )
  }

  renderOldAddress() {
    return (
      <View>
        <Text style={[styles.checkoutHeader, { marginBottom: 5 }]}>Select delivery Address</Text>
        <View>
          {this.renderAddressList()}
          {this.renderAddAddressOrAddressForm()}

        </View>
      </View>
    )
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
          <View>
            <View style={styles.checkoutCard}>
              <Text style={styles.checkoutHeader}>Order Details</Text>
              <View style={styles.orderDetailsInner}>
                <Text style={styles.orderSummaryText}>Sub Total: </Text>
                <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. 450</Text>
              </View>
              <View style={styles.orderDetailsInner}>
                <Text style={[styles.orderSummaryText]}>Wallet Points: </Text>
                <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. 0.00</Text>
              </View>
              <View style={styles.orderDetailsInner}>
                <Text style={styles.orderSummaryText}>Delivery Charge: </Text>
                <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. 20.00</Text>
              </View>
              <View style={[styles.orderDetailsInner, { borderBottomWidth: 0 }]}>
                <Text style={[styles.orderSummaryText]}>Payable Amount:</Text>
                 <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. 20.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.checkoutCard}>
            <Text style={styles.checkoutHeader}>Promocode (optional)</Text>
            <View style={{ marginTop: 15, marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                underlineColorAndroid='transparent'
                placeholder={'Enter promo Coupon'}
                style={[styles.inputField, { width: '80%', marginTop: 0, marginBottom: 0 }]}
              />
              <TouchableOpacity style={styles.applyButton}>
                <Text>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkoutCard}>
            {this.renderOldAddress()}
          </View>

          <View style={styles.checkoutCard}>
            <Text style={[styles.checkoutHeader, { marginBottom: 5 }]}>Choose Billing Mode</Text>
            <View>
              <TouchableOpacity onPress={() => this.setState({ cod: true })} style={{ padding: 5, backgroundColor: this.state.cod ? 'black' : 'white' }}>
                <Text style={{ color: this.state.cod ? 'white' : 'black' }}>Cash on Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ cod: false })} style={{ padding: 5, backgroundColor: !this.state.cod ? 'black' : 'white' }}>
                <Text style={{ color: !this.state.cod ? 'white' : 'black' }}>Online Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
        <TouchableOpacity disabled={this.state.continueDisabled} style={[styles.continueButton, { backgroundColor: this.state.continueDisabled ? '#fccb76' : '#FDA400' }]}>
          <Text style={[{ color: this.state.continueDisabled ? 'grey' : 'black' }]}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Checkout;
