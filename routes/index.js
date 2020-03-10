/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Majig from 'views/majig.vue';
import Majigs from 'views/majigs.vue';
/* */
Vue.use(VueRouter);
/* */
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Majigs,
    },
    {
      path: '*',
      component: Majig,
    },
  ],
  scrollBehavior (to, from, saved) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (saved) {
      return saved;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
