<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Create</h1>
    <form @submit.prevent="create()"
      class="editor">
      <input type="text"
        v-model="path"
        placeholder="/path"
      />
      <input type="text"
        v-model="tags"
        placeholder="tags"
      />
      <input type="submit"
        value="Create" />
    </form>
    <h2>Markdown</h2>
    <form @submit.prevent="create()"
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
export default {
  data () {
    return {
      path: '',
      tags: '',
      markdown: '',
    };
  },
  methods: {
    create () {
      this.$store.dispatch(
        'utils/notify', {
        status: 'creating'
      }).then(() => {
        return this.$store.dispatch(
          'majig/add', {
          path: this.path,
          tags: this.tags,
          markdown: this.markdown,
        }).catch((errors) => {
          throw errors[0];
        });
      }).then((majig) => {
        if(!majig.path) return majig;
        return this.$router.push(
          majig.path
        ).catch(error => {});
      }).then((majig) => {
        if(majig.path) return;
        this.$router.push({
          name: 'supmajig',
          params: {
            majigId: majig.id
          }
        }).catch(() => {});
      }).then(() => {
        this.path = '';
        this.tags = '';
        this.markdown = '';
        return this.$store.dispatch(
          'utils/stash', {});
      }).catch(error => {
        this.$store.dispatch(
          'utils/notify', {
          status: error.title
        });
      });
    },
  },
};
</script>
