import {defineStore} from 'pinia';
import {api} from "boot/axios";

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    fetchingUsers: false,
  }),

  getters: {
    getUsers: (state) => state.users,
    getFetchingUsers: (state) => state.fetchingUsers,
  },

  actions: {
    fetchUsers() {
      this.fetchingUsers = true
      return new Promise((resolve, reject) => {
        api
          .get('users/get')
          .then((response) => {
            this.users = response.data
            this.fetchingUsers = false
            resolve(response)
          })
          .catch((error) => {
            this.fetchingUsers = false
            reject(error)
          })
      })
    },

  },

});
