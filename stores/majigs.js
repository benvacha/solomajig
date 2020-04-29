/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Axios from 'axios';
/* */
const ClientErrors = [{
  title: 'client error'
}];

/*
/* */
const state = {
  all: [],
  count: 0
};

/*
/* */

const getters = {};

/*
/* */

const mutations = {
  set (state, data) {
    state.count = data.count;
    state.all = data.majigs;
  },
  update (state, data) {
    const i = state.all.findIndex((majig) => {
      return majig.id == data.majig.id;
    });
    state.all.splice(i, 1, data.majig);
  },
  remove (state, data) {
    const i = state.all.findIndex((majig) => {
      return majig.id == data.majig.id;
    });
    state.all.splice(i, 1);
  },
  clear (state, data) {
    state.count = 0;
    state.all = [];
  }
};

/*
/* */

const actions = {
  async load ({ commit, state }, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        flags: inputs.flags,
        filter: inputs.filter,
        limit: inputs.limit,
        skip: inputs.skip
      }
    }).then((response) => {
      commit('set', {
        count: response.data.data.count,
        majigs: response.data.data.majigs
      });
      return response.data.data;
    }).catch((error) => {
      if (error.response) {
        throw error.response.data.errors;
      } else {
        throw ClientErrors;
      }
    });
  },
  async search ({ commit, state }, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        terms: inputs.terms,
        limit: inputs.limit
      }
    }).then((response) => {
      return response.data.data.majigs;
    }).catch((error) => {
      if (error.response) {
        throw error.response.data.errors;
      } else {
        throw ClientErrors;
      }
    });
  },
  async update ({ commit }, inputs) {
    return Axios.put('/apis/majig/' +
      inputs.majigId, {
      path: inputs.path,
      tags: inputs.tags,
      markdown: inputs.markdown,
      published: inputs.published
    }).then((response) => {
      commit('update', {
        majig: response.data.data
      });
      return response.data.data;
    }).catch((error) => {
      if (error.response) {
        throw error.response.data.errors;
      } else {
        throw ClientErrors;
      }
    });
  },
  async remove ({ commit }, inputs) {
    return Axios.delete('/apis/majig/' +
      inputs.majigId, {
    }).then((response) => {
      commit('remove', {
        majig: response.data.data
      });
      return response.data.data;
    }).catch((error) => {
      if (error.response) {
        throw error.response.data.errors;
      } else {
        throw ClientErrors;
      }
    });
  },
  async clear ({ commit }, inputs) {
    commit('clear', inputs);
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
