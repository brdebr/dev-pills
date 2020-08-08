<template>
  <v-app>
    <the-drawer :items="items" />
    <the-toolbar />
    <v-main
      style="padding-bottom: 120px;"
      :class="$vuetify.theme.dark ? 'bg-gradient--dark' : 'bg-gradient--light'"
    >
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

// @ts-ignore
let unwatcher

@Component({
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
})
export default class DefaultLayout extends Vue {
  items = []

  async fetchItems() {
    // @ts-ignore
    this.$vuetify.lang.current = this.$i18n.locale
    const itemsResp: { list: { en: []; es: [] } } = await this.$content(
      'drawer',
      'items'
    ).fetch()
    // @ts-ignore
    this.items = itemsResp.list[this.$i18n.locale]
  }

  async mounted() {
    unwatcher = this.$watch(
      () => {
        return this.$i18n.locale
      },
      () => {
        this.fetchItems()
      }
    )
    await this.fetchItems()
  }

  beforeDestroy() {
    // @ts-ignore
    unwatcher()
  }
}
</script>
