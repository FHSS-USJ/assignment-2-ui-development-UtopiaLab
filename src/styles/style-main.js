import {StyleSheet} from 'react-native';

export const main = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },

  dotBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  dotEmpty: {
    height: 15,
    width: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#125969',
    marginLeft: 10,
    marginRight: 10,
  },

  dotFilled: {
    height: 15,
    width: 15,
    backgroundColor: '#125969',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#125969',
    marginLeft: 10,
    marginRight: 10,
  },

  text: {
    marginTop: 20,
  },
});
