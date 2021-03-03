// import storage from '@react-native-async-storage/async-storage';
import {ADD_CHARACTERS, SET_OFFSET, RESET_REDUCER} from './types';

export const addCharacters = (characters) => {
  return {
    type: ADD_CHARACTERS,
    characters,
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
