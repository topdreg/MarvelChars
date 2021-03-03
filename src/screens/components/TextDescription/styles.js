import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
  },
  filler: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '30%',
  },
  container: {
    width: Dimensions.get('window').width,
    borderRadius: 20,
    padding: '7%',
    marginTop: 20,
  },
  header: {
    padding: '2%',
    fontWeight: '800',
  },
  body: {
    padding: '2%',
    fontWeight: '300',
  },
});
