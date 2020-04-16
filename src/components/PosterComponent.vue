<template>
  <figure class="py-8 pb-12">
    <figcaption><h4 v-text="title" /></figcaption>
    <img class="pointer-cursor fill-width mt-6"
      :src="`./image/${title}/poster.jpg`"
      :data-title="title" @click="exhibit">
    <figcaption class="text-right">
      <h4>poster by
         <a target="_blank" :href="`https://www.instagram.com/${author}/`">@{{ author }}</a></h4>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  methods: {
    exhibit({ target: { dataset: { title } } }) {
      this.$router.push(`/${title}`);
    },
  },
};
</script>
