import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Login';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const remote = 'http://www.mobileswall.com/wp-content/uploads/2015/03/640-food-cookies-cream-dessert-l.jpg';
const { height, width } = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width,
      height,
    };
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   console.log('Layout', e, layout);
   this.setState({ width: layout.width, height: layout.height });
  }
  render() {
    return (
      <ScrollView onLayout={this._onLayoutDidChange}
      >
      <ImageBackground
        style={{ width: this.state.width, height: this.state.height <= 360 ? '100%': this.state.height }}
        source={{ uri: remote }}>
        <View style={styles.container}>
          <View>
            <View style={{ alignItems: 'center', marginBottom: 15  }}>
              <Image source={require('../constants/images/logoBackTrans.png')} style={{ width: 100, height: 100 }}/>
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome name="phone" size={20} color="red" />
              <Text style={styles.loginLabel}>Username</Text>
              <TextInput style={styles.textInput}
                placeholder={'Phone Number'}
                underlineColorAndroid='transparent'
                keyboardType={'numeric'}
              />
            </View>
            <View style={[styles.inputContainer, { borderTopWidth: 1 }]}>
              <FontAwesome name="lock" size={20} color="red" />
              <Text style={styles.loginLabel}>Password</Text>
              <TextInput style={styles.textInput}
                placeholder={'Case Sensitive'}
                underlineColorAndroid='transparent'
                secureTextEntry

              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('forgotPassword') }
              activeOpacity={0.7} style={{ marginVertical: 10 }}>
              <Text style={{ color: '#fff' }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('home') }
              activeOpacity={0.7} style={[styles.fullWidthButton, styles.yellowBackground]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate('register') }
              style={[styles.fullWidthButton, styles.redBackground]}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </ScrollView>
    )
  }
}


export default Login;
