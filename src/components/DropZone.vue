<template>
    <div>
        <q-uploader v-model="uploader"/>
    </div>
</template>


<script setup>
import { ref } from 'vue';


const uploader = ref(null)

</script>