<template>
  <div
    style="border: 4px dashed #CCCCCC;width:60vw;"
    class="relative bg-grey-2 rounded-borders flex flex-center text-center "
  >
    <q-uploader
    ref="uploader"
      accept=".jpeg,.jpg,.png,image/*"
      flat
      class="bg-grey-3 full-width"
      @added="onAdded"
    >
      <template #header="scope">
        <div v-for="file in scope.files" :key="file.__key">
          <q-btn
            class="absolute-top-right z-top"
            style="top:25px;right:25px;"
            size="12px"
            round
            icon="delete"
            color="red"
            @click="scope.removeFile(file)"
          ></q-btn>
        </div>
      </template>
      <template #list="scope" >

          <q-btn no-caps v-if="!scope.files.length"  flat class="full-width">
            <div class="q-py-md" >
              <q-icon name="upload" size="xl" color="grey-7" />
              <h4 class="text-grey-7">
                <q-uploader-add-trigger />
                Click here to browse
                <br />
                <span class="text-subtitle1">-or-</span>
                <br />Drag n drop your Certificate here
              </h4>
            </div>
          </q-btn>
        <div v-for="file in scope.files" :key="file.__key" >
          <q-img style="max-height:40vh;" fit="contain" :src="store.imgSrc">
            <div class="absolute-bottom text-center text-subtitle2">{{ file.name }}</div>
          </q-img>
        </div>
      </template>
    </q-uploader>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'src/stores/useStore'

const store = useStore()
const imgSrc = ref(null)
// const uploader = ref()
const onAdded = (file) => {
  const blob = URL.createObjectURL(file[0])
  store.setImgSrc(blob)
  //  console.log(blob);
}

// onMounted(() => {
//   console.log(uploader.value)

// })

// const onUploaded = (files) => {
//   console.log(files.xhr);
// }


</script>
<style scoped>
.q-uploader {
  background-color: #efefef;
  /* width: 60vw; */
}
/*

.q-uploader__list {
  background-color: #351c29;
}

.q-uploader--dnd {
  background-color: #c2262e;
} */
</style>
