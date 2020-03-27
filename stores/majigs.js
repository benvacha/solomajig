/* Copyright (C) 2020 AbleChart LLC *//*
/* /**/
import Axios from 'axios';

const state = {
  all: [],
  filter: '-updated',
  keyword: undefined,
};

const getters = {};

const mutations = {
  set (state, data) {
    state.all = data.majigs;
  },
  filter (state, data) {
    state.filter = data.filter
      || '-updated';
  },
  keyword (state, data) {
    state.keyword = data.keyword
      || undefined;
  },
  clear (state, data) {
    state.all = [];
  }
};

const actions = {
  async load ({commit, state}, inputs) {
    return Axios.get('/apis/majigs', {
      params: {
        keyword: inputs.keyword,
        filter: inputs.filter,
      },
    }).then((response) => {
      commit('set', {
        majigs: response.data.data,
      });
      commit('filter', {
        filter: inputs.filter,
      });
      commit('keyword', {
        keyword: inputs.keyword,
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
        filter: inputs.filter,
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
  async add ({commit, state}, inputs) {
    return Axios.post('/apis/majigs', {
      markdown: inputs.markdown,
      keyword: state.keyword,
      filter: state.filter,
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
  async update ({commit, state}, inputs) {
    return Axios.put('/apis/majigs/'
      + inputs.majigId, {
      markdown: inputs.markdown,
      keyword: state.keyword,
      filter: state.filter,
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
  async publish ({commit}, inputs) {
    return Axios.put('/apis/majigs/'
      + inputs.majigId + '/published', {
      keyword: state.keyword,
      filter: state.filter,
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
  async unpublish ({commit}, inputs) {
    return Axios.put('/apis/majigs/'
      + inputs.majigId + '/unpublished', {
      keyword: state.keyword,
      filter: state.filter,
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
  async remove ({commit, filter}, inputs) {
    return Axios.delete('/apis/majigs/'
      + inputs.majigId, {
      params: {
        keyword: state.keyword,
        filter: state.filter,
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
  async clear ({commit}, inputs) {
    commit('clear', inputs);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
