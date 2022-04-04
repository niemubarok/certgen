<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      :limits="[20,100]"
      style="height: 90vh;width:90vw"
      keep-alive
    >

      <template v-slot:before>
        <div class="q-pa-md">
         <slot name="left"></slot>
        </div>
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
         <slot name="right"></slot>
        </div>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      splitterModel: ref(50) // start at 50%
    }
  }
}
</script>
