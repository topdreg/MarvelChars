import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import CharacterPage from '../CharacterPage';

it('renders correctly with data', () => {
  const characterData = {
    name: 'A-Bomb',
    description: 'An awesome buddy!',
    series: {
      items: [
        {
          name: 'Comic 1!',
        },
        {
          name: 'Comic 2!',
        },
      ],
    },
  };
  const imageUri =
    'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg';
  const tree = renderer
    .create(<CharacterPage characterData={characterData} imageUri={imageUri} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
