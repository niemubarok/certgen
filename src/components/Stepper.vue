<template>
  <div class="q-px-md flex flex-center full-width">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      style="max-width: 95%; max-height:95%"
      :contracted="$q.screen.lt.sm"
      animated
      keep-alive
      flat
      class="full-width"
    >
      <!-- STEP 1 -->
      <q-step
        :name="1"
        title="Upload Participant Data"
        prefix="1"
        done-icon="check"
        done-color="positive"
        :done="step > 1"
      >
        <div class="flex flex-wrap items-center flex-center">
          <q-card class="bg-red-2 q-mt-md q-mr-sm q-py-md q-pr-md self-start" bordered flat>
            <div class="flex flex-center">
              <q-avatar color="red-3">
                <q-icon name="warning" size="sm" color="red-2"></q-icon>
              </q-avatar>
            </div>
            <ol>
              <li>File extention must be .xlsx.</li>
              <li>Data must start from second row</li>
              <li>First column must be participant name</li>
              <li>Second column must be whatsapp number</li>
            </ol>
          </q-card>
          <div class="col col-md-10" style="min-width:50%;">
            <Participant />
          </div>
        </div>
      </q-step>

      <!-- STEP 2 -->
      <q-step
        :name="2"
        prefix="2"
        title="Upload Certificate's Design"
        caption
        :done="step > 2"
        done-icon="check"
        done-color="positive"
        style="min-height: 90vh;"
        class="flex flex-center"
      >
        <ImagePicker />
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        title="Adjust Name's Position"
        caption="Move participant's name to the right position"
        style="min-height: 200px;"
        :done="step > 3"
        done-icon="check"
        done-color="positive"
      >
        <CertificateCanvas />
      </q-step>

      <q-step :name="4" prefix="4" title="Generate & Send" style="min-height: 200px;"></q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div>
            <q-btn
              @click="handleNextButton()"
              class="fixed-bottom-right"
              style="bottom:10px;right:50px"
              color="primary"
              :label="step === 4 ? 'Finish' : 'Continue'"
              :disable="isDisable()"
            ></q-btn>
            <q-tooltip v-if="isDisable()" class="text-white bg-secondary">{{ tooltip }}</q-tooltip>
          </div>
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="handleBackButton()"
            label="Back"
            class="q-ml-sm fixed-bottom-right"
            style="bottom:10px;right:150px"
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
import Participant from './Participant.vue';

const store = useStore()
const step = ref(1)
const stepper = ref(null)
const picker = ref()
const tooltip = ref('')

const handleBackButton = () => {
  stepper.value.previous()
  // if(step.value == 3){
  // store.clearImgSrc()
  // }
}

const handleNextButton = () => {
  stepper.value.next()
  console.log(store.participant);
}

const isDisable = () => {
  if (step.value == 1 && !store.participant.length) {
    tooltip.value = "Please import your data first"
    return true
  } else if (step.value == 2 && store.getImgSrc == '') {
    tooltip.value = "Please import your certificate design first"
    return true
  }
}

onMounted(() => {
  console.log(store.imgSrc);

})
// const store = useStore()

</script>
