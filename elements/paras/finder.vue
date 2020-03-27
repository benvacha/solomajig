<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>GoTo Majig</h1>
    <form @submit.prevent="goto(path)">
      <InputText
        v-model="path"
        placeholder="/path"
      />
      <input type="submit"
        value="GoTo" />
    </form>
    <h1>Find Majig</h1>
    <form @submit.prevent="search">
      <InputText
        v-model="keyword"
        placeholder="keyword"
      />
      <input type="submit"
        value="Find" />
    </form>
    <h2>Results
      <span>{{majigs.length}}</span>
    </h2>
    <ul>
      <li v-if="!majigs.length">
        <div>No Results</div>
      </li>
      <li v-for="majig in majigs">
        <a :click="goto(majig.path)">
          <span>{{majig.markdown | previewed}}</span>
          <h5>{{majig.path}}</h5>
        </a>
      </li>
    </ul>
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
  filters: {
    previewed: (value) => {
      const length = 90;
      const index = value.indexOf(this.keyword);
      let offset = length - keyword.length;
      offset = Math.floor(offset / 2);
      return value.substring(index - offset,
        index + this.keyword.length + offset);
    },
  },
  data () {
    return {
      path: '',
      keyword: '',
      majigs: [],
    };
  },
  methods: {
    goto (path) {
      if(path[0] !== '/') {
        path = '/' + path;
      }
      this.$emit('open', false);
      this.$router.push(
        path
      ).catch(err => {});
    },
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
