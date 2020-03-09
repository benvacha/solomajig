<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="body">

<div class="body">
    <div class="prebody tiny togler10">
      <component :is="mainMenu" @goto="goTo"
        @toggle="toggleOpen"></component>
    </div>
    <div class="postbody dark togler01">
      <component :is="mainMenu" @goto="goTo"
        @toggle="toggleOpen"></component>
    </div>
    <div class="body">
    <div class="body">
        <div class="parabody left"
          :class="{open:opened, sticky:!signed}">
          <div class="prebody">
          <div class="horzer">
              <div class="rghter full">
                <a class="material-icons full"
                  @click="toggleOpen(false)">
                    chevron_left</a>
              </div>
          </div>
          </div>
          <div class="body">
          <div class="subbody">
          <div class="bodyer thin tiny">
            <h2>Sign In<span>{{status}}</span></h2>
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
            <h6><center>
                by signing in, you agree to the<br />
                <a @click="goTo('/terms')">
                  terms of service</a> and
                <a @click="goTo('/privacy')">
                  privacy policy</a>.
            </center></h6>
          </div>
          </div>
          </div>
        </div>
        <div class="body">
        <div class="body">
          <router-view></router-view>
        </div>
        </div>
    </div>
    </div>
</div>

</div>
</template>

<!-- -->

<script>
import InputText from 'elements/inputs/text.vue';
import InputPassword from 'elements/inputs/password.vue';
import MenuPublic from 'elements/menus/public.vue';
import MenuPrivate from 'elements/menus/private.vue';
export default {
  components: {
    InputText,
    InputPassword,
    MenuPublic,
    MenuPrivate,
  },
  data () {
    return {
      username: '',
      password: '',
      opened: false,
      status: '',
    };
  },
  computed: {
    signed () {
      return this.$store.getters['token/signed'];
    },
    mainMenu () {
      if(this.$store.getters['token/signed']) {
        return MenuPrivate;
      } else {
        return MenuPublic;
      }
    },
  },
  methods: {
    goTo (path) {
      this.toggleOpen(false);
      this.$router.push(path).catch(err => {});
    },
    toggleOpen (opened) {
      this.opened = opened != undefined
        ? opened : !this.opened;
    },
    signIn () {
      this.status = 'signing in';
      this.$store.dispatch('token/signIn', {
        username: this.username,
        password: this.password,
      }).then(() => {
        this.status = '';
        this.password = '';
        this.goTo('/');
      }).catch((error) => {
        this.status = '';
        this.password = '';
        if (error.response) {
          const data = error.response.data;
          this.status = data.errors[0].title;
        } else { console.log(error); }
      });
    },
  },
};
</script>
