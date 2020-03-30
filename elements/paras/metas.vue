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
    <h2>Tag Majig</h2>
    <form @submit.prevent="retag">
      <InputText
        v-model="viewed.tags"
        placeholder="tags"
      />
      <input type="submit"
        :disabled="!viewed.id"
        value="ReTag" />
    </form>
    <h6></h6>
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
    retag () {
      this.$emit('notify',
        'tagging');
      return this.$store.dispatch(
        'majigs/update', {
        majigId: this.viewed.id,
        tags: this.viewed.tags,
      }).then((majig) => {
        // this.$emit('notify', '');
        this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    publish () {
      this.$emit('notify',
        'publishing');
      this.$store.dispatch(
        'majigs/update', {
        majigId: this.viewed.id,
        published: new Date(),
      }).then((majig) => {
        // this.$emit('notify', '');
        this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    unpublish () {
      this.$emit('notify',
        'unpublishing');
      this.$store.dispatch(
        'majigs/update', {
        majigId: this.viewed.id,
        published: false,
      }).then((majig) => {
        // this.$emit('notify', '');
        this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    remove () {
      this.$emit('notify',
        'removing');
      this.$store.dispatch(
        'majigs/remove', {
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
