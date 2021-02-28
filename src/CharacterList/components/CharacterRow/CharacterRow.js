import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const CharacterRow = (props) => {
  const {style, thumbnail, name} = props;
  return (
    <View style={[style, styles.container]}>
      <Text>{name}</Text>
    </View>
  );
};

export default CharacterRow;
