import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    height: 40,
    width: 140
  },
  profileSubmitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#FDA400',
    width: 100,
    height: 30,
    marginTop: 5
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#131313',
    padding: 7,
    elevation: 2
  },
  inputField: {
    height: 40,
    borderWidth: 0.5,
    borderColor: '#DBDCE0',
    width: '100%',
    padding: 7,
    marginTop: 15,
    marginBottom: 10
  },
  textStyle: {
    color: 'white',
    fontSize: 15
  },
  modalContainer: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    flex: 1,
    justifyContent: 'flex-end'
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalInputCard: {
    padding: 15,
    backgroundColor: 'white'
  }
});

export default styles;
