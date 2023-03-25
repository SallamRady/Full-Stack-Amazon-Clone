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
          <span><b>Our Users From, {{country}}</b></span>
        </div>
      </router-link>
    </div>
    <div class="middle">
      <form>
        <select>
          <option>All</option>
          <option>Mobiles</option>
          <option>Computers</option>
        </select>
        <input type="search" />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <div class="left">
      <router-link to="/signin">
        <span> Hello Guest </span><br />
        <span><b>Sign In</b></span>
      </router-link>
      <router-link to="/">
        <span>Return</span><br />
        <span><b>Orders</b></span>
      </router-link>
      <router-link to="/">
        <span>Your</span><br />
        <span><b>Prime</b></span>
      </router-link>
      <router-link to="/cart" class="cart">
        <span>0</span>
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { countries } from "moment-timezone/data/meta/latest.json";
export default {
  date: () => ({
    country: '',
  }),
  beforeMount() {
    let { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    // this.country = countries.filter((item) => item.zones[0] == timeZone);
    Object.keys(countries).forEach((item) => {
      if('zones',countries[item].zones[0] == timeZone){
        this.country = countries[item].name;
      }
    });
    console.log("country", timeZone, this.country, countries);
  },
};
</script>

<style>
div.main-header {
  background-color: #131921;
  min-height: 89px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
</style>
