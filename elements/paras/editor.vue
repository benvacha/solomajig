<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h2>Edit Majig</h2>
    <form @submit.prevent="update">
      <input type="submit"
        value="Update" />
    </form>
    <h2>Markdown</h2>
    <form @submit.prevent="update"
      class="editor">
      <pre><span>
        {{viewed.markdown}}
      </span><br /></pre>
      <textarea
        placeholder="markdown"
        v-model="viewed.markdown">
      </textarea>
    </form>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
export default {
  props: {
    viewed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update () {
      this.$emit('notify', 'updating');
      this.$store.dispatch('majigs/update', {
        majigId: this.viewed.id,
        markdown: this.viewed.markdown,
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
