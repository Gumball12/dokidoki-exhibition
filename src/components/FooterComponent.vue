<template>
  <footer>
    <h5 class="float-left grey--text text--lighten-1">
      Copyright 2020.
       <a class="grey--text text--lighten-1"
          target="_blank" href="https://www.instagram.com/shjdga/">@shjdga</a>
       all rights reserved.
    </h5>
    <h4 class="underline pointer-cursor float-right" @click="goTop">top</h4>
    <br>
    <h5 class="float-left">
      <a class="grey--text text--lighten-1"
        target="_blank" href="https://git.io/JffCV">GitHub</a></h5>
  </footer>
</template>

<script>
export default {
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
