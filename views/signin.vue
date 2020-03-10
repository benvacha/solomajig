<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
      <InputText
        v-model="username"
        placeholder="username"
      />
      <InputPassword
        v-model="password"
        placeholder="password"
      />
      <input type="submit"
        value="sign in" />
    </form>
  </div>
  </div>

</div>
</template>

<!-- -->

<script>
import InputText from 'elements/inputs/text.vue';
import InputPassword from 'elements/inputs/password.vue';
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
    signIn () {
      this.$emit('notify', 'signing in');
      this.$store.dispatch('token/signIn', {
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$emit('open', false);
        this.$emit('notify', '');
        this.password = '';
      }).catch((error) => {
        this.$emit('notify', '');
        this.password = '';
        if (error.response) {
          const data = error.response.data;
          this.$emit('notify',
            data.errors[0].title);
        } else { console.log(error); }
      });
    },
  },
};
</script>
