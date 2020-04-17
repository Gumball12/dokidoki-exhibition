<template>
  <figure>
    <img class="fill-width" :src="src">
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
