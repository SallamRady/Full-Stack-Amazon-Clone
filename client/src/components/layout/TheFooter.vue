<template>
  <div class="mainFooter">
    <div class="subFooter">
      <div>
        <h5>Get to Know Us</h5>
        <ul>
          <li>About Amazon</li>
          <li>Careers</li>
          <li>Amazon Science</li>
        </ul>
      </div>
      <div>
        <h5>Shop with Us</h5>
        <ul>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Your Addresses</li>
          <li>Your Lists</li>
        </ul>
      </div>
      <div>
        <h5>Make Money with Us</h5>
        <ul>
          <li>Protect and build your brand</li>
          <li>Advertise Your Products</li>
          <li>Sell on Amazon</li>
          <li>Fulfillment by Amazon</li>
        </ul>
      </div>
      <div>
        <h5>Let Us Help You</h5>
        <ul>
          <li>Help</li>
          <li>Shipping & Delivery</li>
          <li>Returns & Replacements</li>
          <li>Amazon App Download</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <strong
        >Created and designed by Eng:Sallam Rady All rights reserved
        2023</strong
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainFooter {
  background-color: #232f3e;
  margin-top: 3rem;
}
.subFooter {
  color: #fff;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: space-around;
}
.subFooter div h5 {
  font-size: 1rem;
}
.subFooter div ul {
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
}
.subFooter div ul li {
  color: gray;
  margin-bottom: 0.2rem;
  cursor: pointer;
}
.subFooter div ul li:hover {
  color: #fff;
  text-decoration: underline;
}
.footer {
  background-color: #131a22;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 3rem 0;
  margin-top: 0;
}
@media only screen and (max-width: 900px) {
  .subFooter {
    flex-wrap: wrap;
    justify-content: start;
  }
}
</style>
