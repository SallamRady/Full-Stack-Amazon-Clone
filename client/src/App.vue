<template>
  <MainHeader :categories="categories" />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import { isLogged } from "./utils/localStorage";
import MainHeader from "./components/layout/MainHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { mapActions } from "vuex";

export default {
  components: { MainHeader, TheFooter },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    ...mapActions(["logout"]),
  },
  beforeMount() {
    const url = "http://localhost:8000/categories";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.categories = data.categories;
      })
      .catch((err) => {
        console.log("error in fetch categories:", err);
      });
  },
  beforeCreate() {
    this.$store.commit("setIsLogged", { value: isLogged() });
  },
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
