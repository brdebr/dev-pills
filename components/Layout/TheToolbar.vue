<template>
  <v-app-bar
    clipped-left
    app
    flat
    :class="(isDev ? 'isDev' : '') + ' the-app-bar'"
  >
    <v-app-bar-nav-icon
      v-ripple="{ center: true, class: 'white--text' }"
      class="rounded-0 ml-0"
      style="border: 1px solid; margin-left: 1px"
      :title="$t('toggle-nav')"
      @click="$store.commit('layout/toggleDrawer')"
    />
    <v-toolbar-title
      :class="
        'd-flex align-center ' +
        ($store.state.layout.isMobile ? 'mx-auto px-1' : '')
      "
    >
      <nuxt-link
        :to="localePath('/')"
        tag="div"
        class="d-flex align-center"
        style="cursor: pointer"
      >
        <span
          class="headline font-weight-black"
          style="letter-spacing: 0.5px !important"
        >
          {{ $store.state.layout.appBarTitle }}
        </span>
        <span v-if="isDev" class="ml-3 text-uppercase">
          [| {{ $vuetify.breakpoint.name }} |]
        </span>
      </nuxt-link>
    </v-toolbar-title>
    <global-search v-if="!$store.state.layout.isMobile" class="ml-auto" />
  </v-app-bar>
</template>
<i18n>
{
  "en": {
    "toggle-nav": "Toggle drawer"
  },
  "es": {
    "toggle-nav": "Mostrar/ocultar navegación"
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isDev: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
})
</script>
<style lang="scss">
.the-app-bar {
  margin-left: auto;
  background-color: rgba(101, 216, 185, 0.5) !important;
  backdrop-filter: blur(5px);
  &.isDev {
    background-color: rgba(255, 253, 231, 0.5) !important;
  }
  // &.v-toolbar--collapsed {
  //   border-bottom-right-radius: 0px !important;
  //   border-bottom-left-radius: 24px !important;
  // }
}
</style>
