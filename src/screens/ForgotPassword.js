import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions , TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
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
  }
  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ width: layout.width, height: layout.height });
  }
  render() {
    return (
      <ScrollView onLayout={this._onLayoutDidChange}>
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
                <Text style={styles.loginLabel}>Phone Number</Text>
                <TextInput style={styles.textInput}
                  placeholder={'Registered Mobile Number'}
                  underlineColorAndroid='transparent'
                  inlineImageLeft='search_icon'
                />
              </View>

              <Text style={{ color: 'white', marginVertical: 15 }}>
                We will send a temporary password to your <Text style={{ color: 'yellow' }}>Registered Mobile Number.</Text>
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
      </ScrollView>
    )
  }
}


export default ForgotPassword;