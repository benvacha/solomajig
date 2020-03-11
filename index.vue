<!-- Copyright (C) 2020 BenVacha/Solomajig -->
<!-- -->

<template>
</template>

<!-- -->

<script>

import Vue from 'vue/dist/vue.js';
import App from 'views/index.vue';
import Store from 'stores/index.js';
import Router from 'routes/index.js';

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  store: Store,
  router: Router,
  template: '<app />',
  components: { App },
});

</script>

<!-- -->

<style>
@import 'styles/uizzle.css';
</style>
