<template>
    <!-- <q-page> -->
    <!-- <div class="q-pa-md column items-start q-gutter-y-md"> -->
        <q-img
            :src="imgUrl"
            spinner-color="white"
            draggable
            :ratio="16/9"
            mode="cover"
        />
    <!-- </div> -->
    <!-- </q-page> -->
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'src/stores/useStore';

const store = useStore()
const imgUrl = ref(store.imgSrc)
console.log(imgUrl.value);
</script>