// import storage from '@react-native-async-storage/async-storage';
import {ADD_CHARACTERS, SET_OFFSET, RESET_REDUCER} from './types';
// Implement absolute path for this
import {store} from '../../../index.js';

export const addCharacters = (characters) => {
  const {
    characterData: {characters: oldCharacters},
  } = store.getState();
  return {
    type: ADD_CHARACTERS,
    characters: [...oldCharacters, ...characters],
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    offset,
  };
};

export const resetCharacterData = () => {
  return {
    type: RESET_REDUCER,
  };
};
