/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex/dist/vuex.js';
import Majig from 'stores/majig.js';
import Majigs from 'stores/majigs.js';
import Token from 'stores/token.js';
import Utils from 'stores/utils.js';
/* */
Vue.use(Vuex);

/*
/* */
export default new Vuex.Store({
  modules: {
    majig: Majig,
    majigs: Majigs,
    token: Token,
    utils: Utils
  }
});
