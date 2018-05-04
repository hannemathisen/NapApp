import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 30,
  },
  addressInput: {
    fontSize: 16,
    height: 45,
    width: 250,
    backgroundColor: '#EEE',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
  },
});
