import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  scrollView: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  name: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 50,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  header: {
    marginBottom: 25,
    fontWeight: 'bold',
  },
  seriesContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  series: {
    width: '100%',
  },
  seriesItem: {
    marginBottom: 10,
  },
});
