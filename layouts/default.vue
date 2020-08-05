<template>
  <v-app dark>
    <the-drawer />
    <the-toolbar />
    <v-main
      :style="{
        backgroundColor: '#fefcf9',
        paddingRight: $store.state.layout.collapseBar ? '120px' : null,
      }"
      :class="$store.state.layout.collapseBar ? 'pt-1' : null"
    >
      <v-container
        :class="`fill-height ${
          $store.state.layout.collapseBar ? 'pr-3' : null
        }`"
      >
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.the-drawer {
  &--collapsed {
    top: 0 !important;
    max-height: calc(100% - 36px) !important;
  }
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}
.the-app-bar {
  margin-left: auto;
  &.v-toolbar--collapsed {
    border-bottom-right-radius: 0px !important;
    border-bottom-left-radius: 24px !important;
  }
}
</style>
