/* Copyright (C) 2020 AbleChart LLC *//*
/* /**/
import Axios from 'axios';

const state = {
  all: {},
};

const getters = {
};

const mutations = {
  majig (state, data) {
    state.all[data.id] = data;
    state.all[data.path] = data;
    state.all = {...state.all};
  },
  remove (state, data) {
    delete state.all[data.id];
    delete state.all[data.path];
    state.all = {...state.all};
  },
  clear (state, data) {
    state.all = {};
  },
};

const actions = {
  async load ({commit}, inputs) {
    return Axios.get('/apis/majig', {
      params: {
        majigId: inputs.majigId,
        path: inputs.path,
      },
    }).then((response) => {
      commit('majig', response.data.data);
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
    return Axios.post('/apis/majig', {
      path: inputs.path,
      markdown: inputs.markdown,
    }).then((response) => {
      commit('majig', response.data.data);
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
    return Axios.put(inputs.majigId
      ? '/apis/majig/' + inputs.majigId
      : '/apis/majig', {
      path: inputs.path,
      markdown: inputs.markdown,
    }).then((response) => {
      commit('majig', response.data.data);
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
    return Axios.put('/apis/majig/'
      + inputs.majigId + '/published', {
    }).then((response) => {
      commit('majig', response.data.data);
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
    return Axios.put('/apis/majig/'
      + inputs.majigId + '/unpublished', {
    }).then((response) => {
      commit('majig', response.data.data);
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
    return Axios.delete('/apis/majig/'
      + inputs.majigId, {
    }).then((response) => {
      commit('remove', response.data.data);
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
