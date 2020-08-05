<template>
  <v-app-bar
    clipped-left
    color="#D0EBE4"
    app
    flat
    :collapse="$store.state.layout.collapseBar"
    collapse-on-scroll
    class="the-app-bar"
  >
    <v-app-bar-nav-icon @click="$store.commit('layout/toggleDrawer')" />
    <v-toolbar-title>
      {{ $store.state.layout.appBarTitle }}
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({}),
})
</script>

<style scoped></style>
