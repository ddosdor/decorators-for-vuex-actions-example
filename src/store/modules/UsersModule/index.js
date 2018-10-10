import axios from "axios";
import { togglePendingStoreActions } from "./../../../utils/decorators";
import { FILL_USERS_LIST, SET_PAGE } from "./mutations-types";

const INITIAL_STATE = {
  users: [],
  page: 1
};

const mutations = {
  [FILL_USERS_LIST](state, payload) {
    state.users = payload.users;
  },

  [SET_PAGE](state, payload) {
    state.page = payload.page;
  }
};

const actions = {
  @togglePendingStoreActions()
  async getUsers({ state, commit }) {
    const page = state.page;
    const users = (await axios.get(`https://reqres.in/api/users?page=${page}`))
      .data.data;
    commit(FILL_USERS_LIST, { users });
  },

  setPage({ commit, dispatch }, page) {
    commit(SET_PAGE, { page });
    dispatch("getUsers");
  }
};

const getters = {
  users: state => state.users,
  page: state => state.page
};

export default {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters
};
