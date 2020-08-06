<template>
  <v-app>
    <the-drawer :items="items" />
    <the-toolbar />
    <v-main style="padding-bottom: 120px;" class="bg-color">
      <v-container class="fill-height">
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
    const itemsResp = await this.$content('drawer', 'items')
      .only('items')
      .fetch()
    this.items = itemsResp.items
  },
}
</script>
