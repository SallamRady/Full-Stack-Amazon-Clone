<template>
  <MainHeader />
  <router-view></router-view>
</template>

<script>
import MainHeader from "./components/layout/MainHeader.vue";

export default {
  components: { MainHeader },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #dfdfdc;
}
</style>
