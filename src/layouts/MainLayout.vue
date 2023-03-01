<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>

    <q-drawer persistent behavior="desktop" :width="200" v-model="leftDrawerOpen" side="left" bordered>
      <pin-list-component />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import PinListComponent from 'src/components/PinListComponent.vue';

const leftDrawerOpen = ref(true)

</script>