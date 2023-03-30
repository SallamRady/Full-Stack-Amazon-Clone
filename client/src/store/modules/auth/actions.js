import { ServerUrl } from "../../../utils/global";
import { set } from "../../../utils/localStorage";
import jwt_decode from "jwt-decode";

export default {
  async signup(context, payload) {
    let {
      name,
      email,
      password,
      confirmPassword,
      country,
      city,
      postalCode,
      state,
      street,
    } = payload;
    const body = JSON.stringify({
      name,
      email,
      password,
      confirmPassword,
      country,
      city,
      postalCode,
      state,
      street,
    });
    console.log("body", body);

    fetch(ServerUrl + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "Success") {
          window.location.href = "http://localhost:8080/#/signin";
        } else {
          console.log("Validate ya man");
        }
        console.log("data", data);
      })
      .catch((err) => {
        console.log("error in authentication signup", err);
      });
  },

  async signin(context, payload) {
    let { email, password } = payload;
    const body = JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    });

    fetch(ServerUrl + "signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        context.commit("setUser", { token: data.token });
        console.log("data : ", data);
        // let decoded = jwt.decoded(data.token, "somesecret101");
        let decoded = jwt_decode(data.token, "somesecret101");
        decoded = decoded._doc;
        set({
          userId: decoded._id,
          address: decoded.address,
          email: decoded.email,
          name: decoded.name,
          token: data.token,
        });
        window.location.href = "http://localhost:8080/";
      })
      .catch((err) => {
        console.log("error in authentication signin", err);
      });
  },

  async logout() {
    let userId = localStorage.getItem("userId");
    const body = JSON.stringify({
      userId,
    });

    fetch(ServerUrl + "logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "Success") {
          return {status:data.status};
        }
        return {status:data.status};
      })
      .catch((err) => {
        console.log("error in authentication signout", err);
      });
  },
};
