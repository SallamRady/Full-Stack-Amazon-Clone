<template>
  <SubHeader/>
  <TheSlider/>
  <ProductsSummary/>
  <TheFooter/>
</template>

<script>
import SubHeader from '../components/home/SubHeader.vue';
import TheSlider from '../components/home/TheSlider.vue';
import ProductsSummary from '../components/home/ProductsSummary.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
export default {
  components:{SubHeader,TheSlider,ProductsSummary,TheFooter}
};
</script>

<style></style>
