import Vuex, { StoreOptions } from 'vuex';
import { userModuleName, Users } from '~/store/users'
import { RootState } from './types';

// const store: StoreOptions<RootState> = 
export default new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  modules: {
    [userModuleName]: Users
  }
});