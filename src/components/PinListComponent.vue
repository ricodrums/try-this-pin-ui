<template>
  <div>
    <div class="pin-list-item q-py-sm row justify-evenly" v-for="pin in pinList" :key="pin.pin">
      <q-btn flat dense
        :color="!!pin.status ? 'positive' : 'negative'"
        :label="pin.pin"></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import pinListJSON from 'src/assets/pinList.json';

const pinList = ref(pinListJSON);

</script>