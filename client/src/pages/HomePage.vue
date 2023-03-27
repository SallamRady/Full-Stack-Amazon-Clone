<template>
  <MainHeader :categories="categories"/>
  <SubHeader :categories="categories"/>
  <TheSlider />
  <ProductsSummary :categories="categories"/>
  <TheFooter />
</template>

<script>
import MainHeader from "../components/layout/MainHeader.vue";
import SubHeader from "../components/home/SubHeader.vue";
import TheSlider from "../components/home/TheSlider.vue";
import ProductsSummary from "../components/home/ProductsSummary.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

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
  components: { MainHeader, SubHeader, TheSlider, ProductsSummary, TheFooter },
};
</script>

<style></style>
