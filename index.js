import './src/styles/global.scss';

import Avatar from './src/components/Avatar';
import Icon from './src/components/Icon';
import Loading from './src/components/Loading';
import Spinner from './src/components/Spinner';
import NavBar from './src/components/NavBar';
import Profile from './src/components/Profile';

export default {
  install(Vue) {
    Vue.component('Ki-Avatar', Avatar);
    Vue.component('Ki-Icon', Icon);
    Vue.component('Ki-Loading', Loading);
    Vue.component('Ki-NavBar', NavBar);
    Vue.component('Ki-Spinner', Spinner);
    Vue.component('Ki-Profile', Profile);
  },
};

export { Avatar, Icon, Loading, Spinner, Profile };
