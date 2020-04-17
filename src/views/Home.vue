<template>
  <section>
    <poster-component v-for="(p, ind) in env.pic" :key="ind"
      :title="p[0][0]" :author="p[0][1]" :clickable="p.length > 1" :baseurl="baseurl" />
  </section>
</template>

<script>
import PosterComponent from '@/components/PosterComponent.vue';

export default {
  name: 'Home',
  components: {
    PosterComponent,
  },
  props: ['env'],
  computed: {
    baseurl() {
      return this.env.baseurl;
    },
  },
};
</script>
