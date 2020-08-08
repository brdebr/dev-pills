<template>
  <v-app-bar clipped-left color="toolbar-color" app flat class="the-app-bar">
    <v-app-bar-nav-icon
      v-ripple="{ center: true, class: 'white--text' }"
      class="rounded-0 ml-0"
      style="border: 1px solid; margin-left: 1px;"
      title="Toggle navigation"
      @click="$store.commit('layout/toggleDrawer')"
    />
    <v-toolbar-title class="d-flex align-center">
      <nuxt-link
        :to="localePath('/')"
        tag="div"
        class="d-flex align-center"
        style="cursor: pointer;"
      >
        {{ $store.state.layout.appBarTitle }}
      </nuxt-link>
    </v-toolbar-title>
    <global-search class="ml-auto" />
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
