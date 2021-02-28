import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import CharacterRow from './components/CharacterRow';
import cryptoJS from 'crypto-js';

const API_KEY = '0a4ca65bd3f729f67781b3d87da4c85a';
const private_key = 'a04def0fac3538c7c3622f6a82d82314b1785cd1';

const CharacterList = (props) => {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMore = useCallback(() => setOffset(offset + 15), [offset]);

  useEffect(() => {
    const fetchAPI = async () => {
      const ts = new Date().getTime();
      const hash = cryptoJS.MD5(ts + private_key + API_KEY);
      let response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}&offset=${offset}&limit=15`,
      );
      response = await response.json();
      if (response?.data?.results !== undefined) {
        setCharacters((oldCharacters) => {
          if (offset === 0) {
            return response.data.results;
          } else {
            return [...oldCharacters, ...response.data.results];
          }
        });
      }
    };
    fetchAPI();
  }, [offset]);

  const renderItem = ({item: {name, thumbnail}}) => (
    <CharacterRow name={name} thumbnail={thumbnail} />
  );

  const onRefresh = () => {
    setRefreshing(true);
    setOffset(0);
    setRefreshing(false);
  };

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={1}
        onEndReached={fetchMore}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default CharacterList;
