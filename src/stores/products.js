import { defineStore } from "pinia";
import { api } from "boot/axios";
import { appendEditForm, appendForm } from "src/Utilities/formhelpers";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [], //State (holds data)
    fetchingProducts: false, // Boolean state
  }),

  // Returns data in the state
  getters: {
    getProducts: (state) => state.products,
    getFetchingProducts: (state) => state.fetchingProducts,
  },

  // Actions are interactions with BE ie get , Post
  actions: {
    fetchProducts() {
      this.fetchingProducts = true;
      return new Promise((resolve, reject) => {
        //function for loading data that takes time is promise
        api
          .get("products/get")
          .then((response) => {
            this.products = response.data;
            this.fetchingProducts = false;
            resolve(response);
          })
          .catch((error) => {
            this.fetchingProducts = false;
            reject(error);
          });
      });
    },

    addProducts(form) {
      return new Promise((resolve, reject) => {
        api
          .post("products/add", appendForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },

    updateProducts(form) {
      return new Promise((resolve, reject) => {
        api
          .post(`products/set/${form.id}`, appendEditForm(form))
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
});

//entire store calls the endpoint
