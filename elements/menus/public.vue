<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="horzer">

  <div class="lefter">
    <a @click="$emit('goto', '/')">
      Solomajig</a>
  </div>
  <div class="rghter">
    <a @click="$emit('open', 'search')">
      Search</a> &bull;
    <a @click="$emit('open', 'signIn')">
      SignIn</a>
  </div>

</div>
</template>

<!-- -->

<script>
export default {
  name: 'public',
  components: {},
  props: {},
  data () {
    return {};
  },
  methods: {},
};
</script>
