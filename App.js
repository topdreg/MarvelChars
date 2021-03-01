import React from 'react';
import {SafeAreaView} from 'react-native';
import CharacterList from './src/screens/CharacterList';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <CharacterList />
    </SafeAreaView>
  );
};

export default App;
