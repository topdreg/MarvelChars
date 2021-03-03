import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import characterDataReducer from './characterData/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const characterDataPersistConfig = {
  key: 'characterData',
  storage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  characterData: persistReducer(
    characterDataPersistConfig,
    characterDataReducer,
  ),
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const configureStore = () =>
  createStore(persistedReducer, applyMiddleware(thunk));

export default configureStore;
