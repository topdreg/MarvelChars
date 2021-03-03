import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getRandom} from 'utilities/arrayOperations';
import TextDescription from 'screens/components/TextDescription';
import styles from './styles';

const CharacterPage = (props) => {
  const {characterData, imageUri} = props;
  const name = characterData?.name;
  const description = characterData?.description;
  const series = characterData?.series;
  // Get a randomized set of 7 elements from the series array, to be displayed in the Flatlist
  let selectedSeries = null;
  // First ensure that we have the series data
  if (series?.items && series.items.length > 0) {
    // Select up to 7 series items
    selectedSeries = getRandom(series.items, Math.min(7, series.items.length));
  }

  if (description === (null || '') && selectedSeries === null) {
    return (
      <TextDescription
        header="Come another time!"
        body="Data is currently not available for this character."
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.name}>{name}</Text>
        <FastImage style={styles.image} source={{uri: imageUri}} />
        {description !== (undefined || '') && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.header}>Description</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}
        {selectedSeries !== null && (
          <View style={styles.seriesContainer}>
            <Text style={styles.header}>Related Series</Text>
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
