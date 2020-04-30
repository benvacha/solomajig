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
        <template v-if="isMode('edit')">
          <a @click="toMode('proof')">
            Proof</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
            Save</a>
        </template>
        <template v-if="isMode('proof')">
          <a @click="toMode('edit')">
            Edit</a> &bull;
          <a @click="toMode('cancel')">
            Cancel</a> &bull;
          <a @click="toMode('save')">
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
            <a @click="toMode('cancel')">
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
            <a @click="toMode('cancel')">
              Cancel</a> &bull;
            <a @click="toMode('save')">
              Save</a>
          </template>
          <template v-else-if="isMode('proof')">
            <a @click="toMode('edit')">
              Edit</a> &bull;
            <a @click="toMode('cancel')">
              Cancel</a> &bull;
            <a @click="toMode('save')">
              Save</a>
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
            <a @click="toMode('retag')"
              v-if="!majig.path">
              Tag</a>
            <br />
            <span class="bold">
              {{majig.path || majig.tags}}
            </span>
            <br />
            <a @click="publish()"
              v-if="!majig.published">
              Publish</a>
            <a @click="unpublish()"
              v-if="majig.published">
              UnPublish</a> &bull;
            <a @click="toMode('delete')">
              Delete</a>
          </template>
          <template v-else-if="isMode('delete')">
            <a @click="remove()">
              Delete</a> &bull;
            <a @click="toMode('cancel')">
              Cancel</a>
          </template>
          <template v-else-if="isMode('move')">
            <a @click="toMode('cancel')">
              Cancel</a>
            <br />
            <br />
            <span>501 Not Implemented</span>
          </template>
          <template v-else-if="isMode('retag')">
            <a @click="toMode('cancel')">
              Cancel</a>
            <br />
            <br />
            <span>501 Not Implemented</span>
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
      status: '',
      mode: 'show',
      markdown: '',
    };
  },
  created () {
    this.loadMajig();
  },
  watch: {
    '$route': 'loadMajig',
    'signed': 'loadMajig',
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
    loadMajig () {
      this.markdown = this.majig ?
        this.majig.markdown : '';
      this.status = 'loading';
      return this.$store.dispatch(
        'majig/load', {
        majigId: this.majigId,
        path: this.$route.path,
      }).then((majig) => {
        this.status = '';
        this.markdown = majig.markdown;
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
    //
    move () {
      this.status = 'moving';
      return this.$store.dispatch(
        'majig/update', {
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
    retag () {
      this.status = 'tagging';
      return this.$store.dispatch(
        'majig/update', {
        majigId: this.majig.id,
        tags: this.majig.tags,
      }).then((majig) => {
        this.status = '';
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
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    unpublish () {
      this.status = 'unpublishing';
      this.$store.dispatch(
        'majig/update', {
        majigId: this.majig.id,
        published: false,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    remove () {
      this.status = 'removing';
      this.$store.dispatch(
        'majig/remove', {
        majigId: this.majig.id,
      }).then(() => {
        this.status = '';
        this.markdown = '';
        this.toMode('show');
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>
