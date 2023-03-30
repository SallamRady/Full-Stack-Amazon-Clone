<template>
  <div class="login">
    <router-link to="/" class="logoImg">
      <img
        src="../assets/amazon_logo.png"
        width="160"
        height="150"
        alt="amazon logo"
      />
    </router-link>
    <h2>Sing<span style="color: #fbc000">In</span></h2>
    <form @submit.prevent="handleSubmit" method="post">
      <div class="input-control">
        <label>Email address</label>
        <input type="email" v-model="email" placeholder="Enter Your Email" />
        <small>We'll never share your email with anyone else.</small>
      </div>
      <div class="input-control">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div>
        <input type="checkbox" />
        <label>Remember me for a month</label>
      </div>
      <div class="actions">
        <button type="submit">Sign In</button>
        <router-link to="/signup">I don't have an account.</router-link>
      </div>
    </form>
  </div>
  <ErrorAlert title="Error 101" content="content 101" />
</template>

<script>
import { mapActions } from "vuex";
import ErrorAlert from "@/components/layout/ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions({ signin: "signin" }),
    handleSubmit() {
      this.$store.dispatch("signin", {
        password: this.password,
        email: this.email,
      });
    },
  },
};
</script>

<style>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login a.logoImg {
  position: absolute;
  top: 0%;
  left: 0%;
}

.login h2 {
  font-size: 1.7rem;
  text-shadow: 0.6px 0.6px 1px;
}
.login .input-control {
  display: flex;
  flex-direction: column;
}
.login form > div {
  margin-top: 0.5rem;
}

.login .input-control * {
  margin-top: 0.2rem;
}

.login .input-control label {
  font-size: 1.1rem;
  font-weight: 500;
}
.login .input-control input {
  height: 2rem;
  font-size: 1rem;
  outline: none;
}

.login form .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login form .actions button {
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

.login form .actions button:hover {
  box-shadow: 1px 1px 2px;
}

.login form .actions a {
  color: #5971fb;
  font-size: 1.01rem;
  font-weight: 530;
}
</style>
