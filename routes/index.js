/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import About from 'views/about.vue';
import Contact from 'views/contact.vue';
import Dashboard from 'views/dashboard.vue';
import Privacy from 'views/privacy.vue';
import Terms from 'views/terms.vue';
import Unknown from 'views/unknown.vue';
/* */
Vue.use(VueRouter);
/* */
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/privacy',
      component: Privacy,
    },
    {
      path: '/terms',
      component: Terms,
    },
    {
      path: '/',
      component: {
        template: '<component :is="root"></component>',
        computed: { root () {
          if(this.$store.getters['token/signed']) {
            return Dashboard;
          } else {
            return About;
          }
        }},
      },
    },
    {
      path: '*',
      component: Unknown
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
