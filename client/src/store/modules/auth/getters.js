export default {
  userName() {
    return localStorage.getItem("name");
  },
  email() {
    return localStorage.getItem("email");
  },
  userId() {
    return localStorage.getItem("userId");
  },
  token() {
    return localStorage.getItem("token");
  },
  logged(state) {
    return state.isLoggedIn;
  },
};
