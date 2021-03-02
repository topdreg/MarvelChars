import storage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import characterDataReducer from './characterData/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const characterDataPersistConfig = {
  key: 'characterData',
  storage,
};

const reducers = combineReducers({
  characterData: persistReducer(
    characterDataPersistConfig,
    characterDataReducer,
  ),
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const configureStore = () => createStore(persistedReducer);

export default configureStore;
