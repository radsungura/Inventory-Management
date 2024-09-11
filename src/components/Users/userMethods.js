import { useUsersStore } from "stores/users";
import { ref, computed, watch } from "vue";
import { showNotification } from "src/Utilities/utils";
import { useQuasar } from "quasar";

export default function userMethods() {
  const userStore = useUsersStore();
  const $q = useQuasar();

  const loadingUsers = computed(() => userStore.getFetchingUsers);
  const usersData = computed(() => userStore.getUsers);
  const actionFetchUsersData = () => {
    userStore
      .fetchUsers()
      .then()
      .catch((error) => {
        showNotification($q, "negative", "Error fetching users");
      });
  };

  return {
    usersData,
    loadingUsers,
    actionFetchUsersData,
  };
}
