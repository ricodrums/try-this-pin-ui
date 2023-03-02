<template>
  <div>
    <div class="pin-list-item q-py-sm row justify-evenly" v-for="pin in pinList" :key="pin.pin">
      <q-btn flat dense
        :color="!!pin.hasBeenTried ? 'positive' : 'negative'"
        :label="pin.pin"></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pinList = ref([{
  pin: '1234',
  hasBeenTried: 0
}]);

</script>