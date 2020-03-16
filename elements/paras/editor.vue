<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Update</h2>
    <form @submit.prevent="update">
      <InputText
        v-model="majig.markdown"
        placeholder="markdown"
      />
      <input type="submit"
        value="Update" />
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
