import { ServerUrl } from "../../../utils/global";

export default {
  addCartItem(context, payload) {
    let { userId, product } = payload;
    let token = localStorage.getItem("token");

    const body = JSON.stringify({
      productId: product._id,
      userId,
    });

    console.log(body);

    fetch(ServerUrl + "addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + token,
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("response -> ", result);
        context.commit("addToCart", { product });
      })
      .catch((err) => {
        console.log("error in add cart item", err);
      });
  },
  decreaseCartItem(context, payload) {
    let { userId, product } = payload;
    let token = localStorage.getItem("token");
    const body = JSON.stringify({
      productId: product._id,
      userId,
    });
    console.log("body:", body);

    fetch(ServerUrl + "decreasedFromCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + token,
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result : ", result);
        context.commit("decreaseFromCart", { product });
      })
      .catch((err) => {
        console.log("error in decreaseFromCart cart item", err);
      });
  },
  deleteCartItem(context, payload) {
    let { userId, product } = payload;
    let token = localStorage.getItem("token");
    const body = JSON.stringify({
      productId: product._id,
      userId,
    });
    console.log("body:", body);

    fetch(ServerUrl + "deleteCartItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + token,
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result : ", result);
        context.commit("deleteCartItem", { product });
      })
      .catch((err) => {
        console.log("error in decreaseFromCart cart item", err);
      });
  },
};
