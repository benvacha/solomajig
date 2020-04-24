<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <!-- -->
  <div class="postbody"
    v-if="signed">
    <div class="horzer">
      <a class="full"
        @click="unsign()">
        SignOut
      </a>
    </div>
  </div>

  <div class="subbody">
  <div class="bodyer para">
    <h1>GoTo</h1>
    <form @submit.prevent="goto">
      <input type="text"
        v-model="path"
        placeholder="/path"
      />
      <input type="submit"
        value="GoTo" />
    </form>
    <template v-if="!signed">
      <h1>SignIn</h1>
      <form @submit.prevent="sign">
        <input type="text"
          v-model="username"
          placeholder="username"
        />
        <input type="password"
          v-model="password"
          placeholder="password"
        />
        <input type="submit"
          value="SignIn"
        />
      </form>
    </template>
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
      username: '',
      password: '',
    };
  },
  computed: {
    signed () {
      return this.$store.getters[
        'token/signed'];
    },
  },
  methods: {
    goto () {
      if(this.path[0] !== '/') {
        this.path = '/' + this.path;
      }
      this.$router.push(
        this.path
      ).catch(err => {});
      this.$emit('open', false);
    },
    sign () {
      this.$emit('notify', 'signing');
      this.$store.dispatch(
        'token/sign', {
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$emit('open', false);
        this.password = '';
      }).catch((errors) => {
        this.$emit('notify',
          errors[0].title);
      });
    },
    unsign () {
      this.$emit('open', false);
      this.$store.dispatch(
        'majig/clear', {
      }).then(() => {
        return this.$store.dispatch(
          'majigs/clear', {});
      }).then(() => {
        return this.$store.dispatch(
          'token/clear', {});
      }).catch(error => {
        this.$emit('notify',
          error.title);
      });
    },
  },
};
</script>
