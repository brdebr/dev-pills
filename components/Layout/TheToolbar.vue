<template>
  <v-app-bar clipped-left color="toolbar-color" app flat class="the-app-bar">
    <v-app-bar-nav-icon @click="$store.commit('layout/toggleDrawer')" />
    <v-toolbar-title class="d-flex align-center">
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
<style lang="scss">
.the-app-bar {
  margin-left: auto;
  // &.v-toolbar--collapsed {
  //   border-bottom-right-radius: 0px !important;
  //   border-bottom-left-radius: 24px !important;
  // }
}
</style>
