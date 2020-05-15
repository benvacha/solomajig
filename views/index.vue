<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

<div class="body">
  <div class="prebody tiny togler10">
    <div class="horzer">
      <div class="lefter">
        <a @click="goto('/')"
          class="logotype"></a>
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
        <a @click="goto('/')"
          class="logotype"></a>
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
    <Widgets />
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
const Widgets = () =>
  import('views/widgets.vue');
const Create = () =>
  import('views/widgets/create.vue');
const GoTo = () =>
  import('views/widgets/goto.vue');
const Search = () =>
  import('views/widgets/search.vue');
const WIDGETS = {
  create: Create,
  goto: GoTo,
  search: Search
};
export default {
  components: {
    Widgets,
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
        'widgets/notify', {
        status: 'going'
      }).then(() => {
        return this.$router.push(
          path
        ).catch(error => {});
      }).then(() => {
        return this.$store.dispatch(
          'widgets/stash', {});
      });
    },
    open (widget) {
      this.$store.dispatch(
        'widgets/open', {
        widget: WIDGETS[widget]
      });
    },
    stash () {
      this.$store.dispatch(
        'widgets/stash', {
      });
    },
  },
};
</script>
