<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <!-- -->
  <div class="postbody"
    v-if="signed">
    <div class="horzer">
      <a class="full"
        @click="unsign()">
        SignOut
      </a>
    </div>
  </div>

  <!-- -->
  <div class="postbody former"
    v-if="!signed">
  <div class="bodyer para">
    <form @submit.prevent="sign()">
      <input type="text"
        v-model="username"
        placeholder="username"
        autocorrect="off"
        autocapitalize="none"
      />
      <input type="password"
        v-model="password"
        placeholder="password"
        autocorrect="off"
        autocapitalize="none"
      />
      <input type="submit"
        value="SignIn"
      />
    </form>
  </div>
  </div>

  <!-- -->
  <div class="subbody">
  <div class="bodyer para">
    <h1>GoTo</h1>
    <form @submit.prevent="goto()">
      <input type="text"
        v-model="path"
        placeholder="path"
        inputmode="url"
        autocorrect="off"
        autocapitalize="none"
      />
      <input type="submit"
        value="GoTo" />
    </form>
    <h1>Jump<span v-if="signed">
      <a href="#/menu/published">
        Published</a> &bull;
      <a href="#/menu/concealed">
        Concealed</a>
    </span></h1>
    <div v-html="markeddown">
    </div>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import Marked from 'marked';
/* */
const Renderer = new Marked.Renderer();
const Renderers = {
  link: Renderer.link.bind(Renderer),
};
Renderer.link = (href, title, text) => {
  if(href[0] === '/') {
    href = '#' + href;
  } else if(href[0] !== '#') {
    href = '#/' + href;
  }
  return Renderers.link(href, title, text);
};
/* */
export default {
  data () {
    return {
      path: '',
      username: '',
      password: '',
    };
  },
  created () {
    this.load();
  },
  watch: {
    'signed': 'load',
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
    menu () {
      return this.signed ? '/menu/concealed'
        : '/menu/published';
    },
    majig () {
      const all = this.$store.state.majig.all;
      return all[this.menu] || {};
    },
    markeddown () {
      return Marked(this.majig.markdown ||
        '- [root](/)',
        { renderer: Renderer });
    },
  },
  methods: {
    goto () {
      if(this.path[0] !== '/') {
        this.path = '/' + this.path;
      }
      this.$store.dispatch(
        'utils/notify', {
        status: 'going'
      }).then(() => {
        return this.$router.push(
          this.path
        ).catch(error => {});
      }).then(() => {
        this.path = '';
        return this.$store.dispatch(
          'utils/stash', {});
      });
    },
    load () {
      return this.$store.dispatch(
        'majig/load', {
        path: this.menu,
      }).then((majig) => {
      }).catch((errors) => {
      });
    },
    sign () {
      this.$store.dispatch(
        'utils/notify', {
        status: 'signing',
      }).then(() => {
        return this.$store.dispatch(
          'token/sign', {
          username: this.username,
          password: this.password,
        }).catch((errors) => {
          throw errors[0];
        });
      }).then(() => {
        this.password = '';
        return this.$store.dispatch(
          'utils/stash', {});
      }).catch(error => {
        this.password = '';
        this.$store.dispatch(
          'utils/notify', {
          status: error.title
        });
      });
    },
    unsign () {
      this.$store.dispatch(
        'majig/clear', {
      }).then(() => {
        return this.$store.dispatch(
          'majigs/clear', {});
      }).then(() => {
        return this.$store.dispatch(
          'token/clear', {});
      }).then(() => {
        return this.$store.dispatch(
          'utils/stash', {});
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
