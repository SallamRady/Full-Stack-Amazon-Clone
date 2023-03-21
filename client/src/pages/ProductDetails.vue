<template>
  <div class="detailsPage">
    <div class="productImg">
      <img src="../assets/slider/Banner3.jpg" alt="Product Image" />
    </div>
    <div class="productInfo">
      <h3>Product 101</h3>
      <div>
        <i style="color: #fbc130" class="fa-solid fa-star"></i>
        <i style="color: #fbc130" class="fa-solid fa-star"></i>
        <i style="color: #fbc130" class="fa-solid fa-star"></i>
        <i style="color: #fbc130" class="fa-solid fa-star"></i>
        <font-awesome-icon :icon="['far', 'star']" />
      </div>
      <div class="price">
        <strong>
          <ins style="color: green">
            499.99 <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          </ins>
          Insted Of
          <del style="color: red">
            550 <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          </del>
        </strong>
      </div>
      <hr />
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sed.
        Distinctio nobis a excepturi eligendi dignissimos quia ut laborum
        consequatur eos esse saepe, architecto obcaecati molestias magni cum,
        porro aperiam!
      </p>
      <div class="actions">
        <button><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        <button @click="toHome()">
          <font-awesome-icon :icon="['fas', 'house']" /> Back To Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: "homePage" });
    },
  },
};
</script>

<style>
.detailsPage {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  align-items: flex-start;
}
.productImg {
  width: 40%;
}
.productImg img {
  width: 100%;
  height: 320px;
}

.productInfo {
  width: 50%;
}

.productInfo h3 {
  font-size: 2rem;
  text-shadow: 0.5px 0.5px 1px;
}

.productInfo .price {
  margin: 1.2rem 0;
  font-size: 1.2rem;
  font-weight: 700;
}
p.description {
  font-size: 1.1rem;
}

.productInfo .actions {
  display: flex;
  justify-content: space-between;
}

.productInfo .actions button {
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

.productInfo .actions button:hover {
  box-shadow: 1px 1px 2px;
}
</style>
