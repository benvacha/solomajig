<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
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
  <div class="bodyer thick">

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
        <a @click="gotoMajig(majig)">
          {{ majig.markdown }}
        </a>
      </li>
    </ul>

  </div>
  </div>
  </div>

</div>
</template>

<script>
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
  },
};
</script>