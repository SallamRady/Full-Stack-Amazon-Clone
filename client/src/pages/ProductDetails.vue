<template>
  <div class="detailsPage">
    <div class="productImg">
      <img
        :src="'http://localhost:8000/' + product.photo"
        alt="Product Image"
      />
    </div>
    <div class="productInfo">
      <h3>{{ product.title }}</h3>
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
            {{ product.price }}
            <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          </ins>
          Insted Of
          <del style="color: red">
            {{ product.price + 50 }}
            <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          </del>
        </strong>
      </div>
      <hr />
      <p class="description">{{ product.description }}</p>
      <div class="actions">
        <button @click="addItem(product)">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button @click="toHome()">
          <font-awesome-icon :icon="['fas', 'house']" /> Back To Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isLogged } from "../utils/localStorage";

export default {
  data: () => ({ product: {} }),
  beforeMount() {
    let { id } = this.$route.params;
    const url = `http://localhost:8000/product/${id}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        this.product = data.product;
      })
      .catch((err) => {
        console.log("error in fetch product:", err);
      });
  },
  computed: {
    ...mapGetters(["userId"]),
  },
  methods: {
    ...mapActions(["addCartItem"]),
    toHome() {
      this.$router.push({ name: "homePage" });
    },
    addItem(item) {
      if (!isLogged()) {
        this.$router.push("/signin");
      } else {
        this.addCartItem({
          userId: this.userId,
          product: { ...item },
        });
      }
    },
  },
};
</script>

<style  scoped>
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
