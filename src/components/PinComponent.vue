<template>
  <div class="pin-container">
    <div class="header q-pa-sm row justify-end">
      tried
    </div>
    <div class="body q-py-lg">
      <q-input dense label="try this" :model-value="currentPin"></q-input>
    </div>
    <div class="footer row justify-evenly">
      <q-btn class="q-px-md" dense no-caps color="primary" @click="pinTried()">Next</q-btn>
      <q-btn class="q-px-md" dense no-caps color="primary" @click="pinTried()">Next</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const currentPin = ref('1234');

const pinTried = () => {
  console.log(currentPin.value);
}

</script>

<style lang="scss">
.pin-container {
  width: 70%;
  max-width: 45rem;
}
</style>