<template>
  <div class="row" v-for="item in categories" :key="item._id">
    <h2 class="title">{{ item.title }}</h2>
    <div class="row-posters">
      <div
        class="product"
        v-for="product in products"
        :key="product._id"
        v-show="product.Category == item._id"
      >
        <img
          key="asd"
          class="row-poster"
          :src="'http://localhost:8000/' + product.photo"
          alt="asd"
        />
        <div class="info">
          <h3>{{ product.title }}</h3>
          <p>
            <strong>Rating : 4.6</strong><span>{{ product.price }} $</span>
          </p>
          <div class="actions">
            <button><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
            <button @click="showDetails(product._id)">Details</button>
          </div>
        </div>
      </div>

      <!-- More... -->
      <div class="more">
        <router-link to="/">
          <i class="fa-solid fa-plus"></i>
          <span> </span>
          <b>More</b>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [],
  }),
  props: ["categories"],
  beforeMount() {
    const url = "http://localhost:8000/products";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.products = data.products;
      })
      .catch((err) => {
        console.log("error in fetch categories:", err);
      });
  },
  methods: {
    showDetails(id) {
      this.$router.push(`product/${id}`);
    },
  },
};
</script>

<style>
.row {
  color: #fff;
  margin-left: 20px;
}

.title {
  color: #000;
  font-size: 1.8rem;
  text-shadow: 1px 1px 1px;
}
.row-posters {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
}

.row-posters::-webkit-scrollbar {
  display: none;
}
.row-poster {
  object-fit: contain;
  width: 100%;
  max-height: 120px;
  transition: transform 450ms;
  min-height: 11rem;
  margin: 0.5rem;
}
.row-posterLarge {
  max-height: 250px;
}

.product {
  width: 25rem;
  min-width: 25rem;
  padding: 1rem;
  margin: 0.5rem 1.2rem;
  transition: transform 450ms;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.smallBox {
  min-width: 250px;
}
.product:hover {
  transform: scale(1.08);
  box-shadow: 2px 2px 4px;
}

.product .info {
  color: #000;
  padding: 0.3rem;
}

.product .info p span {
  color: #fbc130;
  font-weight: bolder;
  float: right;
  font-size: 1.2rem;
}

.product .info .actions {
  display: flex;
  justify-content: space-between;
}

.product .info .actions button {
  background-color: #fbc130;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.64rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  transition: transform 450ms;
}

.product .info .actions button:hover {
  box-shadow: 1px 1px 2px;
}

.more {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  min-width: 270px;
  padding: 0.3rem;
  margin: 0.2rem;
}
.more a {
  color: #fbc130;
}
</style>
