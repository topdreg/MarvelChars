import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    height: 60,
    width: 60,
  },
  container: {
    ...Platform.select({
      android: {
        marginTop: 10,
      },
    }),
    bottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
