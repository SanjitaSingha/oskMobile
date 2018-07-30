import { Platform, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	container: {
		backgroundColor: '$black',
    // padding: 15,
    // color: '#fff',
		// ...Platform.select({
		// 	ios: {
		// 		paddingTop: 83
		// 	}
		// })
	},
  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    height: 248,
    position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center'
  },

  listHeading: {
  paddingHorizontal: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15,
  marginTop: 30
},
listHeadingLeft: {
  color: '$white',
  fontWeight: 'bold',
  fontSize: 18
},
listHeadingRight: {
  color: '$white',
  ...Platform.select({
    ios: {
      fontSize: 15
    },
    android: {
      fontSize: 16
    }
  })
},
browseList: {
  marginTop: 30,
  paddingHorizontal: 16,
  ...Platform.select({
    ios: {
      marginBottom: 60
    },
    android: {
      marginBottom: 30
    }
  })
},
viewDetails: {
	borderColor: '$red',
	borderWidth: 1,
	borderRadius: 3,
	justifyContent: 'center',
	alignItems: 'center',
	width: 100,
	height: 35,
},
viewDetailsButtonText: {
	color: '$white',
	fontWeight: '600'
}
});

export default styles;
