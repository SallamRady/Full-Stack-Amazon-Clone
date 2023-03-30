<template>
  <SubHeader :categories="categories"/>
  <TheSlider />
  <ProductsSummary :categories="categories"/>
</template>

<script>
import SubHeader from "../components/home/SubHeader.vue";
import TheSlider from "../components/home/TheSlider.vue";
import ProductsSummary from "../components/home/ProductsSummary.vue";

export default {
  data() {
    return {
      categories: [],
    };
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
  components: { SubHeader, TheSlider, ProductsSummary },
};
</script>

<style></style>
