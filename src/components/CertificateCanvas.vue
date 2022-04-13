<template>
  <q-btn @click="onDownload" class="fixed-bottom-left">download</q-btn>
  <!-- <q-btn @click="moveText" class="fixed-bottom-left">Move</q-btn> -->
  <div ref="capture" :style="`height:70vh; background:no-repeat center url(${imgUrl});background-size:contain`">
    <q-tooltip class="bg-transparent">
      <q-card class="bg-secondary q-pa-md font-bold">Drag participant name to right position</q-card>
    </q-tooltip>
    <v-stage ref="stage" :config="stageSize" class="bg-transparent text-center z-top">
      <v-layer ref="layer" class="text-center">
        <v-text
          ref="text"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          @mousemove="onMouseMove"
          @mouseout="onMouseOut"
          @transformend="handleTransformEnd"
          :config="textConfig"
        />


      </v-layer>
    </v-stage>

    <img ref="template" :src="imgUrl" class="absolute-center full-width hidden" />
    <canvas ref="canvas" style="height:600px;width:500px"></canvas>
    <!-- </img> -->
    <!-- <q-input v-model="textConfig.text"></q-input> -->
    <!-- <q-img :src="newImgUrl" /> -->
  </div>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from 'vue';
import { useStore } from 'src/stores/useStore';
import Konva from 'vue-konva'

import domtoimage from 'dom-to-image-more'

const store = useStore()
const canvas = ref(null)
const template = ref(null)
const imgUrl = computed(() => store.imgSrc)
const newImgUrl = ref('')
const capture = ref(null)
const layer = ref(null)
const stage = ref(null)
const text = ref(null)
const name = ref('Move this text to the right position')
const textConfig = ref({
  text: name.value,
  fontSize: 24,
  fontFamily: 'Calibri',
  align: 'center',
  x: 300,
  y: 300,
  width: 400,
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



const generateCertificate = (capture) => {
  domtoimage.toPng(capture).then(dataUrl => {
    newImgUrl.value = dataUrl;
  }).catch(e => {
    console.log(e);
  })
}

const onDownload = () => {
  // textConfig.value.fill = 'black'
  // for(let i = 0; i < store.getParticipant.length;i++){
  //   textConfig.value.text = store.getParticipant[i].name
  //   generateCertificate(capture.value)
  // }

  let ctx = canvas.value.getContext('2d')
  ctx.drawImage(template.value, 10, 10)
  // console.log(ctx);
}


onMounted(() => {

  // console.log(konva);
})

const onMouseMove = () => {
  text.value.getNode().parent.parent.attrs.container.style.cursor = 'move'
}

const onMouseOut = () => [

  text.value.getNode().parent.parent.attrs.container.style.cursor = ''
]
const handleDragStart = () => {
  isDragging.value = true;
  textConfig.value.fill = 'red'
}
const handleDragEnd = () => {
  textConfig.value.fill = 'green'
  isDragging.value = false;
}

const handleTransformEnd = (e)=>{
  console.log(e);
}
</script>
