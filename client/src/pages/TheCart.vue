<template>
  <div class="banner">
    <div class="img">
      <img
        src="../assets/product/offers.jpg"
        width="100%"
        height="100%"
        alt="ad on amazon"
      />
    </div>
    <div class="summaryInfo">
      <h3>Cart Summary Info</h3>
      <br />
      <h6>SubTotal ({{ cartQuantity }} &#160; items) : {{ totalAmount }} $</h6>
      <br />
      <button>
        <i class="fa-solid fa-bag-shopping"></i>&#160;&#160;Check Out
      </button>
    </div>
  </div>
  <div class="cartInfo">
    <h5 v-if="cart.length == 0">Your Shopping Cart is Empty</h5>
    <div v-else class="container">
      <h2>
        Cart Items <small>({{ cartQuantity }} &#160; items)</small>
      </h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col"><b>Title</b></div>
          <div class="col"><b>Price</b></div>
          <div class="col"><b>Quantity</b></div>
          <div class="col"><b>Actions</b></div>
        </li>
        <li class="table-row" v-for="item in cart" :key="item._id">
          <div class="col" data-label="Customer Name">
            {{ item.title }}
          </div>
          <div class="col" data-label="Amount">{{ item.price }}</div>
          <div class="col" data-label="Amount">{{ item.quantity }}</div>
          <div class="col actions" data-label="Payment Status">
            <button @click="addItem(item)">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
            <button @click="decreaseItem(item)">
              <font-awesome-icon :icon="['fas', 'minus']" />
            </button>
            <button @click="deleteItem(item)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
        <li class="table-header">
          <div class="col"><b>Total</b></div>
          <div class="col">
            <b>{{ totalAmount }} $</b>
          </div>
          <div class="col">
            <b>{{ cartQuantity }} item(s)</b>
          </div>
          <div class="col" style="text-align: center">
            <button @click="checkout" class="checkout">
              <i class="fa-solid fa-bag-shopping"></i>&#160;&#160;Check Out
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isLogged } from "../utils/localStorage";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters([
      "cart",
      "cartQuantity",
      "totalAmount",
      "logged",
      "userName",
      "userId",
    ]),
  },
  beforeCreate() {
    if (!isLogged()) {
      this.$router.push("/signin");
    }
  },
  methods: {
    ...mapActions(["addCartItem", "decreaseCartItem", "deleteCartItem"]),
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
    decreaseItem(item) {
      if (!isLogged()) {
        this.$router.push("/signin");
      } else {
        this.decreaseCartItem({
          userId: this.userId,
          product: { ...item },
        });
      }
    },
    deleteItem(item) {
      if (!isLogged()) {
        this.$router.push("/signin");
      } else {
        this.deleteCartItem({
          userId: this.userId,
          product: { ...item },
        });
      }
    },
    checkout() {
      if (!isLogged()) {
        this.$router.push("/signin");
      } else {
        this.$router.push("/checkout");
      }
    },
  },
};
</script>

<style scoped>
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
  width: 100%;
  height: 100%;
}
.banner .summaryInfo {
  background-color: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 1rem 1rem 0;
  padding: 1rem;
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

button.checkout {
  background-color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #000;
  transition: transform 450ms;
}
.banner .summaryInfo button:hover,
button.checkout:hover {
  box-shadow: 1px 1px 2px;
}

.cartInfo {
  margin: 3rem auto;
  width: 80%;
}

.cartInfo h5 {
  font-size: 1rem;
  text-shadow: 0.5px 0.5px;
}

.cartInfo h4 {
  font-size: 1.5rem;
  text-shadow: 0.5px 0.5px;
}
body {
  font-family: "lato", sans-serif;
}

.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.actions button {
  border: none;
  background-color: #fbc130;
  padding: 0.56rem;
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 0.3rem;
  cursor: pointer;
  box-shadow: 0.5px 0.5px 1px #808080a8;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 1rem;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
}
.responsive-table .table-header {
  background-color: #fbc130;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  align-items: center;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.col {
  width: 23%;
}

@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}
</style>
