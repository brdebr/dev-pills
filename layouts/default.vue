<template>
  <v-app dark>
    <the-drawer :items="items" />
    <the-toolbar />
    <v-main
      :style="{
        paddingRight: $store.state.layout.collapseBar ? '120px' : null,
      }"
      :class="'bg-color ' + ($store.state.layout.collapseBar ? 'pt-1' : null)"
    >
      <v-container
        :class="`fill-height ${
          $store.state.layout.collapseBar ? 'pr-3' : null
        }`"
      >
        <nuxt />
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  async mounted() {
    const itemsResp = await this.$content('drawer/items').only('items').fetch()
    this.items = itemsResp.items
  },
}
</script>
