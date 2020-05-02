<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="bodyer thin stack">

  <div v-if="!isMode('edit')
      && !isMode('source')"
    v-html="markeddown"></div>
  <form @submit.prevent
    class="editor"
    v-if="isMode('edit')
      || isMode('source')">
    <pre><span>
      {{markdown}}
    </span><br /></pre>
    <textarea
      placeholder="markdown"
      v-model="markdown">
    </textarea>
  </form>
  <div class="supstack"><br /></div>
  <div class="substack horzer dim">
    <div class="lefter thin">
      <span>U &bull;
        {{ majig.updated | datetime }}
      </span>
      <br />
      <span>P &bull;
        {{ majig.published | datetime }}
      </span>
      <br />
      <span v-if="signed">C &bull;
        {{ majig.created | datetime }}
      </span>
    </div>
    <div class="rghter thin">
      <template v-if="!signed">
        <template v-if="!majig.id">
          <span>404 Not Found</span>
        </template>
        <template v-else-if="isMode('show')">
          <a @click="toMode('source')">
            MarkDown</a>
        </template>
        <template v-else-if="isMode('source')">
          <a @click="cancel()">
            MarkUp</a>
        </template> &bull;
        <a @click="goto()">
          GoTo</a>
        <br />
        <span class="bold">
          {{majig.path || majig.tags}}
        </span>
      </template>
      <template v-else>
        <template v-if="isMode('edit')">
          <a @click="toMode('proof')">
            Proof</a> &bull;
          <a @click="cancel()">
            Cancel</a> &bull;
          <a @click="save()">
            Save</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
        </template>
        <template v-else-if="isMode('proof')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="cancel()">
            Cancel</a> &bull;
          <a @click="save()">
            Save</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
        </template>
        <template v-else-if="!majig.id">
          <a @click="toMode('edit')">
            Edit</a>
        </template>
        <template v-else-if="isMode('show')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="toMode('move')"
            v-if="majig.path">
            Move</a>
          <a @click="toMode('tag')"
            v-if="!majig.path">
            Tag</a> &bull;
          <a @click="goto()">
            GoTo</a>
          <br />
          <span class="bold">
            {{status ||
              majig.path || majig.tags}}
          </span>
          <br />
          <a @click="publish()"
            v-if="!majig.published">
            Publish</a>
          <a @click="conceal()"
            v-if="majig.published">
            Conceal</a> &bull;
          <a @click="toMode('delete')">
            Delete</a>
        </template>
        <template v-else-if="isMode('delete')">
          <a @click="remove()">
            Delete</a> &bull;
          <a @click="cancel()">
            Cancel</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
        </template>
        <template v-else-if="isMode('move')">
          <a @click="cancel()">
            Cancel</a>
          <br />
          <br />
          <span>501 Not Implemented</span>
        </template>
        <template v-else-if="isMode('tag')">
          <a @click="cancel()">
            Cancel</a>
          <br />
          <br />
          <span>501 Not Implemented</span>
        </template>
      </template>
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
  filters: {
    datetime: (value) => {
      if(!value) return '000-00-00 00:00:00';
      const when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
  },
  props: {
    majig: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      status: '',
      mode: 'show',
      markdown: '',
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
    markeddown () {
      return Marked(this.markdown || '',
        { renderer: Renderer });
    },
  },
  methods: {
    isMode (mode) {
      return this.mode === mode;
    },
    toMode (mode) {
      this.status = '';
      this.mode = mode;
    },
    goto () {
      if(this.majig.path) {
        this.$router.push(
          this.majig.path
        ).catch(error => {});
      } else {
        this.$router.push({
          name: 'supmajig',
          params: {
            majigId: this.majig.id
          }
        }).catch(() => {});
      }
    },
    cancel () {
      this.status = '';
      this.mode = 'show';
      this.markdown =
        this.majig.markdown || '';
    },
    load () {
      this.cancel();
    },
    add() {
      this.status = 'adding';
      return this.$store.dispatch(
        'majigs/add', {
        path: this.$route.path,
        markdown: this.markdown,
      }).then((majig) => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    update () {
      this.status = 'updating';
      return this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        markdown: this.markdown,
      }).then((majig) => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    save () {
      this.status = 'saving';
      if(this.majig.id) {
        return this.update();
      } else {
        return this.add();
      }
    },
    move () {
      this.status = 'moving';
      return this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        path: this.majig.path,
      }).then((majig) => {
        this.$router.push(
          majig.path || '/'
        ).catch(err => {});
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    tag () {
      this.status = 'tagging';
      return this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        tags: this.majig.tags,
      }).then((majig) => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    publish () {
      this.status = 'publishing';
      this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        published: new Date(),
      }).then(() => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    conceal () {
      this.status = 'concealing';
      this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        published: false,
      }).then(() => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    remove () {
      this.status = 'removing';
      this.$store.dispatch(
        'majigs/remove', {
        majigId: this.majig.id,
      }).then(() => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>
