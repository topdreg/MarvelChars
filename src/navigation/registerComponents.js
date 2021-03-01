import {Navigation} from 'react-native-navigation';
import CharacterList from 'screens/CharacterList';

function registerComponents() {
  Navigation.registerComponent('CharacterList', () => CharacterList);
}

export default registerComponents;
