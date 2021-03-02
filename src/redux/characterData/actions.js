import {SET_CHARACTERS, SET_OFFSET, RESET_REDUCER} from './types';

export const setCharacters = (characters) => {
  return {
    type: SET_CHARACTERS,
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
