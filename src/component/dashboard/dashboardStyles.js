import { StyleSheet, Dimensions } from 'react-native';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  content: {
    margin:5
  },
  logo: {
    width:120,
    height:120,
    alignItems: 'stretch',
    flexGrow: 1,
    resizeMode:'contain',
    justifyContent: 'center',
  },
  view: {
    height: 200,
    padding:5
  },
  cardView: {
    height: 100,
    padding: 10,
    flex: 1
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
