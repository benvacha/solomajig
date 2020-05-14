/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Index
  from 'views/widgets/index.vue';

/*
/* */

const state = {
  status: '',
  widget: Index,
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
  widget (state, data) {
    state.widget = data;
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
    if (!inputs.widget || (state.opened &&
      state.widget === inputs.widget)) {
      commit('opened', false);
      commit('stuck', false);
      commit('widget', Index);
    } else {
      commit('opened', true);
      commit('stuck', true);
      commit('widget', inputs.widget);
    }
  },
  async stash ({ commit, state }, inputs) {
    commit('status', '');
    if (state.opened || state.stuck) {
      commit('stuck', true);
    } else {
      commit('stuck', false);
    }
    commit('opened', false);
  },
  async close ({ commit }, inputs) {
    commit('status', '');
    commit('opened', false);
    commit('stuck', false);
    commit('widget', Index);
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
