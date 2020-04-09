<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h2>Majig Source</h2>
    <pre>{{viewed.markdown}}</pre>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
export default {
  props: {
    viewed: {
      type: Object,
      required: true,
    },
  },
};
</script>
