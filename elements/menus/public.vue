<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="horzer">

  <div class="lefter">
    <a @click="$emit('goto', '/')">
      SoloMajig</a>
  </div>
  <div class="rghter">
    <a @click="$emit('open', 'finder')">
      Find</a> &bull;
    <a @click="$emit('open', 'signer')">
      Author</a>
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
