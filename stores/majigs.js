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
  async load ({commit}, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        keyword: inputs.keyword,
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
  async add ({commit}, inputs) {
    return Axios.post('/apis/majigs', {
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
  async update ({commit}, inputs) {
    return Axios.put('/apis/majigs/'
      + inputs.majigId, {
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
  async remove ({commit}, inputs) {
    return Axios.delete('/apis/majigs/'
      + inputs.majigId, {
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
