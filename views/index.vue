<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

<div class="body">
    <div class="prebody tiny togler10">
      <component
        :is="menu"
        @goto="goto"
        @open="open" />
    </div>
    <div class="postbody dark togler01">
      <component
        :is="menu"
        @goto="goto"
        @open="open" />
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
import MenuPublic
  from 'elements/menus/public.vue';
import MenuPrivate
  from 'elements/menus/private.vue';
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
    menu () {
      if(this.signed) {
        return MenuPrivate;
      } else {
        return MenuPublic;
      }
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
