import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl,
  TextInput,
  TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/Checkout';

const fakeId = 2;
const { width, height } = Dimensions.get('window');
const oldAddressList = [
  {
    id: 0,
    name: 'Sanjita Singha',
    address: 'House no.-14,Bylane- 14 Jatia, ghy',
    landmark: 'Agradudh',
    pinCode: '78456'
  },
  {
    id: 1,
    name: 'Sanjita Singha',
    address: 'House no.-24,Bylane- 14 Jatia, ghy',
    landmark: 'Agradudh',
    pinCode: '78454'
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
      continueDisabled: true,
      toEditAddress: {},
      edit: false,
    };

  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }

  saveOrEditAddress() {
    if(this.state.edit) {
      const data1 = {};
      data1.id = this.state.newData.id;
      data1.name = this.state.name;
      data1.address = this.state.addressLine;
      data1.landmark = this.state.landmark;
      data1.pinCode = this.state.pinCode;
      this.setState({ toEditAddress: data1 }, function() {
        console.log(this.state.toEditAddress, this.state.toEditAddress.length);

          const toEdit = this.state.oldAddressList.filter(d => {
            return this.state.toEditAddress.id === d.id
          });
          const tooEdit = this.state.oldAddressList.map(d => {
            if(this.state.toEditAddress.id === d.id) {
              return d = this.state.toEditAddress;
            }
            return d;
          });
          // console.log('To be edit Address', tooEdit);
          this.setState({ oldAddressList: tooEdit, address: true });
        })
      }
      else {
        // to add Address
        fakeId++;
        const obj = {};
        obj.id = fakeId;
        obj.name = this.state.name;
        obj.address = this.state.addressLine;
        obj.landmark = this.state.landmark;
        obj.pinCode = this.state.pinCode;
        this.state.oldAddressList.push(obj);
        // console.log('Add Address', obj, this.state.oldAddressList);
        this.setState({ oldAddressList: this.state.oldAddressList, address: true });

      }
  }

  renderNewAddressForm() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <View style={{ borderTopWidth: 0.5, borderColor: EStyleSheet.value('$orangeTheme'), paddingTop: 10, paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.checkoutHeader}>Please Fill Up delivery Address</Text>
            <TouchableOpacity onPress={() => this.setState({ address: true })}>
              <Ionicons name='ios-close-circle' size={30} color={EStyleSheet.value('$orangeTheme')} />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Name</Text>
            <TextInput
              onChangeText={(t) => this.setState({ name: t })}
              underlineColorAndroid='transparent'
              placeholder={'Enter Name'}
              value={this.state.name}
              style={[styles.inputField, { marginTop: 5 }]}
            />
          </View>
          <View>
            <Text>Contact Number</Text>
            <TextInput
              onChangeText={(t) => this.setState({ contactNumber: t })}
              underlineColorAndroid='transparent'
              placeholder={'Enter contact Number'}
              value={this.state.contactNumber}
              style={[styles.inputField, { marginTop: 5 }]}
            />
          </View>
          <View>
            <Text>Address Line 1</Text>
            <TextInput
              onChangeText={(t) => this.setState({ addressLine: t })}
              underlineColorAndroid='transparent'
              placeholder={'Enter Address'}
              value={this.state.addressLine}
              style={[styles.inputField, { marginTop: 5 }]}
            />
          </View>
          <View>
            <Text>Landmark</Text>
            <TextInput
              onChangeText={(t) => this.setState({ landmark: t })}
              underlineColorAndroid='transparent'
              placeholder={'Enter Landmark'}
              value={this.state.landmark}
              style={[styles.inputField, { marginTop: 5 }]}
            />
          </View>
          <View>
            <Text>Pincode</Text>
            <TextInput
              onChangeText={(t) => this.setState({ pinCode: t })}
              underlineColorAndroid='transparent'
              placeholder={'Enter Pincode'}
              value={this.state.pinCode}
              keyboardType={'numeric'}
              style={[styles.inputField, { marginTop: 5 }]}
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={() => this.saveOrEditAddress()}>
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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

  editAddress(data) {
    this.setState({ edit: true, address: false, newData: data,
      name: data.name, addressLine: data.address,
      landmark: data.landmark, pinCode: data.pinCode });
  }
  removeAddress(data) {
    const a = this.state.oldAddressList.filter(d => {
      return d.id !== data.id;
    });
    this.setState({ oldAddressList: a });
  }

  renderEditButton(i, data) {
    if(i === this.state.addressSelected) {
      return (
        <View style={{ marginTop: 7, borderColor: EStyleSheet.value('$green'), borderTopWidth: 0.8, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => this.editAddress(data)}
            style={{ flex: 1, borderRightWidth: 1.5, borderColor: EStyleSheet.value('$green'), justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.removeAddress(data)}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>REMOVE</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderAddressList() {
    return this.state.oldAddressList.map((d, i) => {
      return (
        <View style={{ position: 'relative' }}>

          <FontAwesome name='check-circle' size={20} color={EStyleSheet.value('$green')}
            style={{ opacity: i === this.state.addressSelected ? 1 : 0, backgroundColor: EStyleSheet.value('$white'), position: 'absolute', top: -10, right: -5, zIndex: 100 }}/>

          <TouchableOpacity
            onPress={() => this.setState({ addressSelected: i, continueDisabled: false })}
            style={[styles.addressListSection, { zIndex: -100, padding: 5, borderColor: EStyleSheet.value('$green'), borderWidth: i === this.state.addressSelected ? 0.8 : 0 }]}>
            <Text style={[styles.checkoutHeader]}>
              {d.name}
            </Text>
            <Text numberOfLines={1}>
              <Text>{d.address}</Text>
              <Text> {d.landmark}</Text>
              <Text> {d.pinCode}</Text>
            </Text>
            {this.renderEditButton(i, d)}
          </TouchableOpacity>
        </View>
      )
    })
  }

  renderAddAddressOrAddressForm() {
    if(this.state.address) {
      return (
        <TouchableOpacity
          onPress={() => this.setState({
            toEditAddress: {},
            edit: false,
            name: '', contactNumber: '', landmark: '',
            pinCode: '', addressLine: '', address: false
          })}
        >
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
          keyboardShouldPersistTaps={'always'}
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
            <View style={[styles.checkoutCard, { paddingBottom: 5 }]}>
              <Text style={styles.checkoutHeader}>Order Details</Text>
              <View style={styles.orderDetailsInner}>
                <Text style={styles.orderSummaryText}>Sub Total: </Text>
                <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. {this.props.navigation.state.params.subTotal}</Text>
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
                 <Text style={[styles.orderSummaryText, { fontWeight: 'bold' }]}>Rs. {(this.props.navigation.state.params.subTotal + 20) - 0.00}</Text>
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
              <TouchableOpacity onPress={() => this.setState({ cod: true })} style={{ paddingHorizontal: 5, paddingVertical: 10, backgroundColor: this.state.cod ? 'black' : 'white' }}>
                <Text style={{ color: this.state.cod ? EStyleSheet.value('$white') : EStyleSheet.value('$black'), fontWeight: 'bold' }}>
                  Cash on Delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ cod: false })} style={{ paddingHorizontal: 5, paddingVertical: 10, backgroundColor: !this.state.cod ? 'black' : 'white' }}>
                <Text style={{ color: !this.state.cod ? EStyleSheet.value('$white') : EStyleSheet.value('$black'), fontWeight: 'bold' }}>
                  Online Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </ScrollView>
        <TouchableOpacity disabled={this.state.continueDisabled} style={[styles.continueButton, { backgroundColor: this.state.continueDisabled ? '#fccb76' : '#FDA400' }]}>
          <Text style={[{ color: this.state.continueDisabled ? EStyleSheet.value('$grey') : EStyleSheet.value('$black') }]}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Checkout;
