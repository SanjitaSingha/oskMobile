import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  searchBarContainer: {
    backgroundColor: '#DBDCE0',
    height: 50,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foodListCard: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#131313'
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  foodName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
