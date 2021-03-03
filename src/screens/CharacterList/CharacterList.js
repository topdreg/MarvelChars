import React from 'react';
import {SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native';
import CharacterRow from './components/CharacterRow';
import useFetchMarvelCharacters from './hooks/use-fetch-marvel-characters';
import BigTextDescription from 'screens/components/BigTextDescription';
import styles from './styles';

const CharacterList = (props) => {
  const {
    characters,
    fetchMoreCharacters,
    refreshing,
    onRefresh,
    apiError,
    fetching,
  } = useFetchMarvelCharacters();

  if (apiError === true && characters.length === 0) {
    return (
      <BigTextDescription
        header="Error!"
        body="Data service is currently down. Please try again soon!"
      />
    );
  }

  const renderItem = ({item, item: {name, thumbnail}}) => {
    // Check to see that the image string leads to an image
    const hasImage = thumbnail?.path?.match('image_not_available') === null;
    // Only render row if there is a name and image
    if (
      name &&
      name !== '' &&
      thumbnail?.path !== undefined &&
      thumbnail?.path !== '' &&
      hasImage === true
    ) {
      return (
        <CharacterRow characterData={item} componentId={props.componentId} />
      );
    } else {
      return <View />;
    }
  };

  return (
    <SafeAreaView>
      {characters.length === 0 && fetching === true && (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.9}
        onEndReached={() => {
          if (fetching === false) {
            fetchMoreCharacters();
          }
        }}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={() => <ActivityIndicator />}
      />
    </SafeAreaView>
  );
};

export default CharacterList;
