import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	textStyle: {
		color: '$white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
  cartHeader: {
    height: 40,
    paddingVertical: 10,
    // flexDirection: 'row',
    backgroundColor: '$black',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  cartCard: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '$white',
    elevation: 2,
    padding: 7
  },

  cartItemImage: {
    width: 150,
    height: 120
  },
  priceBoldFont: {
    fontWeight: '500',
    fontSize: 14,
		color: '$orangeTheme',
  },
	lightPriceBoldFont: {
		fontWeight: '500',
		fontSize: 13,
		color: '$darkGrey',
	},
  foodName: {
    fontWeight: '500',
    fontSize: 15
  },
  removeButton: {
    backgroundColor: '$orangeTheme',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
		paddingHorizontal: 7
  },
  buyButton: {
    backgroundColor: '$orangeTheme',
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 10
  },
	checkoutButton: {
		backgroundColor: '$orangeTheme',
		width: 120,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		flexDirection: 'row',
		position: 'absolute',
		bottom: 30,
		right: 30,
		elevation: 5
	}
});

export default styles;
