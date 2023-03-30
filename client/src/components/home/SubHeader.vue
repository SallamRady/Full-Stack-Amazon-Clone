<template>
  <div class="sub-main-header">
    <router-link to="/">All</router-link>
    <router-link
      v-for="item in categories"
      :key="item._id"
      :to="'/categoryDetails/' + item._id"
      >{{ item.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>

<style scoped>
.sub-main-header {
  background-color: #321c0c;
  padding: 0.8rem;
  overflow: hidden;
  overflow-x: scroll;
}
.sub-main-header::-webkit-scrollbar {
  display: none;
}
.sub-main-header a {
  padding: 0 0.3rem;
  color: #fff;
  text-decoration: none;
}

.sub-main-header a:hover {
  font-weight: bolder;
}
.sub-main-header a:active {
  font-weight: bolder;
}
</style>
