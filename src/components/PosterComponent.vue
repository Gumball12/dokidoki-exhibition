<template>
  <figure class="py-8 pb-12">
    <figcaption><h4 v-text="title" /></figcaption>

    <v-lazy v-model="isActive" :options="{ thresold: 0.5 }" transition="fade-transition">
      <img v-if="clickable"
        class="pointer-cursor fill-width mt-6" :src="`${baseurl}/image/${title}/poster.jpg`"
        :data-title="title" @click="exhibit">

      <img v-else
        class="fill-width mt-6" :src="`${baseurl}/image/${title}/poster.jpg`">
    </v-lazy>

    <figcaption class="text-right">
      <h4>poster by
         <a target="_blank" :href="`https://www.instagram.com/${author}/`">@{{ author }}</a></h4>
    </figcaption>
  </figure>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  props: {
    baseurl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    exhibit({ target: { dataset: { title } } }) {
      this.$router.push(`/exhibition/${title}`);
    },
  },
};
</script>
