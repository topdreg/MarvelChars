import cryptoJS from 'crypto-js';
import Config from 'react-native-config';
import {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setOffset,
  addCharacters,
  resetCharacterData,
} from 'redux/characterData/actions';

function useFetchMarvelCharacters() {
  const [refreshing, setRefreshing] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch();
  const offset = useSelector((state) => state?.characterData?.offset);
  const characters = useSelector((state) => state?.characterData?.characters);

  const fetchMoreCharacters = useCallback(async () => {
    if (fetching === true) {
      return;
    }
    try {
      setFetching(true);
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
      if (newCharacters !== undefined) {
        // Add characters and increase offset by 15 for the next API call
        dispatch(setOffset(offset + 15));
        dispatch(addCharacters([...characters, ...newCharacters]));
      }
      // We can be certain the API is working here
      setApiError(false);
      setFetching(false);
    } catch (e) {
      console.error(e);
      setApiError(true);
      setFetching(false);
    }
  }, [dispatch, offset, fetching, characters]);

  useEffect(() => {
    // Deals with the case where the app has either just loaded or been refreshed
    if (characters.length === 0) {
      fetchMoreCharacters();
    }
  }, [characters, fetchMoreCharacters]);

  const onRefresh = () => {
    if (fetching === false) {
      setRefreshing(true);
      dispatch(resetCharacterData());
      setRefreshing(false);
    }
  };

  return {
    characters,
    fetchMoreCharacters,
    refreshing,
    onRefresh,
    apiError,
    fetching,
    setFetching,
  };
}

export default useFetchMarvelCharacters;
