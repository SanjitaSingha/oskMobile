import { Platform, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,.5)',
    padding: 15,
		...Platform.select({
			ios: {
				paddingTop: 83
			}
		})
	},
  inputContainer: {
    borderBottomWidth: 0.5,
    borderColor: '$grey',
    backgroundColor: '$white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 7
  },
  loginLabel: {
    paddingLeft: 7
  },
  fullWidthButton: {
    borderRadius: 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: '$white',
		fontWeight: 'bold'
  },

  yellowBackground: {
    backgroundColor: '$orangeTheme'
  },
  redBackground: {
    backgroundColor: '$red'
  },
	// progressBar: {
	// 	backgroundColor: '#0a0a0a',
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	alignItems: 'center'
	// },
	// seperator: {
	// 	marginTop: 10,
	// 	backgroundColor: '#8E8E8E'
	// },
	logoStyle: {
		width: 110,
		height: 110,
		marginTop: 120
	}
});

export default styles;
