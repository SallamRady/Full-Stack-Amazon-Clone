<template>
  <MainHeader />
  <h1>Hello</h1>
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
}
</style>
