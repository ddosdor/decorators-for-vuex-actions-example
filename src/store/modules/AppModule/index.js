import { xor } from "lodash";
import { TOGGLE_PENDING_STORE_ACTIONS } from "./mutations-types";

const INITIAL_STATE = {
  pendingStoreActions: []
};

const mutations = {
  [TOGGLE_PENDING_STORE_ACTIONS](state, payload) {
    const oldStoreActions = state.pendingStoreActions;
    const newStoreActions = xor(oldStoreActions, [payload]);
    state.pendingStoreActions = newStoreActions;
  }
};

const actions = {};

const getters = {
  pendingStoreActions: state => state.pendingStoreActions
};

export default {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters
};
