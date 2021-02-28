import React from 'react';
import {View, FlatList} from 'react-native';
import CharacterRow from './components/CharacterRow';
import useFetchMarvelCharacters from './hooks/use-fetch-marvel-characters';

const CharacterList = (props) => {
  const {
    characters,
    fetchMoreCharacters,
    refreshing,
    onRefresh,
  } = useFetchMarvelCharacters();

  const renderItem = ({item: {name, thumbnail}}) => (
    <CharacterRow name={name} thumbnail={thumbnail} />
  );

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={1}
        onEndReached={fetchMoreCharacters}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default CharacterList;
