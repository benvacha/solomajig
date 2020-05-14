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
  
  <component :is="widget" />

</div>
</template>

<!-- -->

<script>
export default {
  computed: {
    status () {
      return this.$store
        .state.widgets.status;
    },
    widget () {
      return this.$store
        .state.widgets.widget;
    },
    opened () {
      return this.$store
        .state.widgets.opened;
    },
    stuck () {
      return this.$store
        .state.widgets.stuck;
    },
  },
  methods: {
    close (view) {
      this.$store.dispatch(
        'widgets/close', {
      });
    },
  },
};
</script>
