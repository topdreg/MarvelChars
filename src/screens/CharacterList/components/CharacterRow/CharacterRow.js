import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CharacterRow = (props) => {
  const {characterData, style} = props;
  const {name, thumbnail} = characterData;
  const imageUri = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity
        style={styles.pressable}
        onPress={() => toCharacterPage(props, imageUri)}>
        <Text>{name}</Text>
        <Image style={styles.image} source={{uri: imageUri}} />
      </TouchableOpacity>
    </View>
  );
};

const toCharacterPage = async (props, imageUri) => {
  const {characterData, componentId} = props;
  await Navigation.push(componentId, {
    component: {
      name: 'CharacterPage',
      passProps: {
        characterData,
        imageUri,
      },
    },
  });
};

export default CharacterRow;
