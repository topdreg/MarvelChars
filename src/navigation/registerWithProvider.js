import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

// Wrap every component with a Provider so that each component has access to the Redux store
const registerWithProvider = (containerName, Component, store) => {
  const WrappedComponent = (props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };

  Navigation.registerComponent(containerName, () => WrappedComponent);
};

export default registerWithProvider;
