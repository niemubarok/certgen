<template>
  <div class="q-pa-md column items-start q-gutter-y-md">
   <ImagePicker class="absolute-bottom z-top"/>
   <Splitter>
    <template #left>
    <h1>test</h1>
    </template>

    <template #right>
    <h1>right</h1>
    </template>
   </Splitter>
  </div>
</template>

<script setup>
import ImagePicker from "../components/ImagePicker.vue";
import Splitter from "src/components/Splitter.vue";

</script>
