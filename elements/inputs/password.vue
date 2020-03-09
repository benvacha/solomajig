<!-- Copyright (C) 2020 BenVacha/Solomajig -->

<template>

  <input
    type="password"
    class="input"
    :value="value"
    v-on="listeners"
  />

</template>

<!-- -->

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit(
          'input', event.target.value
        ),
      };
    },
  },
};
</script>
