<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="subbody">
<div class="bodyer thin">

  <h1 @click="debug=!debug">
    Majig
    <span>{{ status }}</span>
  </h1>
  <ul v-if="debug">
    <li v-for="(value, name, index) in majig"
      :key="index">
      {{ name }}: {{ value }}
    </li>
  </ul>
  <form @submit.prevent="updateMajig">
    <InputText
      v-model="majig.markdown"
      placeholder="markdown"
    />
    <input type="submit" value="update" />
  </form>
  <div v-html="markeddown"></div>

</div>
</div>
</template>

<!-- -->

<script>
import Marked from 'marked';
import InputText from 'elements/inputs/text.vue';
export default {
  components: {
    InputText,
    Marked,
  },
  props: {
    majigId: {
      type: String,
      required: false,
    }
  },
  data () {
    return {
      debug: false,
      status: '',
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
      return Marked(this.majig.markdown || '');
    },
  },
  methods: {
    loadMajig () {
      this.status = 'loading';
      this.$store.dispatch('majig/load', {
        majigId: this.majigId,
        path: this.$route.path,
      }).then((majig) => {
        this.status = '';
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
      this.$store.dispatch('majig/update', {
        majigId: this.majigId,
        path: this.$route.path,
        markdown: this.majig.markdown,
      }).then((majig) => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>
