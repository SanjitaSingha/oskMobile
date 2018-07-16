import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDCE0'
  },
  checkoutHeader: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500'
  },
  checkoutCard: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
    margin: 10
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
  saveButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#FDA400',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 10
  },
  orderDetailsInner: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#DBDCE0',
    height: 30,
    alignItems: 'center'
  },
  orderSummaryText: {
    flex: 1,
  },
  addressListSection: {
    // borderBottomWidth: 0.5,
    // borderColor: '#DBDCE0',
    marginBottom: 10,
    paddingBottom: 10
  },
  applyButton: {
    borderWidth: 1,
    borderColor: '#DBDCE0',
    borderRadius: 3,
    height: 40,
    paddingHorizontal: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    backgroundColor: '#FDA400'
  },
  continueButton: {
    backgroundColor: '#FDA400',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0
  },
});

export default styles;
