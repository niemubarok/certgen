<template>
  <div
    style="border: 4px dashed #CCCCCC;height:55vh;width:60vw"
    class="relative bg-grey-2 rounded-borders flex flex-center text-center"
  >

   <!-- <q-badge color="transparent"> -->

      <!-- </q-badge> -->

    <q-uploader
      accept=".jpeg, .jpg, image/*"
      label="Custom list"
      flat
      class="bg-grey-2 full-height full-width"
    >

      <!-- style="width:100%;height:100%" -->
      <template #header="scope">
        <div v-for="file in scope.files" :key="file.__key">
         <q-btn
          class="absolute-top-right z-top"
          style="top:25px;right:25px;"
          size="12px"
          flat
          round
          icon="delete"
          color="red"
          @click="scope.removeFile(file)"
        >
        </q-btn>
        </div>

      </template>
      <template v-slot:list="scope">
        <!-- <q-list separator> -->
        <!-- <div class="bg-grey-2" @click="scope.pickFiles"> -->
        <q-btn no-caps v-if="!scope.files.length" class="full-width full-height" flat>
          <div>
            <q-icon name="upload" size="xl" color="grey-7" />
            <h4 class="text-grey-7">
              <q-uploader-add-trigger />Click here
              <br />
              <span class="text-subtitle1">-or-</span>
              <br />Drag n drop your Certificate here
            </h4>
          </div>
        </q-btn>
        <div v-for="file in scope.files" :key="file.__key">
          <!-- <q-item-section v-if="file.__img" class="gt-xs" :thumbnail="$q.screen.lt.sm"> -->
          <q-img style="max-height:45vh;" fit="contain" :src="file.__img.src">
            <div class="absolute-bottom text-center text-subtitle2">{{ file.name }}</div>
          </q-img>
          <!-- </q-item-section> -->
          <!-- <q-item-label top> -->
          <!-- </q-item-label> -->
        </div>

        <!-- </q-list> -->
      </template>
    </q-uploader>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'src/stores/useStore'

const store = useStore()
const file = ref(null)
const uploader = ref()
const onClick = () => {
  // const blob = URL.createObjectURL(file[0])
  // store.setImgSrc(blob)
  //    console.log(store.getImgSrc);
  uploader.pickFile()
}

onMounted(() => {
  console.log(uploader.value)

})

const onUploaded = (files) => {
  console.log(files.xhr);
}


</script>
<style scoped>
.q-uploader {
  background-color: #efefef;
}

.q-uploader__list {
  background-color: #351c29;
}

.q-uploader--dnd {
  background-color: #c2262e;
}
</style>
