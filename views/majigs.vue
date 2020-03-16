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

    <div class="prebody tiny">
      <div class="horzer">
        <div class="lefter mask">
          <span>{{status}}</span>
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

    <div class="body">
    <div class="subbody">
    <div class="bodyer thick tall">
      <ul>
        <li v-for="majig in majigs"
          :key="majig.id">
          <span
            v-html="marked(majig.markdown)">
          </span>
          <span>
            <a @click="gotoMajig(majig)">
              goto
            </a> &bull; &bull;
            <a @click="removeMajig(majig)">
              remove
            </a> &bull;
            <a @click="open('editor', majig)">
              edit</a>
          </span>
        </li>
      </ul>
    </div>
    </div>
    </div>

  </div>

</div>
</template>

<script>
import Marked from 'marked';
import ParabodyRight
  from 'elements/parabodys/right.vue';
import Editor
  from 'views/editor.vue';
export default {
  components: {
    ParabodyRight,
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
      filter: 'created',
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
  },
  computed: {
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
      if(this.filter == filter) {
        this.filter = '!' + filter;
      } else {
        this.filter = filter;
      }
    },
    classFilter (filter) {
      if(this.filter == filter) {
        return 'descend';
      } else if(this.filter == '!' + filter) {
        return 'ascend';
      } else { return ''; }
    },
    loadMajigs () {
      this.status = 'loading';
      this.$store.dispatch('majigs/load', {
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