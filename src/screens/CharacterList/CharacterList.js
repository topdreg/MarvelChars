import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import CharacterRow from './components/CharacterRow';
import useFetchMarvelCharacters from './hooks/use-fetch-marvel-characters';

const CharacterList = (props) => {
  console.log('weeee');
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
    <SafeAreaView>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.9}
        onEndReached={fetchMoreCharacters}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

export default CharacterList;
