<!-- Copyright (C) 2020 BenVacha/Solomajig -->

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
        <div class="lefter">
          <span>{{status || $route.path}}</span>
        </div>
        <div class="rghter">
          <a @click="toggleFilter('created')"
            :class="classFilter('created')">
            Created</a> &bull;
          <a @click="toggleFilter('updated')"
            :class="classFilter('updated')">
            Updated</a> &bull;
          <span>
            {{majigs.length || 0}}
          </span>
        </div>
      </div>
    </div>
    <div class="bodyer thin stack"
      v-if="!majigs.length">
      <p>Majigs Not Found</p>
    </div>
    <div class="bodyer thin stack"
      v-for="majig in majigs"
      :key="majig.id">
      <div v-html="marked(majig.markdown)"></div>
      <div class="supstack"></div>
      <div class="substack horzer dim">
        <div class="lefter thin">
          {{ majig.created | datetime }} &bull;
          {{ majig.updated | datetime }}
        </div>
        <div class="rghter thin"
          v-if="signed">
          <a @click="gotoMajig(majig)">
            goto
          </a> &bull; &bull;
          <a @click="removeMajig(majig)">
            remove
          </a> &bull;
          <a @click="open('editor', majig)">
            edit</a>
        </div>
      </div>
    </div>
    <div class="bodyer thin stack"></div>
    </div>
    </div>

  </div>

</div>
</template>

<script>
import Marked from 'marked';
import ParabodyRight
  from 'elements/paras/right.vue';
import Editor
  from 'elements/paras/editor.vue';
export default {
  components: {
    ParabodyRight,
  },
  filters: {
    datetime: (value) => {
      var when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
  },
  props: {
    keyword: {
      type: String,
      required: false,
    }
  },
  data () {
    return {
      status: '',
      views: {
        editor: Editor,
      },
      view: '',
      viewed: null,
    };
  },
  created () {
    this.loadMajigs();
  },
  watch: {
    '$route': 'loadMajigs',
    'signed': 'loadMajigs',
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
    filter () {
      return this.$store.state.majigs.filter;
    },
    majigs () {
      return this.$store.state.majigs.all || [];
    },
  },
  methods: {
    marked (markdown) {
      return Marked(markdown);
    },
    goto (path) {
      this.open(false);
      this.$router.push(path).catch(err => {});
    },
    gotoMajig (majig) {
      if(majig.path) {
        this.$router.push({
          path: majig.path
        });
      } else {
        this.$router.push({
          name: 'supmajig',
          params: {
            majigId: majig.id
          }
        });
      }
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
    toggleFilter (filter) {
      this.status = 'sorting';
      if(this.filter == filter) {
        this.$store.dispatch('majigs/load', {
          filter: '-' + filter,
          keyword: this.keyword,
        }).then(() => {
          this.status = '';
        }).catch((errors) => {
          this.status = errors[0].title;
        });
      } else {
        this.$store.dispatch('majigs/load', {
          filter: filter,
          keyword: this.keyword,
        }).then(() => {
          this.status = '';
        }).catch((errors) => {
          this.status = errors[0].title;
        });
      }
    },
    classFilter (filter) {
      if(this.filter == filter) {
        return 'descend';
      } else if(this.filter == '-' + filter) {
        return 'ascend';
      } else { return ''; }
    },
    loadMajigs () {
      this.open(false);
      this.status = 'loading';
      this.$store.dispatch('majigs/load', {
        filter: this.filter,
        keyword: this.keyword,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    editMajig (majig) {
      this.status = 'updating';
      this.$store.dispatch('majigs/update', {
        majigId: majig.id,
        markdown: majig.markdown,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    removeMajig (majig) {
      this.status = 'removing';
      this.$store.dispatch('majigs/remove', {
        majigId: majig.id,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>