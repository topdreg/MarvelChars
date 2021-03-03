import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import CharacterList from '../CharacterList';

it('renders correctly without props', () => {
  const tree = renderer.create(<CharacterList />).toJSON();
  expect(tree).toMatchSnapshot();
});
