import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const CharacterRow = (props) => {
  const {character, style} = props;
  console.log(character);
  return (
    <View style={[style, styles.container]}>
      <Text>{name}</Text>
    </View>
  );
};

export default CharacterRow;
