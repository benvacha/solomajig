<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="prebody tiny">
    <div class="horzer">
      <div class="lefter mask">
        <span>{{status}}</span>
      </div>
      <div class="rghter">
        <a @click="editMode=true"
          v-if="!editMode">
          Edit</a>
        <a @click="editMode=false"
          v-if="editMode">
          Show</a>
        &bull;
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

    <form v-if="!keyword"
      @submit.prevent="addMajig">
      <br /><br />
      <InputText
        v-model="markdown"
        placeholder="markdown"
      />
      <input type="submit"
        value="create"
      />
      <br /><br />
    </form>
    <ul>
      <li v-for="majig in majigs"
        :key="majig.id">
        <span v-if="!editMode"
          v-html="marked(majig.markdown)">
        </span>
        <form @submit.prevent
          v-if="editMode"
          class="editor short">
          <pre><span>
            {{majig.markdown}}
          </span><br /></pre>
          <textarea
            placeholder="markdown"
            v-model="majig.markdown">
          </textarea>
        </form>
        <span v-if="editMode">
          <a @click="gotoMajig(majig)">
            goto
          </a> &bull; &bull;
          <a @click="removeMajig(majig)">
            remove
          </a> &bull;
          <a @click="updateMajig(majig)">
            save</a>
        </span>
      </li>
    </ul>

  </div>
  </div>
  </div>

</div>
</template>

<script>
import Marked from 'marked';
import InputText from 'elements/inputs/text.vue';
export default {
  components: {
    InputText,
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
      opened: false,
      filter: 'created',
      markdown: '',
      editMode: false,
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
    gotoMajig (majig) {
      if(majig.path) {
        this.$router.push({
          path: majig.path
        });
      } else {
        this.$router.push({
          name: 'submajig',
          params: {
            majigId: majig.id
          }
        });
      }
    },
    toggleOpen (opened) {
      this.opened = opened != undefined
        ? opened : !this.opened;
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
    addMajig () {
      this.status = 'adding';
      this.$store.dispatch('majigs/add', {
        markdown: this.markdown,
      }).then(() => {
        this.status = '';
        this.markdown = '';
        this.opened = false;
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    updateMajig (majig) {
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