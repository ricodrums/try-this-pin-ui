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
      ></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { api } from 'src/boot/axios';
import { Pin } from './models';

const pinList = ref();

onBeforeMount(async () => {
  pinList.value = await getPinList();
  console.log(pinList.value);
})

const getPinList = async () => {
  let response: Pin[] = (await api.get('')).data;
  return response;
};

</script>
