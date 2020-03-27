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
        <a @click="gotoMajig(majig)">
          <span>
            {{majig.markdown | previewed(keyword)}}
          </span>
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
    previewed: (value, keyword) => {
      const length = 90;
      const index = value.indexOf(keyword);
      let offset = length - keyword.length;
      offset = Math.floor(offset / 2);
      return value.substring(index - offset,
        index + keyword.length + offset);
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
      this.$router.push(
        path
      ).catch(err => {});
      this.$emit('open', false);
    },
    gotoMajig (majig) {
      if(majig.path) {
        this.$router.push({
          path: majig.path
        });
      } else {
        this.$router.push({
          name: 'supmajig',
          params: {
            majigId: majig.id
          }
        });
      }
      this.$emit('open', false);
    },
    search () {
      if(!this.keyword) {
        return this.$emit('notify',
          'keyword required');
      }
      this.$emit('notify', 'searching');
      this.$store.dispatch(
        'majigs/search', {
        keyword: this.keyword,
      }).then((majigs) => {
        this.$emit('notify', '');
        this.majigs = majigs;
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>
