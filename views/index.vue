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
          <a @click="open('creator')">
            Create</a> &bull;
        </template>
        <a @click="open('finder')">
          Search</a> &bull;
        <a @click="open('signer')">
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
          <a @click="open('creator')">
            Create</a> &bull;
        </template>
        <a @click="open('finder')">
          Search</a> &bull;
        <a @click="open('signer')">
          GoTo</a>
      </div>
    </div>
  </div>
  <div class="body">
  <div class="body">
    <ParabodyLeft
      :views="views"
      :view="view"
      :viewed="viewed"
      @open="open"
      @goto="goto" />
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
import ParabodyLeft
  from 'elements/paras/left.vue';
import Creator
  from 'elements/paras/creator.vue';
import Finder
  from 'elements/paras/finder.vue';
import Signer
  from 'elements/paras/signer.vue';
export default {
  components: {
    ParabodyLeft,
  },
  data () {
    return {
      status: '',
      views: {
        creator: Creator,
        finder: Finder,
        signer: Signer,
      },
      view: '',
      viewed: null,
    };
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
  },
  methods: {
    goto (path) {
      this.open(false);
      this.$router.push(path)
        .catch(err => {});
    },
    open (view) {
      if(view === false
      || view === this.view) {
        this.view = '';
      } else {
        this.view = view;
      }
    },
  },
};
</script>
