<template>
  <div class="main-header">
    <div class="right">
      <img
        src="../../assets/Amazon-Logo-ligt.png"
        class="logo"
        width="70"
        height="40"
        alt="Logo"
      />
      <div class="location">
        <i class="bi bi-geo-alt" />
        <div class="action-options">
          <span>Hello</span><br />
          <span><b>Select Your Address</b></span>
        </div>
      </div>
    </div>
    <div class="middle">
      <form>
        <select>
          <option>All</option>
          <option>Mobiles</option>
          <option>Computers</option>
        </select>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div class="left">
      <div>
        <span> Hello Guest </span><br />
        <span><b>Sign In</b></span>
      </div>
      <div>
        <span>Return</span><br />
        <span><b>Orders</b></span>
      </div>
      <div>
        <span>Your</span><br />
        <span><b>Prime</b></span>
      </div>
      <div>Cart</div>
    </div>
  </div>
</template>

<script></script>

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

div.main-header .middle form * {
  min-height: 30px;
}
div.main-header .middle form input {
  width: 15rem;
}

div.main-header .middle form *:focus {
  border: 1.88px solid rgb(25, 186, 240);
  outline: none;
}

</style>
