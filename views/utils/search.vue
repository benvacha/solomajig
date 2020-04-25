<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Search</h1>
    <form @submit.prevent="search()">
      <input type="text"
        v-model="keyword"
        placeholder="keyword"
      />
      <input type="submit"
        value="Search" />
    </form>
    <h2>Results
      <span>{{majigs.length}}</span>
    </h2>
    <ul>
      <li v-if="!majigs.length">
        <div>no results</div>
      </li>
      <li v-for="majig in majigs">
        <a @click="goto(majig)">
          <span>
            {{majig.markdown
              | previewed(searched)}}
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
export default {
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
      keyword: '',
      searched: '',
      majigs: [],
    };
  },
  methods: {
    goto (majig) {
      this.$store.dispatch(
        'utils/notify', {
        status: 'going'
      }).then(() => {
        if(!majig.path) return;
        return this.$router.push(
          majig.path
        ).catch(error => {});
      }).then(() => {
        if(majig.path) return;
        this.$router.push({
          name: 'supmajig',
          params: {
            majigId: majig.id
          }
        }).catch(() => {});
      }).then(() => {
        return this.$store.dispatch(
          'utils/stash', {});
      });
    },
    search () {
      this.$store.dispatch(
        'utils/notify', {
        status: 'searching',
      }).then(() => {
        return this.$store.dispatch(
          'majigs/search', {
          keyword: this.keyword,
        }).catch((errors) => {
          throw errors[0];
        });
      }).then((majigs) => {
        this.searched = this.keyword;
        this.majigs = majigs;
        return this.$store.dispatch(
          'utils/notify', {
          status: '',
        });
      }).catch(error => {
        this.$store.dispatch(
          'utils/notify', {
          status: error.title
        });
      });
    },
  },
};
</script>
