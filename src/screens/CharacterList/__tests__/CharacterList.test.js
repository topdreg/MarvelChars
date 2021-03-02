import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import CharacterList from '../CharacterList';

it('renders correctly', () => {
  const tree = renderer.create(<CharacterList />).toJSON();
  expect(tree).toMatchSnapshot();
});
