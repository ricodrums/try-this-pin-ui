<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      persistent
      behavior="desktop"
      :width="100"
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <pin-list-component @update-selected-pin="updateSelectedPin" ref="pinListRef"/>
    </q-drawer>

    <q-page-container>
      <PinComponent :selected-pin="selectedPin" @update-pin-list="updatePinList"/>
      <q-separator />
      <custom-pin-component />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Pin } from 'src/components/models';
import PinListComponent from 'src/components/PinListComponent.vue';
import PinComponent from 'src/components/PinComponent.vue';
import CustomPinComponent from 'src/components/CustomPinComponent.vue';

const leftDrawerOpen = ref(true);
const selectedPin = ref<Pin>({
  id: 1,
  value: '2580',
  hasBeenTried: false
});

const pinListRef = ref();

const updateSelectedPin = (newSelectedPin: Pin) => {
  selectedPin.value = newSelectedPin;
}

const updatePinList = (storedPin: Pin) => {
  pinListRef.value.getPinList(storedPin.id);
}

</script>