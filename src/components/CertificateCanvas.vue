<template>
  <q-btn @click="onDownload" class="fixed-bottom-right">download</q-btn>
  <q-btn @click="moveText" class="fixed-bottom-left">Move</q-btn>
  <div ref="capture">
    <q-img :src="imgUrl" class="transparent full-width" height="600px" fit="scale-down">
      <q-tooltip class="bg-transparent">
        <q-card class="bg-secondary q-pa-md font-bold">Drag participant name to right position</q-card>
      </q-tooltip>
      <!-- <h4 class="absolute-center z-top" draggable="true" @dragstart="onDrag">{{textConfig.text}}</h4> -->
      <v-stage ref="stage" :config="stageSize" class="bg-transparent text-center">
        <v-layer ref="layer" class="text-center">
          <v-text
            ref="text"
            @dragstart="handleDragStart"
            @dragend="handleDragEnd"
            @mousemove="onMouseMove"
            :config="textConfig"
          />
        </v-layer>
      </v-stage>

      <canvas id="canvas" ></canvas>
    </q-img>
    <!-- <q-input v-model="textConfig.text"></q-input> -->
    <q-img :src="newImgUrl" />
  </div>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import { useStore } from 'src/stores/useStore';

import domtoimage from 'dom-to-image-more'

const store = useStore()
const imgUrl = computed(() => store.imgSrc)
const newImgUrl = ref('')
const capture = ref()
const layer = ref(null)
const stage = ref(null)
const text = ref()
const textConfig = ref({
  text: 'Husni Mubarok',
  fontSize: 24,
  fontFamily: 'Calibri',
  align:'center',
  x: 300,
  y: 300,
  width:400,
  draggable: true,
  fill: 'green'
})

const width = window.innerWidth;
const height = window.innerHeight;

const stageSize = ref(
  {
    width: width,
    height: height,
  })
const isDragging = ref(false)

const moveText = ()=>{
  textConfig.value.text = "skfksdbfhbf"
}

const onDownload = () => {
  // textColor.value = 'black'
  domtoimage.toPng(capture.value).then(dataUrl => {
    newImgUrl.value = dataUrl;
  }).catch(e => {
    console.log(e);
  })
}

const onMouseMove = ()=>{
  stage.value.getNode().attrs.container.style.cursor = 'move'
}
const handleDragStart = () => {
  isDragging.value = true;
  textConfig.value.fill = 'red'
}
const handleDragEnd = () => {
  textConfig.value.fill = 'green'
  isDragging.value = false;
}
</script>
