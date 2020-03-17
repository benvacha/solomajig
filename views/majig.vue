<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="prebody tiny">
    <div class="horzer">
      <div class="lefter mask">
        {{status}}
      </div>
      <div class="rghter"
        v-if="isMode('show')">
        <a @click="toMode('edit')">
          Edit</a>&bull;
        <a @click="toMode('remove')">
          Remove</a> &bull;
        <a @click="toMode('reset')">
          Reset</a> &bull;
        <a @click="toMode('save')">
          Save</a>
      </div>
      <div class="rghter"
        v-if="isMode('edit')">
        <a @click="toMode('show')">
          Show</a> &bull;
        <a @click="toMode('remove')">
          Remove</a> &bull;
        <a @click="toMode('reset')">
          Reset</a> &bull;
        <a @click="toMode('save')">
          Save</a>
      </div>
    </div>
  </div>

  <div class="body">
  <div class="subbody">
  <div class="bodyer thin stack"></div>
  <div class="bodyer thin stack">
    <div v-if="isMode('show')"
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
  <div class="bodyer thin stack"></div>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import Marked from 'marked';
import InputText
  from 'elements/inputs/text.vue';
export default {
  components: {
    InputText,
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
    };
  },
  created () {
    this.loadMajig();
  },
  watch: {
    '$route': 'loadMajig',
  },
  computed: {
    majig () {
      const all = this.$store.state.majig.all;
      if(this.majigId) {
        return all[this.majigId] || {};
      } else {
        return all[this.$route.path] || {};
      }
    },
    markeddown () {
      return Marked(this.markdown || '');
    },
  },
  methods: {
    isMode (mode) {
      return this.mode === mode;
    },
    toMode (mode) {
      switch(mode) {
        case 'remove':
          this.removeMajig(
          ).then(() => {
            this.mode = 'show';
          });
          break;
        case 'reset':
          this.markdown =
            this.majig.markdown || '';
          this.mode = 'show';
          break;
        case 'save':
          this.updateMajig(
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
      this.status = 'loading';
      this.markdown = this.majig.markdown || '';
      return this.$store.dispatch('majig/load', {
        majigId: this.majigId,
        path: this.$route.path,
      }).then((majig) => {
        this.status = '';
        this.markdown = majig.markdown;
      }).catch((errors) => {
        if(errors[0].status === 404) {
          this.status = '...';
        } else {
          this.status = errors[0].title;
        }
      });
    },
    updateMajig () {
      this.status = 'updating';
      return this.$store.dispatch('majig/update', {
        majigId: this.majig.id,
        path: this.$route.path,
        markdown: this.markdown,
      }).then((majig) => {
        this.status = '';
        this.markdown = majig.markdown;
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    removeMajig () {
      this.status = 'removing';
      return this.$store.dispatch('majig/remove', {
        majigId: this.majig.id,
      }).then((majig) => {
        this.$router.push('/');
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>
