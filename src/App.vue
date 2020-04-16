<template>
  <v-app>
    <v-container class="contents-wrapper py-8 px-4">
      <header-component />

      <main>
        <router-view :env="env" />
      </main>

      <footer-component />
    </v-container>
  </v-app>
</template>

<script>
import yaml from 'yaml';

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  data: () => ({
    env: [],
  }),
  components: {
    HeaderComponent,
    FooterComponent,
  },
  async mounted() {
    const yamlText = await (await fetch('./data.yml')).text();
    this.env = yaml.parse(yamlText);
  },
};
</script>

<style lang="scss">

/* global */

// variables
:root {
  --contents-width: 660px;

  --font-color: #fafafa;
  --background-color: #212121;
}

// font: Jeju Myeongjo
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

// font
a, * {
  font-family: 'Jeju Myeongjo', serif !important;
  font-weight: 300 !important;
  color: var(--font-color) !important;
}

/* classes */

.underline {
  text-decoration: underline;
}

.pointer-cursor {
  cursor: pointer;
}

.fill-width {
  width: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  background: var(--background-color);

  .contents-wrapper {
    max-width: var(--contents-width);
  }
}
</style>
