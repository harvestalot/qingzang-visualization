import '@/plugins/axios';

const state = {
  QZBoundary: [],
  QZCity: [],
};

const mutations = {
  SET_QZ_BOUNDARY(state, res) {
    state.QZBoundary = res;
  },
  SET_QZ_CITY(state, res) {
    state.QZCity = res;
  },
};

const actions = {
  set_qz_boundary({ commit }) {
    window.axios
      .get('/mockData/map/thrid_pole_boundary_data.json')
      .then((res) => {
        commit('SET_QZ_BOUNDARY', res);
      });
  },
  set_qz_city({ commit }) {
    window.axios
      .get('/mockData/map/qingzang_prefecture_level_city.json')
      .then((res) => {
        commit('SET_QZ_CITY', res);
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  // getters,
  actions,
};
