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
  <div class="supstack"
    :class="{tall:signed}">
    <br />
  </div>
  <div class="substack horzer dim">
    <div class="rghter thin"
      v-if="isMode('tag')
        || isMode('move')
        || isMode('publish')">
      <span>U &bull;
        {{ majig.updated | subdatetime }}
      </span>
      <br />
      <span>P &bull;
        {{ majig.published | subdatetime }}
      </span>
      <br />
      <span>C &bull;
        {{ majig.created | subdatetime }}
      </span>
    </div>
    <div class="rghter thin" v-else>
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
    <div class="lefter thin">
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
          {{majig.tags.join(' ') ||
            majig.path}}
        </span>
      </template>
      <template v-else>
        <!-- edit -->
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
        <!-- proof -->
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
        <!-- unknown -->
        <template v-else-if="!majig.id">
          <a @click="toMode('edit')">
            Edit</a>
        </template>
        <!-- show -->
        <template v-else-if="isMode('show')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="toMode('tag')">
            Tag</a> &bull;
          <a @click="toMode('move')">
            Move</a>
          <br />
          <span class="bold">
            {{status ||
              tagged || majig.path}}
          </span>
          <br />
          <a @click="toMode('publish')"
            v-if="!majig.published">
            Publish</a>
          <a @click="toMode('publish')"
            v-if="majig.published">
            Conceal</a> &bull;
          <a @click="toMode('delete')">
            Delete</a> &bull;
          <a @click="goto()">
            GoTo</a>
        </template>
        <!-- publish -->
        <template v-else-if="isMode('publish')">
          <a @click="conceal()">
            Conceal</a> &bull;
          <a @click="publish()">
            Publish</a> &bull;
          <a @click="cancel()">
            Cancel</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
          <br />
          <form @submit.prevent>
            <pre>{{published}}</pre>
            <input type="text"
              v-model="published"
              placeholder="published"
              inputmode="url"
              autocorrect="off"
              autocapitalize="none" />
          </form>
        </template>
        <!-- delete -->
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
        <!-- move -->
        <template v-else-if="isMode('move')">
          <a @click="move()">
            Move</a> &bull;
          <a @click="cancel()">
            Cancel</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
          <br />
          <form @submit.prevent>
            <pre>{{path}}</pre>
            <input type="text"
              v-model="path"
              placeholder="path"
              inputmode="url"
              autocorrect="off"
              autocapitalize="none" />
          </form>
        </template>
        <!-- tag -->
        <template v-else-if="isMode('tag')">
          <a @click="tag()">
            Tag</a> &bull;
          <a @click="cancel()">
            Cancel</a>
          <br />
          <span class="bold">
            {{status}}
          </span>
          <br />
          <form @submit.prevent>
            <pre>{{tags}}</pre>
            <input type="text"
              placeholder="tags"
              v-model="tags"
              autocorrect="off"
              autocapitalize="none" />
          </form>
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
      if(!value) {
        return '0000-00-00T00:00:00:000Z';
      }
      const when = new Date(value);
      return when.toISOString();
    },
    subdatetime: (value) => {
      if(!value) {
        return '0000-00-00';
      }
      const when = new Date(value);
      return when.toISOString()
        .split('T')[0];
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
      path: '',
      tags: '',
      published: '',
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
    tagged () {
      return this.majig.tags ?
        this.majig.tags.join(' ') : '';
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
      this.path =
        this.majig.path || '';
      this.tags =
        this.majig.tags.join(' ') || '';
      this.published = new Date(
        this.majig.published || Date.now());
      this.published =
        this.published.toISOString();
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
      if (this.path &&
        this.path[0] !== '/') {
        this.path = '/' + this.path;
      } else if (!this.path) {
        this.path = false;
      }
      return this.$store.dispatch(
        'majigs/update', {
        majigId: this.majig.id,
        path: this.path,
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
        tags: this.tags,
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
        published: this.published,
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
