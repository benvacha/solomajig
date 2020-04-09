<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h2>About Majig</h2>
    <ul>
      <li><div>
        published: <b></b>
        <span>
          {{viewed.published | datetime}}
        </span>
      </div></li>
      <li><div>
        updated: <b></b>
        <span>
          {{viewed.updated | datetime}}
        </span>
      </div></li>
      <li><div>
        created: <b></b>
        <span>
          {{viewed.created | datetime}}
        </span>
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
      <input type="text"
        v-model="viewed.tags"
        placeholder="tags"
      />
      <input type="submit"
        :disabled="!viewed.id"
        value="ReTag" />
    </form>
    <h6></h6>
    <h2>Move Majig</h2>
    <form @submit.prevent="move">
      <input type="text"
        v-model="viewed.path"
        placeholder="/path"
      />
      <input type="submit"
        :disabled="!viewed.id"
        value="Move" />
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
export default {
  filters: {
    datetime: (value) => {
      if(!value) return '000-00-00 00:00:00';
      const when = new Date(value);
      return when.toLocaleString('sv-SE');
    },
  },
  props: {
    viewed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    move () {
      this.$emit('notify',
        'moving');
      return this.$store.dispatch(
        'majig/update', {
        majigId: this.viewed.id,
        path: this.viewed.path
          || false,
      }).then((majig) => {
        this.$emit('open', false);
        this.$router.push(
          majig.path || '/'
        ).catch(err => {});
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    retag () {
      this.$emit('notify',
        'tagging');
      return this.$store.dispatch(
        'majig/update', {
        majigId: this.viewed.id,
        tags: this.viewed.tags,
      }).then(() => {
        if(this.stacked) {
          this.$emit('open', false);
        } else {
          this.$emit('notify', '');
        }
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    publish () {
      this.$emit('notify',
        'publishing');
      this.$store.dispatch(
        'majig/update', {
        majigId: this.viewed.id,
        published: new Date(),
      }).then(() => {
        if(this.stacked) {
          this.$emit('open', false);
        } else {
          this.$emit('notify', '');
        }
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    unpublish () {
      this.$emit('notify',
        'unpublishing');
      this.$store.dispatch(
        'majig/update', {
        majigId: this.viewed.id,
        published: false,
      }).then(() => {
        if(this.stacked) {
          this.$emit('open', false);
        } else {
          this.$emit('notify', '');
        }
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    remove () {
      this.$emit('notify',
        'removing');
      this.$store.dispatch(
        'majig/remove', {
        majigId: this.viewed.id,
      }).then(() => {
        this.$emit('open', false);
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
  },
};
</script>
