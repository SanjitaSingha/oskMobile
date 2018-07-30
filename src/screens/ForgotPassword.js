import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions , TextInput,
   TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/Login';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const remote = 'http://www.mobileswall.com/wp-content/uploads/2015/03/640-food-cookies-cream-dessert-l.jpg';
const { height, width } = Dimensions.get('window');

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width,
      height,
    };
    this.logoStyle = new Animated.Value(0)
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardShow = () => {
    Animated.timing(this.logoStyle, {
      toValue: 300,
      duration: 250
    }).start();
  }

  _keyboardHide = () => {
    Animated.timing(this.logoStyle, {
      toValue: 0,
      duration: 250
    }).start();
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ width: layout.width, height: layout.height });
  }
  render() {
    const logoStyle = [
      styles.logoStyle, {
        marginTop: this.logoStyle
      }
    ];
    return (
      <ScrollView onLayout={this._onLayoutDidChange}>
      <KeyboardAvoidingView behavior="position">

        <ImageBackground
          style={{ width: this.state.width, height: this.state.height <= 360 ? '100%': this.state.height }}

          source={{ uri: remote }}>
          <View  style={[styles.container, { justifyContent: 'center' }]}>
            <View>
              <View style={{ alignItems: 'center', marginBottom: 15  }}>
                <Animated.Image source={require('../constants/images/logoBackTrans.png')} style={logoStyle}/>
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="phone" size={20} color={EStyleSheet.value('$red')} />
                <Text style={styles.loginLabel}>Phone Number</Text>
                <TextInput style={styles.textInput}
                  placeholder={'Registered Mobile Number'}
                  underlineColorAndroid='transparent'
                  inlineImageLeft='search_icon'
                />
              </View>

              <Text style={{ color: EStyleSheet.value('$white'), marginVertical: 15 }}>
                We will send a temporary password to your <Text style={{ color: EStyleSheet.value('$orangeTheme') }}>Registered Mobile Number.</Text>
                You can later change the password in the Profile section.
              </Text>

              <TouchableOpacity activeOpacity={0.7}
                onPress={() => this.props.navigation.navigate('register') }
                style={[styles.fullWidthButton, styles.redBackground]}>
                <Text style={styles.buttonText}>Get Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}


export default ForgotPassword;
