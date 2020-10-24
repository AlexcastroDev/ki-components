import './src/styles/global.scss';

import Avatar from './src/components/Avatar';
import Icon from './src/components/Icon';
import Loading from './src/components/Loading';
import Spinner from './src/components/Spinner';
import NavBar from './src/components/NavBar';
import Profile from './src/components/Profile';

export default {
  install(Vue) {
    Vue.component('Avatar', Avatar);
    Vue.component('Icon', Icon);
    Vue.component('Loading', Loading);
    Vue.component('NavBar', NavBar);
    Vue.component('Spinner', Spinner);
    Vue.component('Profile', Profile);
  },
};

export { Avatar, Icon, Loading, Spinner, Profile };
