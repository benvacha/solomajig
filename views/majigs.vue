<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

<div class="parabody right sticky"
  :class="{open:opened}">
  <div class="prebody">
  <div class="horzer">
      <div class="rghter mask">
        {{status}}
      </div>
      <div class="lefter full">
        <a class="material-icons full"
          @click="toggleOpen(false)">
            chevron_right</a>
      </div>
  </div>
  </div>
  <div class="body">
  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Create</h2>
    <form @submit.prevent="addMajig">
      <InputText
        v-model="markdown"
        placeholder="markdown"
      />
      <input type="submit"
        value="create"
      />
    </form>
  </div>
  </div>
  </div>
</div>
<div class="body">
<div class="body">

  <div class="prebody tiny">
    <div class="horzer">
      <div class="lefter mask">{{status}}</div>
      <div class="rghter">
        <a @click="toggleOpen(true)">create</a>
      </div>
    </div>
  </div>

  <div class="body">
  <div class="subbody">
  <div class="bodyer thin">

    <h1>Majigs<ul>
      <li>
        {{majigs.length || 0}} majigs
      </li>
      <li>
        <a @click="toggleFilter('alpha')"
          :class="classFilter('alpha')">
          alpha</a> &bull;
        <a @click="toggleFilter('created')"
          :class="classFilter('created')">
          created</a> &bull;
        <a @click="toggleFilter('updated')"
          :class="classFilter('updated')">
          updated</a>
      </li>
    </ul></h1>
    <ul>
      <li v-for="majig in majigs"
        :key="majig.id">
        {{ majig.markdown }}
      </li>
    </ul>

  </div>
  </div>
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
      return this.$store.state.majigs.all;
    },
  },
  methods: {
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
      console.log(this.$route.path);
      this.$store.dispatch('majigs/load', {
        path: this.$route.path,
      }).then(() => {
        this.status = '';
      }).catch((errors) => {
        this.status = errors[0].title;
      });
    },
    addMajig () {
      this.status = 'adding';
      this.$store.dispatch('majigs/add', {
        path: this.$route.path,
        markdown: this.markdown.trim(),
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