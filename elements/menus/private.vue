<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="horzer">

  <div class="lefter">
    <a @click="$emit('goto', '/')">
      Solomajig</a>
  </div>
  <div class="rghter togler10">
    <a @click="signOut">SignOut</a>
  </div>
  <div class="rghter togler01">
    <a @click="signOut"
      class="material-icons">exit_to_app</a>
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
      return this.$store.getters['token/signed'];
    },
  },
  methods: {
    signOut () {
      this.$store.dispatch('token/signOut'
      ).finally(() => {
        return this.$router.push('/');
      }).catch(err => {});
    },
  }
};
</script>
