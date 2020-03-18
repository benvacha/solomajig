<!-- Copyright (C) 2020 BenVacha/Solomajig -->

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
        {{majig.markdown}}
      </span><br /></pre>
      <textarea
        placeholder="markdown"
        v-model="majig.markdown">
      </textarea>
    </form>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import InputText
  from 'elements/inputs/text.vue';
export default {
  components: {
    InputText,
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
