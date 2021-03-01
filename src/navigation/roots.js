import {Navigation} from 'react-native-navigation';

function setSplash() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'CharacterList',
            },
          },
        ],
      },
    },
  });
}

export {setSplash};
