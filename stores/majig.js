/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Axios from 'axios';

/*
/* */

const state = {
  all: {},
};

/*
/* */

const getters = {
};

/*
/* */

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

/*
/* */

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
      tags: inputs.tags,
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
    return Axios.put('/apis/majig/'
      + inputs.majigId, {
      path: inputs.path,
      tags: inputs.tags,
      markdown: inputs.markdown,
      published: inputs.published,
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

/*
/* */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
