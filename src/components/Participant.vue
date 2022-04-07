<template>
<div >
  <q-file
    clearable
    accept=".xls, .xlsx"
    standout="bg-primary text-white"
    v-model="model"
    label="Select participant data"
    @clear="tableRows = []"
  >
    <template v-slot:prepend>
      <q-icon name="folder_open" />
    </template>
    <template #after>
      <q-btn v-if="!tableRows.length" @click.prevent="getData">Upload</q-btn>
    </template>
  </q-file>

    <q-table flat v-if="tableRows.length" table-class="q-mt-md full-width" :columns="columns" :rows="tableRows">
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">{{ col.label }}</q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr class="text-center" :props="props">
          <q-td key="name" :props="props">{{ props.row.no }}</q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="name" :props="props">{{ props.row.phone }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import readXlsxFile from 'read-excel-file'


const model = ref(null)
const columns = [
  {
    name: 'no',
    label: 'NO',
    align: 'center'
  },
  {
    name: 'name',
    label: "Participant Name",
    align: 'left'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    align: 'left'
  }
]

const tableRows = ref([])

const getData = async () => {
  if (model.value) {

    tableRows.value = []
    await readXlsxFile(model.value).then(rows => {
      rows.shift()
      rows.forEach(each => {
        let data = {
          no: (rows.indexOf(each) + 1),
          phone: each[0],
          name: each[1]
        }

        tableRows.value.push(data)
      })

    })
  }

}

const showData = () => {
  console.log(tableRows.value);
}

</script>
