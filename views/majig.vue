<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="subbody">
<div class="bodyer thin">

  <center>
    <br /><br /><br />
    <h1 @click="signGet">Majig</h1>
  </center>

</div>
</div>
</template>

<!-- -->

<script>
export default {
  props: {},
  methods: {
    signGet () {
      console.log('signing get');
      this.$store.dispatch('token/signGet', {
      }).then(() => {
        console.log('signed get');
      }).catch((error) => {
        if (error.response) {
          const data = error.response.data;
          console.log(data);
        } else { console.log(error); }
      });
    },
  },
};
</script>
