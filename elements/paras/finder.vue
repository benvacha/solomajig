<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Search</h2>
    <form @submit.prevent="search">
      <InputText
        v-model="keyword"
        placeholder="keyword"
      />
      <input type="submit"
        value="Search" />
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
