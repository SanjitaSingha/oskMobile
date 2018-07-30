import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$black'
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
    backgroundColor: '$orangeTheme',
    width: 100,
    height: 30,
    marginTop: 5
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '$lightBlack',
    padding: 7,
    elevation: 2,
    alignItems: 'center'
  },
  inputField: {
    height: 40,
    borderWidth: 0.5,
    borderColor: '$grey',
    width: '100%',
    padding: 7,
    marginTop: 15,
    marginBottom: 10
  },
  textStyle: {
    color: '$white',
    fontSize: 15
  },
  modalContainer: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalInputCard: {
    padding: 15,
    backgroundColor: '$white'
  }
});

export default styles;
