<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer thin tiny">
    <h2>Authorize</h2>
    <form @submit.prevent="sign">
      <InputText
        v-model="username"
        placeholder="username"
      />
      <InputPassword
        v-model="password"
        placeholder="password"
      />
      <input type="submit"
        value="Authorize" />
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
