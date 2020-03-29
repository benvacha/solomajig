/* Copyright (C) 2020 AbleChart LLC *//*
/* /**/
import Axios from 'axios';

const state = {
  all: [],
  filter: '-updated',
  flags: undefined,
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
  flags (state, data) {
    state.flags = data.flags
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
        flags: inputs.flags,
        filter: inputs.filter,
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
  async add ({commit, state}, inputs) {
    return Axios.post('/apis/majigs', {
      tags: inputs.tags,
      markdown: inputs.markdown,
      flags: state.flags,
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
      tags: inputs.tags,
      markdown: inputs.markdown,
      flags: state.flags,
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
      flags: state.flags,
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
      flags: state.flags,
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
        flags: state.flags,
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
