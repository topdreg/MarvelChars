import cryptoJS from 'crypto-js';
import Config from 'react-native-config';
import {useState, useEffect} from 'react';

function useFetchMarvelCharacters() {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const ts = new Date().getTime();
      const hash = cryptoJS.MD5(
        ts + Config.MARVEL_PRIVATE_KEY + Config.MARVEL_PUBLIC_KEY,
      );
      let response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${Config.MARVEL_PUBLIC_KEY}&hash=${hash}&offset=${offset}&limit=15`,
      );
      response = await response.json();
      const newCharacters = response?.data?.results;
      if (newCharacters !== undefined) {
        setCharacters((oldCharacters) => {
          if (offset === 0) {
            return newCharacters;
          } else {
            return [...oldCharacters, ...newCharacters];
          }
        });
      }
    };
    fetchAPI();
  }, [offset]);

  const fetchMoreCharacters = () => setOffset(offset + 15);

  const onRefresh = () => {
    setRefreshing(true);
    setOffset(0);
    setRefreshing(false);
  };

  return {characters, fetchMoreCharacters, refreshing, onRefresh};
}

export default useFetchMarvelCharacters;
