<template>
  <div>
    <div class="pin-list-item q-py-sm row justify-around" v-for="pin in pinList" :key="pin">
      <span>{{ pin.pin }}</span>
      <span>{{ pin.status ? 'check' : 'nchck' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

const pinList = ref();

onBeforeMount(() => {
  pinList.value = [];
  for (let index = 0; index < 1000; index++) {
    const element = {
      pin: index < 10 ? '000' + index : index < 100 ? '00'+index : index < 1000 ? '0'+index : index,
      status: !!(index%2)
    };
    pinList.value.push(element);
  }
});

</script>