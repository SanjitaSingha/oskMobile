import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput,
  Dimensions, RefreshControl, Modal, Share, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/MyProfile';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      size: { width, height },
      name: 'Sanjita Singha',
      email: 'sanjitasingha100@gmail.com',
      phone: '954568437',
      referalView: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }
  shareCode() {
    Share.share({
      message: 'Looking for delicious food? Download the app One Stop Kitchen and use my Referral Code Sanjita123 to win exciting discounts https://goo.gl/D6YxL2',
      url: 'https://goo.gl/D6YxL2',
      title: 'One Stop Kitchen'
    }, {
      // Android only:
      dialogTitle: 'Share OSK with',
    });
  }

  renderReferalCodeInfo() {
    if(this.state.referalView) {
      return (
        <View>
          <View style={[styles.detailsContainer, { marginTop: 10 }]}>
            <Text style={[styles.textStyle]}>Referral Code:</Text>
            <Text style={[styles.textStyle, { fontWeight: 'bold',fontSize: 19 }]}>Sanjita123</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.textStyle, { textAlign: 'center', fontSize: 13 }]}>
              Share your code with your friends and you shall recieve 10 Points for each
              registration via your Referral Code.
            </Text>
            <Text style={[styles.textStyle,{ fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }]}>1 Point = 1 INR</Text>
            <TouchableOpacity style={styles.profileSubmitButton} onPress={() => this.shareCode()}>
              <Text>Refer Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
        onLayout={this._onLayoutDidChange}
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
        <KeyboardAvoidingView behavior='padding'>
        <View style={{ padding: 15 }}>

          <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Name:</Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.textStyle} value={this.state.name}
              onChangeText={(t) => this.setState({ name: t })}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Contact No.:</Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.textStyle} value={this.state.phone}
              onChangeText={(t) => this.setState({ phone: t })}
              keyboardType={'numeric'}
            />

          </View>
          <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Email:</Text>
            <TextInput
              underlineColorAndroid='transparent'
              onChangeText={(t) => this.setState({ email: t })}
              style={styles.textStyle} value={this.state.email}
            />

          </View>

          <View style={{ borderTopWidth: 0.5, borderColor: EStyleSheet.value('$grey'), paddingTop: 10, marginTop: 15 }}>
            <Text style={[styles.textStyle, { fontWeight: 'bold', marginBottom: 10 }]}>Address</Text>
            <View style={styles.detailsContainer}>
              <Text style={[styles.textStyle, { fontWeight: 'bold', flex: 1 }]}>Address Line1:</Text>
              <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(t) => this.setState({ address: t })}
                style={[styles.textStyle, { flex: 2, marginLeft: 10 }]} value={this.state.address}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={[styles.textStyle, { fontWeight: 'bold', flex: 1 }]}>Landmark:</Text>
              <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(t) => this.setState({ landmark: t })}
                style={[styles.textStyle, { flex: 2, marginLeft: 10 }]} value={this.state.landmark}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={[styles.textStyle, { fontWeight: 'bold', flex: 1 }]}>Pin Code:</Text>
              <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(t) => this.setState({ pincode: t })}
                style={[styles.textStyle, { flex: 2, marginLeft: 10 }]} value={this.state.pincode}
                keyboardType={'numeric'}
              />
            </View>
          </View>

          <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: EStyleSheet.value('$grey'), paddingVertical: 10, marginTop: 15 }}>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Wallet</Text>
            <View style={[styles.detailsContainer, { marginTop: 10 }]}>
              <Text style={[styles.textStyle]}>Available Points:</Text>
              <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>0</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ referalView: !this.state.referalView })}
              style={styles.profileSubmitButton}
            >
              <Text>{this.state.referalView ? 'Not Now' : 'Earn Now'}</Text>
            </TouchableOpacity>
            {this.renderReferalCodeInfo()}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <TouchableOpacity style={[styles.profileButton, { backgroundColor: EStyleSheet.value('$red') }]}>
              <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={[styles.profileButton, { backgroundColor: EStyleSheet.value('$orangeTheme')}]}>
              <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInputCard}>
                <View style={styles.closeContainer}>
                  <Text style={{ fontWeight: 'bold' }}>Change your Password</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Ionicons name='ios-close-circle' size={30} color={EStyleSheet.value('$orangeTheme')} />
                  </TouchableOpacity>
                </View>
                <TextInput
                  placeholder='Enter new password'
                  underlineColorAndroid='transparent'
                  style={styles.inputField}
                />
                <TouchableOpacity style={[styles.profileSubmitButton]}>
                  <Text style={[styles.textStyle, { fontWeight: 'bold'}]}>Submit</Text>
                </TouchableOpacity>

            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default MyProfile;
