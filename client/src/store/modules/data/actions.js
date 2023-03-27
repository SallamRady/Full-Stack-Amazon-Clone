export default {
  async getCategories(context) {
    const url = "http://localhost:8000/categories";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        context.commit("setCategories", { data: data.categories });
      })
      .catch((err) => {
        console.log("error in fetch categories:", err);
      });
  },
};
