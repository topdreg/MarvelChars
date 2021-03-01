import {Navigation} from 'react-native-navigation';
import CharacterList from 'screens/CharacterList';
import CharacterPage from 'screens/CharacterPage';
import MarvelLogo from 'screens/IconScreens/MarvelLogo';

function registerComponents() {
  Navigation.registerComponent('CharacterList', () => CharacterList);
  Navigation.registerComponent('CharacterPage', () => CharacterPage);
  Navigation.registerComponent('MarvelLogo', () => MarvelLogo);
}

export default registerComponents;
