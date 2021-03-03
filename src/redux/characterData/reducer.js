import {ADD_CHARACTERS, SET_OFFSET, RESET_REDUCER} from './types';

const initialState = {
  characters: [],
  offset: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.offset,
      };
    case RESET_REDUCER:
      return {
        characters: [],
        offset: 0,
      };
    default:
      return state;
  }
};

export default reducer;
