<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Search</h1>
    <form @submit.prevent="search()">
      <input type="text"
        v-model="terms"
        placeholder="terms && tags"
        autocorrect="off"
        autocapitalize="none"
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
              | previewed(termed)}}
          </span>
          <h5>{{majig.tags.join(' ')
            || majig.path}}</h5>
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
    previewed: (value, term) => {
      const length = 90;
      const index = value.indexOf(term);
      let offset = length - term.length;
      offset = Math.floor(offset / 2);
      return value.substring(index - offset,
        index + term.length + offset);
    },
  },
  data () {
    return {
      terms: '',
      termed: '',
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
          terms: this.terms,
        }).catch((errors) => {
          throw errors[0];
        });
      }).then((majigs) => {
        this.termed = this.terms;
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
