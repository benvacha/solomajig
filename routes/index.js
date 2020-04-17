/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
const Majig = () =>
  import('views/majig.vue');
const Majigs = () =>
  import('views/majigs.vue');
/* */
Vue.use(VueRouter);

/*
/* */
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'majigs',
      component: Majigs
    },
    {
      path: '//:flags*//:page*',
      name: 'submajig',
      component: Majigs,
      props: (route) => ({
        flags: (!route.params.flags)
          ? [] : route.params.flags
            .split('/').filter(flag => {
              return Boolean(flag);
            }),
        page: parseInt(
          route.params.page) || 0
      })
    },
    {
      path: '//:flags*',
      name: 'subsubmajig',
      component: Majigs,
      props: (route) => ({
        flags: (!route.params.flags)
          ? [] : route.params.flags
            .split('/').filter(flag => {
              return Boolean(flag);
            })
      })
    },
    {
      path: '///:majigId',
      name: 'supmajig',
      component: Majig,
      props: (route) => ({
        majigId: route.params.majigId
      })
    },
    {
      path: '*',
      name: 'majig',
      component: Majig
    }
  ],
  scrollBehavior (to, from, saved) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (saved) {
      return saved;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
