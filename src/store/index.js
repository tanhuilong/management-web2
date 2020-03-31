import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breadcrumb: ""
  },
  mutations: {
    setBreadcrumb(state, val) {
      state.breadcrumb = val;
    }
  },
  actions: {},
  modules: {}
});
