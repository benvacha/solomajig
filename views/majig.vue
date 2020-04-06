<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <ParabodyRight
    :views="views"
    :view="view"
    :viewed="viewed"
    @open="open"
    @goto="goto" />

  <div class="body">
  <div class="body">
  <div class="subbody">
  <div class="bodyer thin stack">
    <div class="horzer dim thin">
      <div class="lefter togler10">
        {{status || $route.path}}
      </div>
      <div class="rghter togler10"
        v-if="signed">
        <template v-if="isMode('show')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
        </template>
        <template v-if="isMode('edit')">
          <a @click="toMode('proof')">
            Proof</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
            Save</a> &bull;
        </template>
        <template v-if="isMode('proof')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
            Save</a> &bull;
        </template>
        <a @click="open('configer', majig)">
          Meta</a>
      </div>
      <div class="cntrer togler01">
        {{status || $route.path}}
      </div>
      <div class="cntrer togler01"
        v-if="signed">
        <template v-if="isMode('show')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
        </template>
        <template v-if="isMode('edit')">
          <a @click="toMode('proof')">
            Proof</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
            Save</a> &bull;
        </template>
        <template v-if="isMode('proof')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
            Save</a> &bull;
        </template>
        <a @click="open('configer', majig)">
          Meta</a>
      </div>
    </div>
  </div>
  <div class="bodyer thin stack">
    <div v-if="isMode('show')
        || isMode('proof')"
      v-html="markeddown"></div>
    <form @submit.prevent
      class="editor"
      v-if="isMode('edit')">
      <pre><span>
        {{markdown}}
      </span><br /></pre>
      <textarea
        placeholder="markdown"
        v-model="markdown">
      </textarea>
    </form>
  </div>
  <div class="bodyer thin stack">
    <div class="horzer dim">
      <div class="cntrer thin">
        {{ majig.created | datetime }}
        &bull; &bull; &bull;
        {{ majig.updated | datetime }}
        <br />
        {{ majig.published | datetime }}
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import Marked
  from 'marked';
import ParabodyRight
  from 'elements/paras/right.vue';
import Configer
  from 'elements/paras/configer.vue';
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
  components: {
    ParabodyRight,
  },
  filters: {
    datetime: (value) => {
      if(!value) return '000-00-00 00:00:00';
      const when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
  },
  props: {
    majigId: {
      type: String,
      required: false,
    }
  },
  data () {
    return {
      mode: 'show',
      status: '',
      markdown: '',
      views: {
        configer: Configer,
      },
      view: '',
      viewed: null,
    };
  },
  created () {
    this.loadMajig();
  },
  watch: {
    '$route': 'loadMajig',
    'signed': 'loadMajig',
    'majig': 'loadViewed',
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
    majig () {
      const all = this.$store.state.majig.all;
      if(this.majigId) {
        return all[this.majigId] || {};
      } else {
        return all[this.$route.path] || {};
      }
    },
    markeddown () {
      return Marked(this.markdown
        || '404 Not Found',
        { renderer: Renderer });
    },
  },
  methods: {
    goto (path) {
      this.open(false);
      this.$router.push(path)
        .catch(err => {});
    },
    open (view, viewed) {
      if(view === false
      || (view === this.view
      && viewed === this.viewed)) {
        this.view = '';
        this.viewed = null;
      } else if(view !== this.view) {
        this.view = view;
        this.viewed = viewed;
      } else {
        this.viewed = viewed;
      }
    },
    isMode (mode) {
      return this.mode === mode;
    },
    toMode (mode) {
      switch(mode) {
        case 'cancel':
          this.markdown =
            this.majig.markdown || '';
          this.mode = 'show';
          break;
        case 'save':
          this.saveMajig(
          ).then(() => {
            this.mode = 'show';
          });
          break;
        default:
          this.mode = mode;
          break;
      };
    },
    loadViewed () {
      this.viewed = this.majig;
      this.markdown = this.majig.markdown;
    },
    loadMajig () {
      this.status = 'loading';
      this.open(false);
      return this.$store.dispatch(
        'majig/load', {
        majigId: this.majigId,
        path: this.$route.path,
      }).then((majig) => {
        this.status = '';
      }).catch((errors) => {
        if(errors[0].status === 404) {
          this.status = '';
        } else {
          this.status = errors[0].title;
        }
      });
    },
    addMajig () {
      this.status = 'adding';
      return this.$store.dispatch(
        'majig/add', {
        path: this.$route.path,
        markdown: this.markdown,
      }).then((majig) => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    updateMajig () {
      this.status = 'updating';
      return this.$store.dispatch(
        'majig/update', {
        majigId: this.majig.id,
        markdown: this.markdown,
      }).then((majig) => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    saveMajig () {
      this.status = 'saving';
      if(this.majig.id) {
        return this.updateMajig();
      } else {
        return this.addMajig();
      }
    },
  },
};
</script>
