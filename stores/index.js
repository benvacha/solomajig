/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex/dist/vuex.js';
import Token from 'stores/token.js';
/* */
Vue.use(Vuex);

/*
/* */
export default new Vuex.Store({
  modules: {
    token: Token,
  },
});
