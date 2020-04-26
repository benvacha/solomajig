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
    <form @submit.prevent="goto()">
      <input type="text"
        v-model="path"
        placeholder="path"
      />
      <input type="submit"
        value="GoTo" />
    </form>
    <template v-if="!signed">
      <h1>SignIn</h1>
      <form @submit.prevent="sign()">
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
      this.$store.dispatch(
        'utils/notify', {
        status: 'going'
      }).then(() => {
        return this.$router.push(
          this.path
        ).catch(error => {});
      }).then(() => {
        this.path = '';
        return this.$store.dispatch(
          'utils/stash', {});
      });
    },
    sign () {
      this.$store.dispatch(
        'utils/notify', {
        status: 'signing',
      }).then(() => {
        return this.$store.dispatch(
          'token/sign', {
          username: this.username,
          password: this.password,
        }).catch((errors) => {
          throw errors[0];
        });
      }).then(() => {
        this.password = '';
        return this.$store.dispatch(
          'utils/stash', {});
      }).catch(error => {
        this.password = '';
        this.$store.dispatch(
          'utils/notify', {
          status: error.title
        });
      });
    },
    unsign () {
      this.$store.dispatch(
        'majig/clear', {
      }).then(() => {
        return this.$store.dispatch(
          'majigs/clear', {});
      }).then(() => {
        return this.$store.dispatch(
          'token/clear', {});
      }).then(() => {
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
