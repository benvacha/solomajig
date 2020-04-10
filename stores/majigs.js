/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Axios from 'axios';

/*
/* */
const state = {
  all: [],
  filter: '-updated',
  flags: undefined,
};

/*
/* */

const getters = {};

/*
/* */

const mutations = {
  set (state, data) {
    state.all = data.majigs;
  },
  filter (state, data) {
    state.filter = data.filter
      || '-updated';
  },
  flags (state, data) {
    state.flags = data.flags
      || undefined;
  },
  clear (state, data) {
    state.all = [];
  }
};

/*
/* */

const actions = {
  async load ({commit, state}, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        flags: inputs.flags,
        filter: inputs.filter,
        limit: inputs.limit,
        skip: inputs.skip,
      },
    }).then((response) => {
      commit('set', {
        majigs: response.data.data,
      });
      commit('filter', {
        filter: inputs.filter,
      });
      commit('flags', {
        flags: inputs.flags,
      });
      return response.data.data;
    }).catch((error) => {
      if(error.response) {
        throw error.response.data.errors;
      } else {
        throw [{title:'client error'}];
      }
    });
  },
  async search ({commit, state}, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        keyword: inputs.keyword,
      },
    }).then((response) => {
      return response.data.data;
    }).catch((error) => {
      if(error.response) {
        throw error.response.data.errors;
      } else {
        throw [{title:'client error'}];
      }
    });
  },
  async clear ({commit}, inputs) {
    commit('clear', inputs);
  },
};

/*
/* */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
