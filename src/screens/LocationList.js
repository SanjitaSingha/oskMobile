import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text, Image, Dimensions, TouchableOpacity, RefreshControl, TextInput } from 'react-native';
import styles from '../styles/LocationList';
import { Ionicons, FontAwesome, EvilIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const locationList = [
  {
    location: '6 Mile'
  },
  {
    location: 'A.G Colony'
  },
  {
    location: 'A.G Office'
  },
  {
    location: 'AIDC'
  },
  {
    location: 'ABC'
  },
  {
    location: 'Ajanta Path'
  },
  {
    location: 'Ambari'
  },
  {
    location: 'Jatia'
  },
  {
    location: 'Kahilipara'
  },
  {
    location: 'khanapara'
  },
  {
    location: 'Beltola'
  },
  {
    location: 'Chandmari'
  },
  {
    location: 'Lokhra'
  },
  {
    location: 'Maligaon'
  },
];
class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationList : locationList,
      search_text: ''
    }
  }

  _onLayoutDidChange = (e) => {
   const layout = e.nativeEvent.layout;
   this.setState({ size: { width: layout.width, height: layout.height } });
  }
  renderHeader = () => {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <View style={styles.searchBarContainer}>
          <View style={{ backgroundColor: 'white', padding: 5, width: '100%', flexDirection: 'row' }}>
            <EvilIcons name='search' size={30} color='black' />
            <TextInput
              onChangeText={(t) => this.setState({ search_text: t })}
              underlineColorAndroid='transparent'
              placeholder='Search location..'
              returnKeyType='search'
              style={{ width: '100%' }}
            />
          </View>
        </View>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>We deliver only to the locations from the list. Please select your location.</Text>
        <Image source={require('../constants/images/city.png')} style={{ width: '100%', resizeMode: 'contain' }}/>
      </View>
    )
  }
  render() {
  // if (this.state.search_text === '') {
  //   return <View />;
  // }
  const filteredArray = this.state.locationList.filter((d) => {
    const name = d.location.toLowerCase();
    const search = this.state.search_text.toLowerCase();
    return (name.indexOf(search) > -1);
  });
    return (
      <View style={{ flex: 1, marginTop: 25 }}>

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
        data={filteredArray}
        renderItem={({ item }) =>  (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('home') } style={{ padding: 10, borderBottomWidth: 1, borderColor: '#DBDCE0' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <EvilIcons name='location' size={30} color='#FDA400' />
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        />

      </View>
    )
  }
}

export default LocationList;
