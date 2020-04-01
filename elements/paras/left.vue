<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="parabody left"
  :class="{open:opened, sticky:stuck}">

  <div class="prebody">
  <div class="horzer">
    <div class="lefter mask">
      {{status}}
    </div>
    <div class="rghter full">
      <a class="material-icons full"
        @click="$emit('open', false)">
          chevron_left
      </a>
    </div>
  </div>
  </div>
  
  <component
    @goto="goto"
    @open="open"
    @notify="notify"
    :is="views[view]" />

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
    open (view) {
      this.$emit('open', view);
    },
    notify (status) {
      this.status = status;
      this.$emit('notify', status);
    },
  },
};
</script>
