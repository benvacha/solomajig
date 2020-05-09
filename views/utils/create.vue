<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Create</h1>
    <form @submit.prevent="create()"
      class="editor">
      <input type="text"
        v-model="pathags"
        placeholder="path || tags"
        inputmode="url"
        autocorrect="off"
        autocapitalize="none"
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
      pathags: '',
      path: '',
      tags: '',
      markdown: '',
    };
  },
  methods: {
    create () {
      if (this.pathags.includes('/')) {
        if (this.pathags[0] !== '/') {
          this.path = '/' + this.pathags;
        } else {
          this.path = this.pathags;
        }
      } else {
        this.tags = this.pathags;
      }
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
        this.pathags = '';
        this.markdown = '';
        return this.$store.dispatch(
          'utils/stash', {});
      }).catch(error => {
        this.path = '';
        this.tags = '';
        this.$store.dispatch(
          'utils/notify', {
          status: error.title
        });
      });
    },
  },
};
</script>
