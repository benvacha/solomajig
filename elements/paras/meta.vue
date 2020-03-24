<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h2>About Majig</h2>
    <ul>
      <li><div>
        published: <b></b>
        <span>{{viewed.published | datetime}}</span>
      </div></li>
      <li><div>
        updated: <b></b>
        <span>{{viewed.updated | datetime}}</span>
      </div></li>
      <li><div>
        created: <b></b>
        <span>{{viewed.created | datetime}}</span>
      </div></li>
    </ul>
    <h2>Publish Majig</h2>
    <form @submit.prevent="publish"
      v-if="!viewed.published">
      <input type="submit"
        :disabled="!viewed.id"
        value="Publish" />
    </form>
    <form @submit.prevent="unpublish"
      v-if="viewed.published">
      <input type="submit"
        :disabled="!viewed.id"
        value="UnPublish" />
    </form>
    <h2>Remove Majig</h2>
    <form @submit.prevent="remove">
      <input type="submit"
        :disabled="!viewed.id"
        value="Remove" />
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
  filters: {
    datetime: (value) => {
      if(!value) return '000-00-00 00:00:00';
      var when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
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
  },
  methods: {
    publish () {
      this.$emit('notify', 'publishing');
      this.$store.dispatch('majig/publish', {
        majigId: this.viewed.id,
      }).then((majig) => {
        this.$emit('notify', '');
        // this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    unpublish () {
      this.$emit('notify', 'unpublishing');
      this.$store.dispatch('majig/unpublish', {
        majigId: this.viewed.id,
      }).then((majig) => {
        this.$emit('notify', '');
        // this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    remove () {
      this.$emit('notify', 'removing');
      this.$store.dispatch('majig/remove', {
        majigId: this.viewed.id,
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
