import {Navigation} from 'react-native-navigation';
import registerComponents from 'navigation/registerComponents';
import {setSplash} from 'navigation/roots';
import configureStore from './src/redux/configureStore';
import {persistStore} from 'redux-persist';

export const store = configureStore();

registerComponents(store);
Navigation.events().registerAppLaunchedListener(() => {
  persistStore(store, null, () => {
    Navigation.dismissAllModals();
    setSplash();
  });
});
