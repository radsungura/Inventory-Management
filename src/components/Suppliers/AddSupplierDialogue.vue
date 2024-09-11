<template>
  <q-card style="min-width: 350px" class="q-pa-md">
    <q-form class="q-gutter-md" ref="addUserFormRef">
      <q-input
        filled
        v-model="addUserForm.name"
        label="Your name *"
        hint="Enter your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUserForm.name"
        label="Your Email*"
        hint="Enter your Email Address*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUserForm.name"
        label="Your Gender*"
        hint="Enter your Gender*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUserForm.name"
        label="Your Contact*"
        hint="Enter your phone number*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUserForm.name"
        label="Your name *"
        hint="Enter your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="addUserForm.name"
        label="Your name *"
        hint="Enter your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
    </q-form>

    <q-card-actions align="right" class="text-primary q-mt-lg">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn flat label="Add User" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const addUserFormRef = ref(null);
const addUserForm = ref({
  name: "",
  email: "",
  gender: "",
  contact: "",
});
</script>
