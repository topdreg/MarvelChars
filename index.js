import {Navigation} from 'react-native-navigation';
import registerComponents from 'navigation/registerComponents';
import {setSplash} from 'navigation/roots';

registerComponents();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.dismissAllModals();
  setSplash();
});
