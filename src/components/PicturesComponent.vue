<template>
  <article>
    <h2 class="pt-12">
      <a target="_blank" :href="`https://www.instagram.com/${owner}/`">@{{ owner }}</a></h2>

    <picture-component
      class="mt-8"
      v-for="i in numero" :key="i"
      :src="`${baseurl}/image/${title}/${owner}/${i}.jpg`" />

    <p class="mt-8 mb-0" v-html="comment" />
  </article>
</template>

<script>
import PictureComponent from './PictureComponent.vue';

export default {
  components: {
    PictureComponent,
  },
  props: {
    baseurl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    pic: {
      type: Array,
      required: true,
    },
  },
  computed: {
    owner() {
      return this.pic[0];
    },
    numero() {
      return this.pic[1];
    },
    comment() {
      return `: ${this.pic[2].split('\n').join('<br>')}`;
    },
  },
};
</script>
