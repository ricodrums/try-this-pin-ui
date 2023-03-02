<template>
  <div class="pin-container">
    <div class="header text-muted q-pa-sm row justify-end">{{selectedPin.hasBeenTried ? 'Tried' : 'Not tried'}}</div>
    <div class="body q-py-lg">
      <q-input type="number" class="pin-input" dense :model-value="selectedPin.value"></q-input>
    </div>
    <div class="footer row justify-around">
      <q-btn
        class="q-px-md"
        dense
        no-caps
        color="positive"
        @click="getRandomPin()"
        label="Random"
      ></q-btn>
      <q-btn
        class="q-px-md"
        dense
        no-caps
        color="primary"
        @click="pinTried()"
        label="Next Pin"
      ></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pin } from './models';
import { api } from 'src/boot/axios';

const props = defineProps<{
  selectedPin: Pin
}>()

const emit = defineEmits(['updatePinList']);

const pinTried = () => {
  api.post('/'+props.selectedPin.id);
  emit('updatePinList', props.selectedPin);
}

const getRandomPin = () => {
  console.log('getRandomPin');
}

</script>
