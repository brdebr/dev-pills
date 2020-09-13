<template>
  <v-app-bar
    clipped-left
    :color="isDev ? 'yellow lighten-5' : 'toolbar-color'"
    app
    flat
    class="the-app-bar"
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
  // &.v-toolbar--collapsed {
  //   border-bottom-right-radius: 0px !important;
  //   border-bottom-left-radius: 24px !important;
  // }
}
</style>
