<template>
  <MainHeader />
  <div class="banner">
    <div class="img">
      <img
        src="../assets/product/offers.jpg"
        width="100%"
        height="300px"
        alt="ad on amazon"
      />
    </div>
    <div class="summaryInfo">
      <h3>Cart Summary Info</h3>
      <br />
      <h6>SubTotal (5 &#160; items) : 1200 $</h6>
      <br />
      <button>
        <i class="bi bi-credit-card-2-front" />&#160;&#160;Check Out
      </button>
    </div>
  </div>
  <div class="cartInfo">
    <h4>Hello,&#160;&#160;User Name</h4>
    <h5>Your Shopping Cart is Empty || Your Shopping Cart</h5>
    <hr />
    <p>Products....</p>
  </div>
  <TheFooter />
</template>

<script>
import MainHeader from "../components/layout/MainHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
export default {
  components: { MainHeader, TheFooter },
};
</script>

<style>
.banner {
  display: flex;
  justify-content: space-around;
  margin: 3rem auto;
  width: 80%;
}

.banner .img {
  width: 60%;
}
.banner .img img {
  vertical-align: middle;
  border-radius: 1rem 0 0 1rem;
}
.banner .summaryInfo {
  background-color: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 1rem 1rem 0;
}

.banner .summaryInfo h3 {
  font-size: 1.5rem;
  text-shadow: 0.5px 0.5px;
}

.banner .summaryInfo h6 {
  font-size: 1rem;
}

.banner .summaryInfo button {
  background-color: #fbc130;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  transition: transform 450ms;
}

.banner .summaryInfo button:hover {
  box-shadow: 1px 1px 2px;
}

.cartInfo {
  margin: 3rem auto;
  width: 80%;
}
.cartInfo h4 {
  font-size: 1.5rem;
  text-shadow: 0.5px 0.5px;
}
</style>
