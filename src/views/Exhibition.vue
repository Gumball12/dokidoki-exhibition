<template>
  <section>
    <template v-if="pic !== undefined">
      <poster-component :title="title" :author="pic[0][1]" :clickable="false" :baseurl="baseurl" />

      <pictures-component v-for="(p, ind) in pic.slice(1)" :key="ind"
        :title="title" :pic="p" :baseurl="baseurl" />
    </template>

    <div class="py-10" />
  </section>
</template>

<script>
import PosterComponent from '@/components/PosterComponent.vue';
import PicturesComponent from '@/components/PicturesComponent.vue';

export default {
  name: 'Exhibition',
  components: {
    PosterComponent,
    PicturesComponent,
  },
  props: ['env'],
  computed: {
    title() {
      return this.$route.params.title;
    },
    pic() {
      return (this.env.pic || []).find(([v]) => v[0] === this.title);
    },
    baseurl() {
      return this.env.baseurl;
    },
  },
  watch: {
    pic(v) {
      if (v === undefined) {
        this.$router.push('/404');
      }
    },
  },
};
</script>
