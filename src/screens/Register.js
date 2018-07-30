import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions , TextInput,
   TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/Login';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const remote = 'http://www.mobileswall.com/wp-content/uploads/2015/03/640-food-cookies-cream-dessert-l.jpg';
const { height, width } = Dimensions.get('window');

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width,
      height,
    };
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ width: layout.width, height: layout.height });
  }
  render() {
    return (
      <ScrollView onLayout={this._onLayoutDidChange}
        keyboardShouldPersistTaps={'always'}
      >
      <KeyboardAvoidingView behavior="padding">

        <ImageBackground
          style={{ width: this.state.width, height: this.state.height <= 360 ? '100%': this.state.height }}
          source={{ uri: remote }}>
          <View style={[styles.container, { justifyContent: 'center' }]}>

            <View>
              <View style={{ alignItems: 'center', marginBottom: 15  }}>
                <Image source={require('../constants/images/logoBackTrans.png')} style={{ width: 100, height: 100 }}/>
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="user-circle" size={17} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Name</Text>
                <TextInput style={styles.textInput}
                  ref={(input) => { this.focusName = input; }}
                  placeholder={'Name'}
                  underlineColorAndroid='transparent'
                  returnKeyType="next"
                  onSubmitEditing={() => this.focusUserName.focus()}
                />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="phone" size={20} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Username</Text>
                <TextInput style={styles.textInput}
                  ref={(input) => { this.focusUserName = input; }}
                  placeholder={'Phone Number'}
                  underlineColorAndroid='transparent'
                  keyboardType={'phone-pad'}
                  returnKeyType="next"
                  onSubmitEditing={() => this.focusEmail.focus()}
                />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="envelope" size={17} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Email</Text>
                <TextInput style={styles.textInput}
                  ref={(input) => { this.focusEmail = input; }}
                  placeholder={'Email Address'}
                  underlineColorAndroid='transparent'
                  keyboardType={'email-address'}
                  returnKeyType="next"
                  onSubmitEditing={() => this.focusPassword.focus()}
                />
              </View>
              <View style={[styles.inputContainer]}>
                <FontAwesome name="lock" size={20} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Password</Text>
                <TextInput style={styles.textInput}
                  ref={(input) => { this.focusPassword = input; }}
                  placeholder={'Password'}
                  underlineColorAndroid='transparent'
                  secureTextEntry
                  returnKeyType="next"
                  onSubmitEditing={() => this.focusReferral.focus()}
                />
              </View>
              <View style={[styles.inputContainer, { borderBottomWidth: 0 }]}>
                <FontAwesome name="users" size={20} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Referral Code</Text>
                <TextInput style={styles.textInput}
                  ref={(input) => { this.focusReferral = input; }}

                  placeholder={'Referral Code'}
                  underlineColorAndroid='transparent'
                  secureTextEntry

                />
              </View>
              <TouchableOpacity activeOpacity={0.7} style={[styles.fullWidthButton, styles.redBackground]}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ImageBackground>
      </KeyboardAvoidingView>

    </ScrollView>
    )
  }
}

export default Register;
