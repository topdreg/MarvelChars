import {Navigation} from 'react-native-navigation';
import registerComponents from './src/navigation/registerComponents';
import {setSplash} from './src/navigation/roots';

registerComponents();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.dismissAllModals();
  setSplash();
});


// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
