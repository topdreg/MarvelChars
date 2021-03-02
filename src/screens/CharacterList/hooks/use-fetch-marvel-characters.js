import cryptoJS from 'crypto-js';
import Config from 'react-native-config';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setOffset, setCharacters, resetCharacterData} from '../../../redux/characterData/actions';

function useFetchMarvelCharacters() {
  const [refreshing, setRefreshing] = useState(false);
  const [apiError, setApiError] = useState(false);
  const dispatch = useDispatch();
  const offset = useSelector((state) => state?.characterData?.offset);
  const characters = useSelector((state) => state?.characterData?.characters);

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
        console.log("RESPONSE", response);
        const newCharacters = response?.data?.results;
        if (newCharacters !== undefined) {
          if (offset === 0) {
            dispatch(setCharacters(newCharacters));
          } else {
            dispatch(setCharacters([...characters, ...newCharacters]));
          }
        }
        setApiError(false);
      } catch (e) {
        console.error(e);
        setApiError(true);
      }
    };
    fetchAPI();
  }, [offset, characters, dispatch]);

  const fetchMoreCharacters = () => {
    dispatch(setOffset(offset + 15));
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(resetCharacterData());
    setRefreshing(false);
  };

  return {characters, fetchMoreCharacters, refreshing, onRefresh, apiError};
}

export default useFetchMarvelCharacters;
