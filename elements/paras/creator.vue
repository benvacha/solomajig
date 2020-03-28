<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>New Majig</h1>
    <form @submit.prevent="add"
      class="editor">
      <InputText
        v-model="path"
        placeholder="/path"
      />
      <InputText
        v-model="tags"
        placeholder="tags"
      />
      <input type="submit"
        value="Create" />
    </form>
    <h2>Markdown</h2>
    <form @submit.prevent="add"
      class="editor">
      <pre><span>
        {{markdown}}
      </span><br /></pre>
      <textarea
        placeholder="markdown"
        v-model="markdown">
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
  data () {
    return {
      path: '',
      tags: '',
      markdown: '',
    };
  },
  methods: {
    add () {
      this.$emit('notify', 'creating');
      this.$store.dispatch('majig/add', {
        path: this.path,
        tags: this.tags,
        markdown: this.markdown,
      }).then((majig) => {
        this.$emit('open', false);
        if(majig.path) {
          this.$router.push({
            path: majig.path
          }).catch(() => {});
        } else {
          this.$router.push({
            name: 'supmajig',
            params: {
              majigId: majig.id
            }
          }).catch(() => {});
        }
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
  },
};
</script>
