export default {
  setUser(state, payload) {
    state.isLoggedIn = true;
    state.email = payload.email;
    state.token = payload.token;
  },
  setIsLogged(state,payload){
    state.isLoggedIn = payload.value;
  }
};
