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
import { computed } from 'vue'
import { Pin } from './models';
import { api } from 'src/boot/axios';
import { usePinStore } from 'src/stores/pin';

const pinStore = usePinStore();

const selectedPin = computed(() => pinStore.getSelectedPin);

const pinTried = () => {
  api.post('/'+selectedPin.value.id);
  api.get('/'+selectedPin.value.id).then(resp => { 
    pinStore.setNewPinList(resp.data);
  });
  pinStore.setSelectedPin(pinStore.getNextPin);
}

const getRandomPin = () => {
  console.log('getRandomPin');
}

</script>
