import Vue from "vue";
import Vuex from "vuex";

import AppModule from "./modules/AppModule";
import UsersModule from "./modules/UsersModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AppModule,
    UsersModule
  }
});

export default store;
