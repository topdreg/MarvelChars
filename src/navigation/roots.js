import {Navigation} from 'react-native-navigation';

function setSplash() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'CharacterList',
              options: {
                topBar: {
                  title: {
                    component: {
                      name: 'MarvelLogo',
                      alignment: 'center',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
}

export {setSplash};
