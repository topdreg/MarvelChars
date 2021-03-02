import {Navigation} from 'react-native-navigation';
import registerComponents from 'navigation/registerComponents';
import {setSplash} from 'navigation/roots';
import configureStore from './src/redux/configureStore';
import {persistStore} from 'redux-persist';

const store = configureStore();

Navigation.events().registerAppLaunchedListener(() => {
  persistStore(store, null, () => {
    registerComponents(store);
    Navigation.dismissAllModals();
    setSplash();
  });
});
