import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'flex-start',
    maxWidth: 270,
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
  bottomRowLeft: {
    flex: 1,
    marginLeft: 15,
  },
  bottomRowRight: {
    width: 18,
  },
  number: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
  },
  backspace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    height: 70,
    width: 70,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
});
