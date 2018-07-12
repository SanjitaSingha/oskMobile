import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardContainer: {
		height: 231,
		width: 160,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 3
	},
	cardImage: {
		width: 160,
		height: 184,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3
	},
	cardTitleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardTitle: {
		color: 'black',
		fontSize: 13,
		fontWeight: '500',
		textAlign: 'center',
		paddingHorizontal: 1
	}
});

export default styles;
