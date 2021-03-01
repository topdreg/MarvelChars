import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const MarvelLogo = () => (
  <View style={styles.container}>
    <Image
      source={require('assets/marvel.png')}
      style={styles.icon}
      resizeMode="contain"
    />
  </View>
);

export default MarvelLogo;
