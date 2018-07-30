import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView, TextInput,
   TouchableOpacity, Image, KeyboardAvoidingView, Keyboard, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
    this.logoStyle = new Animated.Value(120);
  }

  componentDidMount() {
    console.log('Component did mount');
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
  }

  componentWillUnmount() {
    console.log('Component will mount');
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardHide = () => {
    console.log('Keyboard hide');
    Animated.timing(this.logoStyle, {
      toValue: 120,
      duration: 250
    }).start();
  }

  keyboardShow = () => {
    console.log('Keyboard Show');
    Animated.timing(this.logoStyle, {
      toValue: 10,
      duration: 250
    }).start();
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   console.log('Layout', e, layout);
   this.setState({ width: layout.width, height: layout.height });
  }
  render() {
    const logoStyle = [
      styles.logoStyle,
        { marginTop: this.logoStyle },

    ];
    return (
      <KeyboardAvoidingView>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
      >
      <ImageBackground
        style={{ width: this.state.width, height: this.state.height <= 360 ? '100%': this.state.height }}
        source={{ uri: remote }}>
        <View style={styles.container}>
          <View>
            <View style={{ alignItems: 'center', marginBottom: 15  }}>
              <Animated.Image resizeMode='contain' source={require('../constants/images/logoBackTrans.png')} style={logoStyle}/>
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome name="phone" size={20} color={EStyleSheet.value('$red')} />
              <Text style={styles.loginLabel}>Username</Text>
              <TextInput style={styles.textInput}
                ref={input => { this.focusUserName = input; }}
                placeholder={'Phone Number'}
                underlineColorAndroid='transparent'
                keyboardType={'numeric'}
                returnKeyType='next'
                onSubmitEditing={() => this.focusPassword.focus()}
              />
            </View>
            <View style={[styles.inputContainer, { borderTopWidth: 1 }]}>
              <FontAwesome name="lock" size={20} color={EStyleSheet.value('$red')} />
              <Text style={styles.loginLabel}>Password</Text>
              <TextInput style={styles.textInput}
                ref={input => { this.focusPassword = input; }}
                placeholder={'Case Sensitive'}
                underlineColorAndroid='transparent'
                secureTextEntry

              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('forgotPassword') }
              activeOpacity={0.7} style={{ marginVertical: 10 }}>
              <Text style={{ color: EStyleSheet.value('$white') }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('locationList') }
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
      </KeyboardAvoidingView>
    )
  }
}


export default Login;
