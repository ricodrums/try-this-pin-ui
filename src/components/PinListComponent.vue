<template>
  <div>
    <div
      class="pin-list-item q-py-sm row justify-evenly"
      v-for="pin in pinList"
      :key="pin.id"
    >
      <q-btn
        flat
        dense
        :color="!!pin.hasBeenTried ? 'positive' : 'negative'"
        :label="pin.value"
        @click="newPinSelected(pin)"
      ></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, computed } from 'vue';
import { api } from 'src/boot/axios';
import { Pin } from './models';
import { usePinStore } from 'src/stores/pin';

const pinStore = usePinStore();
const pinList =  computed(() => pinStore.getPinList);

onBeforeMount(() => {
  getPinList();
})

const getPinList = (id?: number) => {
  id ??= 0;
  api.get('/'+id).then(resp => { 
    pinStore.setNewPinList(resp.data);
  });
};

const newPinSelected = (newPinSelected: Pin) => {
  getPinList(newPinSelected.id);
  pinStore.setSelectedPin(newPinSelected);
}

</script>
