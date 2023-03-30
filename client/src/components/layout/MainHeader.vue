<template>
  <div class="main-header">
    <div class="right">
      <router-link to="/">
        <img
          src="../../assets/Amazon-Logo-ligt.png"
          class="logo"
          width="70"
          height="40"
          alt="Logo"
        />
      </router-link>
      <router-link to="/" class="location">
        <i style="margin-right: 0.4rem" class="fa-solid fa-location-dot"></i>
        <div class="action-options">
          <span>Hello</span><br />
          <span
            ><b>Our Users From, {{ country }}</b></span
          >
        </div>
      </router-link>
    </div>
    <div class="middle">
      <form>
        <select>
          <option v-for="item in categories" :key="item._id">
            {{ item.title }}
          </option>
        </select>
        <input type="search" />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <div class="left">
      <router-link v-if="!logged" to="/signin">
        <span> Hello Guest </span><br />
        <span><b>Sign In</b></span>
      </router-link>
      <button v-else @click="signout" class="signout">
        <span> Hello {{ userName }} </span><br />
        <span><b>Sign Out</b></span>
      </button>
      <router-link to="/">
        <span>Return</span><br />
        <span><b>Orders</b></span>
      </router-link>
      <router-link to="/">
        <span>Your</span><br />
        <span><b>Prime</b></span>
      </router-link>
      <router-link to="/cart" class="cart">
        <span>{{ cartQuantity }}</span>
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { countries } from "moment-timezone/data/meta/latest.json";
import { mapGetters } from "vuex";
import { clear, isLogged } from "../../utils/localStorage";

export default {
  date: () => ({
    country: "",
  }),
  props: ["categories"],
  computed: {
    ...mapGetters(["userName", "logged", "cartQuantity"]),
  },
  created() {},
  async beforeMount() {
    let { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    // this.country = countries.filter((item) => item.zones[0] == timeZone);
    Object.keys(countries).forEach((item) => {
      if (("zones", countries[item].zones[0] == timeZone)) {
        this.country = countries[item].name;
      }
    });
    console.log("country", timeZone, this.country, countries);
  },
  methods: {
    signout() {
      clear(["token", "email"]);
      this.$store.commit("setIsLogged", { value: isLogged() });
    },
  },
};
</script>

<style  scoped>
div.main-header {
  background-color: #131921;
  min-height: 89px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 30;
}

div.main-header > div {
  width: 33%;
  color: #fff;
  display: flex;
  justify-content: space-around;
}

div.main-header .right .location {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

div.main-header .middle form {
  display: flex;
  justify-content: center;
  height: 2rem;
}
div.main-header .middle form input {
  width: 15rem;
}
div.main-header .middle form button {
  width: 3rem;
  background-color: #fbc130;
  color: #fff;
  font-size: 1rem;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

div.main-header .middle form * {
  border: none;
  outline: none;
}

div.main-header .middle form button:hover {
  box-shadow: 1px 1px 2px #fbc130;
}

select {
  border-radius: 8px 0 0 8px;
}

div.main-header .middle form *:focus {
  border: 1.88px solid #fbc130;
  outline: none;
}

.cart {
  font-size: 1.5rem;
}
.cart span {
  color: #fbc130;
  font-weight: bolder;
}

a {
  color: #fff;
  text-decoration: none;
}

button.signout {
  outline: none;
  border: none;
  background: no-repeat;
  color: #fff;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
}
</style>
