<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="horzer">

  <div class="lefter">
    <a @click="$emit('goto', '/')">
      AbleChart</a>
  </div>
  <div class="rghter">
    <a @click="$emit('goto', '/')">
      About</a> &bull;
    <a @click="$emit('goto', '/contact')">
      Contact</a> &bull;
    <a @click="$emit('toggle')">
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
