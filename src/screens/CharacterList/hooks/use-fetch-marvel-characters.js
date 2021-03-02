import cryptoJS from 'crypto-js';
import Config from 'react-native-config';
import {useState, useEffect} from 'react';

function useFetchMarvelCharacters() {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        // Get hash and timestamp to make API call
        const ts = new Date().getTime();
        const hash = cryptoJS.MD5(
          ts + Config.MARVEL_PRIVATE_KEY + Config.MARVEL_PUBLIC_KEY,
        );
        // Call the character list at the specified offset
        let response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${Config.MARVEL_PUBLIC_KEY}&hash=${hash}&offset=${offset}&limit=15`,
        );
        response = await response.json();
        const newCharacters = response?.data?.results;
        // If response includes character data, append to array of characters
        if (newCharacters !== undefined) {
          setCharacters((oldCharacters) => {
            // If an offset of 0 is set, then that means we have refreshed the app
            if (offset === 0) {
              return newCharacters;
            } else {
              return [...oldCharacters, ...newCharacters];
            }
          });
        }
        setApiError(false);
      } catch (e) {
        console.error(e);
        setApiError(true);
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

  return {characters, fetchMoreCharacters, refreshing, onRefresh, apiError};
}

export default useFetchMarvelCharacters;
