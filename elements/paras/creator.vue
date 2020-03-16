<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Create</h2>
    <form @submit.prevent="add">
      <InputText
        v-model="path"
        placeholder="/path"
      />
      <InputText
        v-model="markdown"
        placeholder="markdown"
      />
      <input type="submit"
        value="Create" />
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
      markdown: '',
    };
  },
  methods: {
    add () {
      this.$emit('notify', 'creating');
      this.$store.dispatch('majig/add', {
        path: this.path,
        markdown: this.markdown,
      }).then((majig) => {
        this.$emit('open', false);
        if(majig.path
        && majig.path != this.$route.path) {
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
