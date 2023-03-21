<template>
  <MainHeader />
  <SubHeader />
  <TheSlider />
  <ProductsSummary />
  <TheFooter />
</template>

<script>
import MainHeader from "../components/layout/MainHeader.vue";
import SubHeader from "../components/home/SubHeader.vue";
import TheSlider from "../components/home/TheSlider.vue";
import ProductsSummary from "../components/home/ProductsSummary.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
export default {
  components: { MainHeader, SubHeader, TheSlider, ProductsSummary, TheFooter },
};
</script>

<style></style>
