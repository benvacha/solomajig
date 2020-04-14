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
    <div class="subbody" id="subbody">
    <div class="bodyer thin stack">
      <div class="horzer dim thin">
        <div class="lefter">
          <span>{{status || $route.path}}</span>
        </div>
        <div class="rghter">
          <a @click="toggleFilter('published')"
            :class="classFilter('published')">
            Published</a> &bull;
          <a @click="toggleFilter('updated')"
            :class="classFilter('updated')">
            Updated</a> &bull;
          <span>
            {{count || 0}}
          </span>
        </div>
      </div>
    </div>
    <div class="bodyer thin stack"
      v-if="!majigs.length">
      <p>404 Not Found</p>
    </div>
    <div class="bodyer thin stack"
      v-for="majig in majigs"
      :key="majig.id">
      <div v-html="marked(majig.markdown)"></div>
      <div class="supstack"><br /></div>
      <div class="substack horzer dim">
        <div class="lefter thin"
          v-if="filter.includes('published')">
          P &bull;
          {{ majig.published | datetime }}
        </div>
        <div class="lefter thin"
          v-if="filter.includes('updated')">
          U &bull;
          {{ majig.updated | datetime }}
        </div>
        <div class="rghter thin">
          <a @click="gotoMajig(majig)">
            GoTo
          </a> &bull;
          <a @click="open('sourcer', majig)">
            Source
          </a> &bull;
          <a @click="open('abouter', majig)">
            Meta
          </a>
        </div>
      </div>
    </div>
    <div class="bodyer thin stack">
      <div class="horzer dim thin"
        style="font-size:1em;">
        <div class="cntrer">
          <template
            v-for="page in pages">
            <template
              v-if="page">
              &bull;
            </template>
            <router-link
              :to="pageLink(page)">
              {{page}}
            </router-link>
          </template>
        </div>
      </div>
    </div>
    </div>
    </div>

  </div>

</div>
</template>

<script>
import Marked
  from 'marked';
import ParabodyRight
  from 'elements/paras/right.vue';
import Abouter
  from 'elements/paras/abouter.vue';
import Sourcer
  from 'elements/paras/sourcer.vue';
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
    flags: {
      type: Array,
      required: false,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      status: '',
      views: {
        abouter: Abouter,
        sourcer: Sourcer,
      },
      view: '',
      viewed: null,
      limit: 33,
      skip: 0,
    };
  },
  created () {
    this.loadMajigs();
  },
  updated () {
    let subbody = this.$el
      .querySelector("#subbody");
    subbody.scrollTop = 0;
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
    count () {
      return this.$store.state.majigs.count;
    },
    pages () {
      let pages = [];
      const count = this.$store.state.majigs.count;
      if(count <= this.limit) {
        return pages;
      }
      for(let i = 0; i < count / this.limit; i++) {
        pages.push(i);
      }
      return pages;
    },
    majigs () {
      return this.$store.state.majigs.all || [];
    },
  },
  methods: {
    pageLink (page) {
      if(!this.flags || !this.flags.length) {
        return '///' + page;
      }
      return '//' + this.flags.join('/')
        + '//' + page;
    },
    marked (markdown) {
      return Marked(markdown
        || '404 Not Found',
        { renderer: Renderer });
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
      this.$store.dispatch('majigs/load', {
        filter: this.filter == filter
          ? '-' + filter : filter,
        flags: this.flags,
        limit: this.limit,
        skip: this.skip
          || this.page * this.limit,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
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
        flags: this.flags,
        limit: this.limit,
        skip: this.skip
          || this.page * this.limit,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
  },
};
</script>