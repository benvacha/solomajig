<!-- Copyright (C) 2020 BenVacha/SoloMajig -->

<template>
<div class="body">

  <div class="subbody">
  <div class="bodyer para">
    <h2>About Majig</h2>
    <ul>
      <li><div>
        tags: <b></b>
        <span>
          {{viewed.tags}}
        </span>
      </div></li>
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
};
</script>
