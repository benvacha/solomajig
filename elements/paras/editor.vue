<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para"
    v-if="signed">
    <h2>Edit Majig</h2>
    <form @submit.prevent="update">
      <input type="submit"
        value="Update" />
    </form>
    <h2>Markdown</h2>
    <form @submit.prevent="update"
      class="editor">
      <pre><span>
        {{majig.markdown}}
      </span><br /></pre>
      <textarea
        placeholder="markdown"
        v-model="majig.markdown">
      </textarea>
    </form>
  </div>
  <div class="bodyer para"
    v-if="!signed">
    <h2>Markdown</h2>
    <pre>{{majig.markdown}}</pre>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
export default {
  components: {
  },
  props: {
    viewed: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
    };
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
    majig () {
      return this.viewed;
    },
  },
  methods: {
    update () {
      this.$emit('notify', 'updating');
      this.$store.dispatch('majigs/update', {
        majigId: this.majig.id,
        markdown: this.majig.markdown,
      }).then((majig) => {
        this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
  },
};
</script>
