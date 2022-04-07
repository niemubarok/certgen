
<template>
  <div class="flex flex-center">
    <img
      class="relative"
      width="600px"
      height="500px"
      id="image"
      src="https://picsum.photos/600/400"
    />
      <h4 class="absolute-center z-top" draggable="true" @dragstart="onDrag">{{text}}</h4>

  </div>
  <q-btn @click="changeText">change</q-btn>
<q-input v-model="text"></q-input>
  <q-btn @click="drawImage">capture</q-btn>

  <hr />

  <div>
    <canvas ref="canvas" :width="w" :height="w"></canvas>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
const image = ref(null)
const ctx = ref('')
const text = ref("Husni Mubarok arina muntazah")
let w = 0
let h = 0

const changeText = () => {
  text.value = "kjhdkj"
}

const drawImage=()=>{

  var img = document.getElementById('image')
  ctx.value.drawImage(img, 10, 10)
  // ctx.value.fillText("HELLLLO", 100, 50)
  // console.log(ctx.value);
}

const onDrag = () => {
  console.log("executed");
}

onMounted(() => {
  w = canvas.value.width  = window.innerWidth * 0.9;
  h = canvas.value.height  = window.innerHeight * 0.9;
  ctx.value = canvas.value.getContext("2d")
  console.log(w)
})

</script>





