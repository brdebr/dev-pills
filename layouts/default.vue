<template>
  <v-app>
    <the-drawer :items="items" />
    <the-toolbar />
    <v-main style="padding-bottom: 120px;" class="bg-color">
      <v-container class="fill-height pt-5">
        <nuxt />
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class DefaultLayout extends Vue {
  items = []
  async mounted() {
    const itemsResp: { items: [] } = await this.$content('drawer', 'items')
      .only('items')
      .fetch()
    this.items = itemsResp.items
  }
}
</script>
