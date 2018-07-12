import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
	underlineStyle: {
		backgroundColor: '#FDA400'
	},
	tabBar: {
		backgroundColor: '#131313'
	},
	contentContainer: {
		flex: 1,
		marginTop: 157
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		backgroundColor: '#0a0a0a'
	},
	swiper: {
		// position: 'absolute',
		// flex: 1
	},
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		flex: 1,
		position: 'absolute',
		top: 200,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1,
		paddingTop: 40
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardTagline: {
		color: 'white',
		fontSize: 15
	},
  foodType: {
    color: 'white',
    fontSize: 13
  },
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		textAlign: 'left',
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
  buyButton: {
    backgroundColor: '#FDA400',
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 10
  }
});

export default styles;
