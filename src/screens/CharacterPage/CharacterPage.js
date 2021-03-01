import React from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {getRandom} from 'utilities/arrayOperations';
import styles from './styles';

const CharacterPage = (props) => {
  const {characterData, imageUri} = props;
  const {name, description, series} = characterData;
  // Get a randomized set of 7 elements from the series array, to be displayed in the Flatlist
  let selectedSeries = null;
  // First ensure that we have the series data
  if (series?.items && series.items.length > 0) {
    // Select up to 7 series items
    selectedSeries = getRandom(series.items, Math.min(7, series.items.length));
  }

  // A debate I have is whether to split every section into their own components
  // I do think if I do too much of that, it may obfuscate the code,
  // requiring a developer to dig into different directories.
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.name}>{name}</Text>
        <Image style={styles.image} source={{uri: imageUri}} />
        {description !== (undefined || '') && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.header}>Description</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}
        {selectedSeries !== null && (
          <View style={styles.seriesContainer}>
            <Text style={styles.header}>Series</Text>
            <View style={styles.series}>
              {selectedSeries.map((item, key) => {
                return (
                  <Text style={styles.seriesItem} key={key}>
                    {item.name}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterPage;
