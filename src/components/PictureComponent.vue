<template>
  <v-responsive :aspect-ratio="4/3">
    <v-lazy
      v-model="isActive" :options="{ threshold: 0.5 }" transition="fade-transition"
      class="fill-height pointer-cursor d-flex flex-column justify-center"
      :class="{ 'black': isActive }"
      @click="viewImage">
      <figure class="d-flex">
        <img class="fill-width" :src="src">
      </figure>
    </v-lazy>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    viewImage() {
      window.open(this.src, '_blank');
    },
  },
};
</script>
