<template>
  <div class="constainer">
    <div id="demo">
      <i class="fa-regular fa-circle-check"></i>
    </div>
    <div class="text">Order Confirmed Successfully!</div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.constainer {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#demo {
  background-color: chartreuse;
  color: #fff;
  font-size: 4.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.1rem;
  height: 4.1rem;
  border-radius: 2rem;
}

div.text {
  font-size: 3rem;
  color: limegreen;
  font-weight: 800;
  text-shadow: 2px 2px 4px;
}
</style>
