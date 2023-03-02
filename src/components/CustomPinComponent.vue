<template>
  <div class="pin-container">
    <div class="header text-muted q-pa-sm row justify-end">Use this input if you miss input the up pin</div>
    <div class="body q-py-lg">
      <q-input type="number" dense :model-value="pinValue"></q-input>
    </div>
    <div class="footer row justify-around">
      <q-btn
        class="q-px-md"
        dense
        no-caps
        color="positive"
        @click="pinTried()"
        label="Save Pin"
      ></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


let pinValue = ref('');

const pinTried = () => {
    console.log('Pin by the user', pinValue.value);
}

</script>

