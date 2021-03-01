import cryptoJS from 'crypto-js';
// import Config from 'react-native-config';
import {useState, useEffect} from 'react';

const MARVEL_PUBLIC_KEY = '0a4ca65bd3f729f67781b3d87da4c85a';
const MARVEL_PRIVATE_KEY = 'a04def0fac3538c7c3622f6a82d82314b1785cd1';

function useFetchMarvelCharacters() {
  const [offset, setOffset] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      const ts = new Date().getTime();
      const hash = cryptoJS.MD5(
        ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY,
      );
      let response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&offset=${offset}&limit=15`,
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
