<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>
<div class="parabody right"
  :class="{open:opened, sticky:stuck}">

  <div class="prebody">
  <div class="horzer">
    <div class="rghter mask">
      {{status}}
    </div>
    <div class="lefter full">
      <a class="material-icons full"
        @click="$emit('open', false)">
          chevron_right
      </a>
    </div>
  </div>
  </div>
  
  <component
    :is="views[view]"
    :viewed="viewed"
    :stacked="stacked"
    @goto="goto"
    @open="open"
    @notify="notify" />

</div>
</template>

<!-- -->

<script>
export default {
  components: {
  },
  props: {
    views: {
      type: Object,
      default: {},
    },
    view: {
      type: String,
      default: '',
    },
    viewed: {
      type: Object,
      default: null,
    },
    stacked: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    view (newView, oldView) {
      this.status = '';
      if(newView) this.opened = true;
      else this.opened = false;
    },
  },
  data () {
    return {
      opened: false,
      stuck: false,
      status: '',
    };
  },
  methods: {
    goto (path) {
      this.$emit('goto', path);
    },
    open (view, viewed) {
      this.$emit('open', view, viewed);
    },
    notify (status) {
      this.status = status;
      this.$emit('notify', status);
    },
  },
};
</script>
