import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$black'
  },
  searchBarContainer: {
    backgroundColor: '$grey',
    height: 50,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foodListCard: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '$lightBlack'
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  foodName: {
    color: '$white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
