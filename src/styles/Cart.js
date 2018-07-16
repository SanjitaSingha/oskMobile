import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
  cartHeader: {
    height: 40,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartCard: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
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
		color: '#FDA400',
  },
	lightPriceBoldFont: {
		fontWeight: '500',
		fontSize: 13,
		color: '#ada8a8',
	},
  foodName: {
    fontWeight: '500',
    fontSize: 15
  },
  removeButton: {
    backgroundColor: '#FDA400',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
		paddingHorizontal: 7
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
