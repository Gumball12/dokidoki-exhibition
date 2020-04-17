<template>
  <v-responsive :aspect-ratio="4/3">
    <div class="fill-height pointer-cursor d-flex flex-column justify-center black"
      @click="viewImage">
      <figure class="d-flex">
        <img class="fill-width" :src="src">
      </figure>
    </div>
  </v-responsive>
</template>

<script>
export default {
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
