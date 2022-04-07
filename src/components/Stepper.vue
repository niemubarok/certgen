<template>
  <div class="q-px-md flex flex-center full-width full-height">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      style="max-width: 95%; max-height:95%"
      :contracted="$q.screen.lt.sm"
      flat
      animated
      keep-alive
    >
      <q-step
        :name="1"
        title="Upload Certificate Design"
        prefix="1"
        done-icon="check"
        done-color="positive"
        :done="step > 1"
        class="full-width full-height flex flex-center"
      >
        <!-- <div class="flex flex-center full-width full-height"> -->
        <ImagePicker ref="picker" />

        <!-- </div> -->
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        title="Edit Position"
        caption="Move participant name to the right position"
        :done="step > 2"
        done-icon="check"
        done-color="positive"
        style="min-height: 90vh;"
      >
        <CertificateCanvas />
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        title="Upload Participant"
        caption="Import name and whatsapp number"
        style="min-height: 200px;"
        :done="step > 3"
        done-icon="check"
        done-color="positive"
      >This step won't show up because it is disabled.</q-step>

      <q-step :name="4" prefix="4" title="Generate & Send" style="min-height: 200px;">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div>
            <q-btn
              @click="$refs.stepper.next()"
              class="fixed-bottom-right q-mr-xl q-mb-xl"
              color="primary"
              :disable="store.imgSrc == 'https://picsum.photos/800/500'"
              :label="step === 4 ? 'Finish' : 'Continue'"
            ></q-btn>
            <q-tooltip v-if="store.imgSrc == 'https://picsum.photos/800/500'" class="text-white bg-secondary">Please select your Certificate first</q-tooltip>
          </div>
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm fixed-bottom-right"
            style="bottom:50px;right:150px"
          />
        </q-stepper-navigation>
      </template>

      <!-- <template v-slot:message>
                <q-banner
                    v-if="step === 1"
                    class="bg-purple-8 text-white q-px-lg"
                >Campaign settings are important...</q-banner>
                <q-banner
                    v-else-if="step === 2"
                    class="bg-orange-8 text-white q-px-lg"
                >The ad group helps you to...</q-banner>
                <q-banner
                    v-else-if="step === 3"
                    class="bg-green-8 text-white q-px-lg"
                >The Ad template is disabled - this won't be displayed</q-banner>
                <q-banner
                    v-else
                    class="bg-blue-8 text-white q-px-lg"
                >The final step is creating the ad...</q-banner>
      </template>-->
    </q-stepper>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ImagePicker from './ImagePicker.vue'
import CertificateCanvas from './CertificateCanvas.vue';
import { useStore } from 'src/stores/useStore';

const store = useStore()
const step = ref(1)
const picker = ref()

onMounted(() => {
  console.log(store.imgSrc);

})
// const store = useStore()

</script>
