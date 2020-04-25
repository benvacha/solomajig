<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="parabody left"
  :class="{open:opened, sticky:stuck}">

  <div class="prebody">
  <div class="horzer">
    <div class="lefter mask">
      {{status}}
    </div>
    <div class="rghter full">
      <a class="material-icons full"
        @click="close">chevron_left</a>
    </div>
  </div>
  </div>
  
  <component :is="util" />

</div>
</template>

<!-- -->

<script>
export default {
  computed: {
    status () {
      return this.$store
        .state.utils.status;
    },
    util () {
      return this.$store
        .state.utils.util;
    },
    opened () {
      return this.$store
        .state.utils.opened;
    },
    stuck () {
      return this.$store
        .state.utils.stuck;
    },
  },
  methods: {
    close (view) {
      this.$store.dispatch(
        'utils/close', {
      });
    },
  },
};
</script>
