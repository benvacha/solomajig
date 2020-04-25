/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Index
  from 'views/utils/index.vue';

/*
/* */

const state = {
  status: '',
  util: Index,
  opened: false,
  stuck: false
};

/*
/* */

const getters = {
};

/*
/* */

const mutations = {
  status (state, data) {
    state.status = data;
  },
  util (state, data) {
    state.util = data;
  },
  opened (state, data) {
    state.opened = data;
  },
  stuck (state, data) {
    state.stuck = data;
  }
};

/*
/* */

const actions = {
  async notify ({ commit }, inputs) {
    commit('status', inputs.status);
  },
  async open ({ commit, state }, inputs) {
    commit('status', '');
    if (!inputs.util || (state.opened &&
      state.util === inputs.util)) {
      commit('opened', false);
      commit('stuck', false);
      commit('util', Index);
    } else {
      commit('opened', true);
      commit('stuck', true);
      commit('util', inputs.util);
    }
  },
  async stash ({ commit }, inputs) {
    commit('status', '');
    commit('opened', false);
    commit('stuck', true);
  },
  async close ({ commit }, inputs) {
    commit('status', '');
    commit('opened', false);
    commit('stuck', false);
    commit('util', Index);
  }
};

/*
/* */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
