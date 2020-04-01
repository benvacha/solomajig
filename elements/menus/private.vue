<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="horzer">

  <div class="lefter">
    <a @click="$emit('goto', '/')">
      SoloMajig</a>
  </div>
  <div class="rghter">
    <a @click="$emit('open', 'creator')">
      Create</a> &bull;
    <a @click="$emit('open', 'finder')">
      Find</a> &bull;
    <a @click="unsign()">
      Leave</a>
  </div>

</div>
</template>

<!-- -->

<script>
export default {
  name: 'private',
  props: {},
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
  },
  methods: {
    unsign () {
      this.$emit('open', false);
      this.$store.dispatch(
        'majig/clear', {
      }).then(() => {
        return this.$store.dispatch(
          'majigs/clear', {});
      }).then(() => {
        return this.$store.dispatch(
          'token/clear', {});
      }).catch(err => {
        console.log(err);
      });
    },
  }
};
</script>
