<template>
  <div class="q-pa-md">
  <q-btn push color="primary">
    <q-file
      v-model="file"
      label="Select Image"
      style="max-width: 300px"
      label-color="white"
      borderless="false"
    >
    <template v-slot:append>
          <q-icon name="attachment" color="orange" />
        </template>
    </q-file>
  </q-btn>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      file: ref(null)
    }
  }
}
</script>
