<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h1>Sign In</h1>
    <form @submit.prevent="sign">
      <input type="submit"
        value="Authorize" />
      <h2>Credentials</h2>
      <InputText
        v-model="username"
        placeholder="username"
      />
      <InputPassword
        v-model="password"
        placeholder="password"
      />
    </form>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import InputText
  from 'elements/inputs/text.vue';
import InputPassword
  from 'elements/inputs/password.vue';
export default {
  components: {
    InputText,
    InputPassword,
  },
  data () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    sign () {
      this.$emit('notify', 'signing');
      this.$store.dispatch('token/sign', {
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
  },
};
</script>
