import React from 'react';
import styles from './styles';
import {View, ScrollView, Text} from 'react-native';

/*
 * Component to show a text description across a screen, for example when an error occurs.
 */

const TextDescription = ({header, body}) => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.filler}>
        <View style={styles.container}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TextDescription;
