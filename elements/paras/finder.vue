<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Find Majig</h1>
    <form @submit.prevent="search">
      <input type="submit"
        value="Search" />
      <h2>Keyword</h2>
      <InputText
        v-model="keyword"
        placeholder="keyword"
      />
    </form>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import InputText
  from 'elements/inputs/text.vue';
export default {
  components: {
    InputText,
  },
  data () {
    return {
      keyword: '',
    };
  },
  methods: {
    search () {
      if(!this.keyword) {
        return this.$emit('notify',
          'keyword required');
      }
      this.$emit('open', false);
      this.$router.push({
        name: 'submajig',
        params: {
          keyword: this.keyword,
        },
      }).catch(error => {});
    },
  },
};
</script>
