<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

<div class="body">
    <div class="prebody tiny togler10">
      <component :is="menu"
        @goto="goto"
        @open="open" />
    </div>
    <div class="postbody dark togler01">
      <component :is="menu"
        @goto="goto"
        @open="open" />
    </div>
    <div class="body">
    <div class="body">
        <ParabodyLeft
          :views="views"
          :view="view"
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
import MenuPublic from 'elements/menus/public.vue';
import MenuPrivate from 'elements/menus/private.vue';
import ParabodyLeft from 'elements/parabodys/left.vue';
import SignIn from 'views/signin.vue';
export default {
  components: {
    ParabodyLeft,
  },
  data () {
    return {
      status: '',
      views: {
        signIn: SignIn,
      },
      view: '',
    };
  },
  computed: {
    signed () {
      return this.$store.getters['token/signed'];
    },
    menu () {
      if(this.$store.getters['token/signed']) {
        return MenuPrivate;
      } else {
        return MenuPublic;
      }
    },
  },
  methods: {
    goto (path) {
      this.open(false);
      this.$router.push(path).catch(err => {});
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
