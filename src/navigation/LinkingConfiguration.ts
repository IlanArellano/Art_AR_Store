import {LinkingOptions} from '@react-navigation/native';

import {Screens} from '@app/types/navigation';

const linking: LinkingOptions<Screens> = {
  prefixes: ['/'],
  config: {
    screens: {
      Login: 'login',
      Home: 'home',
      Test: 'test',
      NotFound: '*',
    },
  },
};

export default linking;
