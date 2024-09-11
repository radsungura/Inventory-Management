import { useProductsStore } from "stores/products";
import { ref, computed, watch } from "vue";
import { showNotification } from "src/Utilities/utils";
import { useQuasar } from "quasar";

export default function productsMethods() {
  const productsStore = useProductsStore();
  const $q = useQuasar();

  const addProductsFormRef = ref(null);

  //Holds Reactive Data (ref)
  const addProductsForm = ref({
    prodID: "",
    name: "",
    arrivalDate: "",
    category: "",
    originalPrice: "",
    qty: "",
    leftQty: "",
    expiryDate: "",
    supplier: "",
  });

  // Data variable that changes to true when submitting

  const submitting = ref(false);

  // Computed properties that hold data

  const loadingProducts = computed(() => productsStore.getFetchingProducts);
  const productsData = computed(() => productsStore.getProducts);

  // In store actions ( Fetches data from store / BE )

  const actionFetchProductsData = () => {
    productsStore
      .fetchProducts()
      .then()
      .catch((error) => {
        showNotification($q, "negative", "Error fetching Products");
      });
  };

  //Validate function

  const btnAddProduct = (actionEdit = false) => {
    addProductsFormRef.value?.validate().then((success) => {
      if (success) {
        submitting.value = true;

        if (actionEdit) {
          updateProductAction();
        } else {
          addProductAction();
        }
      } else {
        showNotification($q, "negative", "Please fill the form");
      }
    });
  };

  // Calling Add product function from store

  const addProductAction = () => {
    productsStore
      .addProducts(addProductsForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Task Saved");
        context.emit("success");
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error adding Products");
      });
  };

  // Update Product function

  const updateProductAction = () => {
    productsStore
      .updateProducts(addProductsForm.value)
      .then(() => {
        submitting.value = false;
        showNotification($q, "positive", "Product Updated");
        context.emit("success");
      })
      .catch((err) => {
        submitting.value = false;
        showNotification($q, "negative", "Error updating Products");
      });
  };

  //Returns these functions to be used anywhere you import within vue component
  return {
    productsData,
    loadingProducts,
    actionFetchProductsData,
    addProductsFormRef,
    addProductsForm,
    btnAddProduct,
    submitting,
  };
}
