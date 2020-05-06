<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin stack">
    <div class="horzer dim thin">
      <div class="lefter">
        {{status || majig.path
          || majig.tags || $route.path}}
      </div>
      <div class="rghter" v-if="signed">
        <template v-if="isMode('show')">
          <a @click="toMode('edit')">
            Edit</a>
        </template>
        <template v-else-if="isMode('edit')">
          <a @click="toMode('proof')">
            Proof</a> &bull;
          <a @click="cancel()">
            Cancel</a> &bull;
          <a @click="save()">
            Save</a>
        </template>
        <template v-else-if="isMode('proof')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="cancel()">
            Cancel</a> &bull;
          <a @click="save()">
            Save</a>
        </template>
      </div>
    </div>
  </div>
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
  </div>
  <div class="bodyer thin stack">
    <div class="horzer dim">
      <div class="rghter thin">
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
          </template>
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
              Tag</a>
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
          <template v-else-if="isMode('publish')">
            <a @click="publish()">
              Publish</a> &bull;
            <a @click="cancel()">
              Cancel</a>
            <br />
            <span class="bold">
              {{status}}
            </span>
          </template>
          <template v-else-if="isMode('conceal')">
            <a @click="conceal()">
              Conceal</a> &bull;
            <a @click="cancel()">
              Cancel</a>
            <br />
            <span class="bold">
              {{status}}
            </span>
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
      if(!value) return '0000-00-00 00:00:00';
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
      status: '',
      mode: 'show',
      path: '',
      tags: '',
      markdown: '',
    };
  },
  created () {
    this.load();
  },
  watch: {
    '$route': 'load',
    'signed': 'load',
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
    cancel () {
      this.status = '';
      this.mode = 'show';
      this.path =
        this.majig.path || '';
      this.tags =
        this.majig.tags || '';
      this.markdown =
        this.majig.markdown || '';
    },
    load () {
      this.status = 'loading';
      this.markdown =
        this.majig.markdown || '';
      return this.$store.dispatch(
        'majig/load', {
        majigId: this.majigId,
        path: this.$route.path,
      }).then((majig) => {
        this.cancel();
      }).catch((errors) => {
        if(errors[0].status === 404) {
          this.status = '';
        } else {
          this.status = errors[0].title;
        }
      });
    },
    add () {
      this.status = 'adding';
      return this.$store.dispatch(
        'majig/add', {
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
        'majig/update', {
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
        'majig/update', {
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
        'majig/update', {
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
        'majig/update', {
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
        'majig/update', {
        majigId: this.majig.id,
        published: false,
      }).then(() => {
        this.cancel();
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    remove () {
      this.status = 'deleting';
      this.$store.dispatch(
        'majig/remove', {
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
