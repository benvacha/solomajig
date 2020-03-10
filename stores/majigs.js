/* Copyright (C) 2020 AbleChart LLC *//*
/* /**/
import Axios from 'axios';

const state = {
  all: [],
};

const getters = {};

const mutations = {
  set (state, data) {
    state.all = data.majigs;
  },
};

const actions = {
  async add ({commit}, inputs) {
    return Axios.post('/apis/majigs', {
      path: inputs.path,
      markdown: inputs.markdown,
    }).then((response) => {
      commit('set', {
        majigs: response.data.data
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
  async load ({commit}, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        path: inputs.path,
      },
    }).then((response) => {
      commit('set', {
        majigs: response.data.data
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
