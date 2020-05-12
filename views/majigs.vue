<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">
<div class="body">

  <div class="subbody">
  <div class="bodyer thin stack">
    <div class="horzer dim thin">
      <div class="lefter">
        <span>{{status || $route.path}}</span>
      </div>
      <div class="rghter">
        <a @click="toggleFilter('published')"
          :class="classFilter('published')">
          Published</a> &bull;
        <a @click="toggleFilter('updated')"
          :class="classFilter('updated')">
          Updated</a> &bull;
        <span>
          {{count || 0}}
        </span>
      </div>
    </div>
  </div>
  <div class="bodyer thin stack"
    v-if="!majigs.length">
    <p>404 Not Found</p>
  </div>
  <SupMajig :majig="majig"
    v-for="majig in majigs"
    :key="majig.id" />
  <div class="bodyer thin stack">
    <div class="horzer dim thin"
      style="font-size:1em;">
      <div class="cntrer"></div>
    </div>
  </div>
  </div>

</div>
</div>
</template>

<script>
import SupMajig
  from 'views/supmajig.vue';
/* */
export default {
  components: {
    SupMajig
  },
  filters: {
    datetime: (value) => {
      if(!value) return '000-00-00 00:00:00';
      const when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
  },
  props: {
    flags: {
      type: Array,
      required: false,
    },
  },
  data () {
    return {
      status: '',
      limit: 100,
      skip: 0,
      filter: '-published'
    };
  },
  created () {
    this.loadMajigs();
  },
  watch: {
    '$route': 'loadMajigs',
    'signed': 'loadMajigs',
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
    count () {
      return this.$store.state
        .majigs.count;
    },
    majigs () {
      return this.$store.state
        .majigs.all || [];
    },
  },
  methods: {
    toggleFilter (filter) {
      this.status = 'sorting';
      this.filter = this.filter == filter
        ? '-' + filter : filter;
      this.$store.dispatch(
        'majigs/load', {
        filter: this.filter,
        flags: this.flags,
        limit: this.limit,
        skip: this.skip,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    classFilter (filter) {
      if(this.filter == filter) {
        return 'descend';
      } else if(this.filter == '-' + filter) {
        return 'ascend';
      } else { return ''; }
    },
    loadMajigs () {
      this.status = 'loading';
      if (this.signed) {
        this.filter = '-updated';
      } else {
        this.filter = '-published';
      }
      this.$store.dispatch(
        'majigs/load', {
        filter: this.filter,
        flags: this.flags,
        limit: this.limit,
        skip: this.skip,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>