<template>
  <div class="q-pa-md">
    <q-table
      title="User"
      :rows="usersData"
      :columns="columns"
      row-key="name"
      :loading='loadingUsers'
    >
      <template v-slot:top-right>
        <q-btn @click="showAddUserDialogue=true" color="primary" label="Add User"/>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <template v-for="col in props.cols">
            <q-td class="text-left" v-if="!skipColumns(col.name)" :key="col.name">
              {{ props.row[col.field] }}
            </q-td>

            <q-td v-if="col.name === 'actions'" :key="col.name" width="40px">
              <q-btn
                class="q-pa-xs q-mr-sm"
                size="sm"
                outline
                color="accent"
                icon="edit"
                title="Edit"
                @click="btnShowEditUserDialog(props.row)"
              />
              <q-btn
                class="q-pa-xs"
                size="sm"
                outline
                color="red-10"
                icon="delete"
                title="Delete"
                @click="btnDeleteUser(props.row)"
              />
            </q-td>
          </template>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="showAddUserDialogue">
      <AddUserDialogue></AddUserDialogue>
    </q-dialog>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import AddUserDialogue from "components/Users/AddUserDialogue.vue";
import userMethods from "components/Users/userMethods";


const showAddUserDialogue = ref(false);


const columns = [

  {name: 'id', align: 'left', label: 'id', field: '_id', sortable: false},
  {name: 'name', align: 'left', label: 'name', field: 'name', sortable: true},
  {name: 'username', align: 'left', label: 'username', field: 'username', sortable: true},
  {name: 'Contacts',  align: 'left', label: 'Contacts', field: 'Contacts'},
  {name: 'actions', align: 'left', label: 'Actions', field: 'actions'},
]

const skipColumns = (columnName) => {
  const Columns = ['actions']
  return Columns.includes(columnName)
}

const {
  usersData,
  loadingUsers,
  actionFetchUsersData,

} = userMethods()

onMounted(() => {
  if (!usersData.value.length) {
    actionFetchUsersData()
  }
})

</script>
