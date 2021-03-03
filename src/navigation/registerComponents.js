import registerWithProvider from './registerWithProvider';
import CharacterList from 'screens/CharacterList';
import CharacterPage from 'screens/CharacterPage';
import MarvelLogo from 'screens/IconScreens/MarvelLogo';

function registerComponents(store) {
  registerWithProvider('CharacterList', CharacterList, store);
  registerWithProvider('CharacterPage', CharacterPage, store);
  registerWithProvider('MarvelLogo', MarvelLogo, store);
}

export default registerComponents;
