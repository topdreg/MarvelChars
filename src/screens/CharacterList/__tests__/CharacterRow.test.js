import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import CharacterRow from '../components/CharacterRow';

it('renders correctly', () => {
  const characterData = {
    name: 'A-Bomb',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
  };
  const tree = renderer
    .create(<CharacterRow characterData={characterData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
