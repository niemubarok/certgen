<template>
  <!-- <div class="row"> -->
  <!-- <q-card tag="div" class="col-4 q-mr-sm q-py-md" bordered flat>
      <ol>
        <li>The file should .xls or .xlsx.</li>
        <li>First column should be participant name</li>
        <li>Second column should be whatsapp number</li>
      </ol>
  </q-card>-->
  <!-- <div class="col"> -->
  <q-file
    clearable
    accept=".xls, .xlsx"
    standout="bg-primary text-white"
    v-model="model"
    label="Select participant data"
    @clear="onClear"
    class="q-my-md"
  >
    <template v-slot:prepend>
      <q-icon name="folder_open" />
    </template>
    <template #after>
      <div>
        <q-btn :disable="!model" v-if="!tableRows.length" @click.prevent="onImport">Import</q-btn>
        <q-tooltip v-if="!model">Please select yout data first</q-tooltip>
      </div>
    </template>
  </q-file>

  <!-- v-if="tableRows.length" -->
  <q-table table-class="q-mt-md full-width" :columns="columns" :rows="tableRows">
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">{{ col.label }}</q-th>
      </q-tr>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          <p class="text-center">{{ props.row.no }}</p>
        </q-td>
        <q-td key="name" :props="props">{{ props.row.name }}</q-td>
        <q-td key="name" :props="props">{{ props.row.phone }}</q-td>
      </q-tr>
    </template>
  </q-table>
  <!-- </div> -->

  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'
import readXlsxFile from 'read-excel-file'
import { useStore } from 'src/stores/useStore'
import { useQuasar } from 'quasar'


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
const store = useStore()
const $q = useQuasar()
const onImport = async () => {
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

        store.setParticipant(data)
      })

    })
  } else {
    $q.notify({
      message: "Select your data first",
      textColor: 'black',
      color: 'red-2'
    })
  }

}

const onClear = ()=>{
  tableRows.value = []
  store.$reset()
}
const showData = () => {
  console.log(tableRows.value);
}

</script>
