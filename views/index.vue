<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

<div class="body">
  <div class="prebody tiny togler10">
    <div class="horzer">
      <div class="lefter">
        <a @click="goto('/')">
          SoloMajig</a>
      </div>
      <div class="rghter">
        <template v-if="signed">
          <a @click="open('create')">
            Create</a> &bull;
        </template>
        <a @click="open('search')">
          Search</a> &bull;
        <a @click="open('goto')">
          GoTo</a>
      </div>
    </div>
  </div>
  <div class="postbody dark togler01">
    <div class="horzer">
      <div class="lefter">
        <a @click="goto('/')">
          SoloMajig</a>
      </div>
      <div class="rghter">
        <template v-if="signed">
          <a @click="open('create')">
            Create</a> &bull;
        </template>
        <a @click="open('search')">
          Search</a> &bull;
        <a @click="open('goto')">
          GoTo</a>
      </div>
    </div>
  </div>
  <div class="body">
  <div class="body">
    <Utils />
    <div class="body">
    <div class="body">
      <router-view />
    </div>
    </div>
  </div>
  </div>
</div>

</div>
</template>

<!-- -->

<script>
const Utils = () =>
  import('views/utils.vue');
const Create = () =>
  import('views/utils/create.vue');
const GoTo = () =>
  import('views/utils/goto.vue');
const Search = () =>
  import('views/utils/search.vue');
const UTILS = {
  create: Create,
  goto: GoTo,
  search: Search
};
export default {
  components: {
    Utils,
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
  },
  watch: {
    '$route': 'stash'
  },
  methods: {
    goto (path) {
      this.$store.dispatch(
        'utils/notify', {
        status: 'going'
      }).then(() => {
        return this.$router.push(
          path
        ).catch(error => {});
      }).then(() => {
        return this.$store.dispatch(
          'utils/stash', {});
      });
    },
    open (util) {
      this.$store.dispatch(
        'utils/open', {
        util: UTILS[util]
      });
    },
    stash () {
      this.$store.dispatch(
        'utils/stash', {
      });
    },
  },
};
</script>
