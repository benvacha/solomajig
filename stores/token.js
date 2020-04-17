/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Axios from 'axios';
/* */
const ClientErrors = [{
  title: 'client error'
}];
const localStorage = window.localStorage;
const headers = Axios.defaults.headers;

/*
/* */

const state = {
  slug: ''
};

/*
/* */

const getters = {
  signed (state, getters) {
    return Boolean(state.slug);
  }
};

/*
/* */

const mutations = {
  slug (state, data) {
    state.slug = data.slug;
    headers.common['x-token'] = data.slug;
    localStorage.setItem('token/slug',
      JSON.stringify(state.slug));
  },
  clear (state, data) {
    state.slug = '';
    delete headers.common['x-token'];
    localStorage.removeItem('token/slug');
  }
};

/*
/* */

const actions = {
  async sign ({ commit }, inputs) {
    return Axios.put('/apis/token', {
      username: inputs.username,
      password: inputs.password
    }).then((response) => {
      commit('slug', response.data.data);
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

let slug = localStorage.getItem('token/slug');
if (slug) slug = JSON.parse(slug);
if (slug) mutations.slug(state, { slug: slug });

/*
/* */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
