<template>
  <div
    style="border: 4px dashed #CCCCCC;height:60vh"
    class="bg-grey-2 rounded-borders q-px-md flex flex-center items-center text-center"
  >
    <q-uploader
      label="Custom list"
    >
      <!-- url="http://localhost:4444/upload"
      multiple -->

      <template #header>
      <div class="bg-grey-3">
      <q-uploader-add-trigger/>
       <q-icon name="upload" size="xl" color="grey-7"/>
      </div>
      </template>
      <template v-slot:list="scope">
        <q-list separator>
          <q-item v-for="file in scope.files" :key="file.__key">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                Status: {{ file.__status }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              v-if="file.__img"
              thumbnail
              class="gt-xs"
            >
              <img :src="file.__img.src">
            </q-item-section>

            <q-item-section top side>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="scope.removeFile(file)"
              />
            </q-item-section>
          </q-item>

        </q-list>
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