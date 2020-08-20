<template>
  <v-app>
    <the-drawer />
    <the-toolbar />
    <v-main
      style="padding-bottom: 120px;"
      :class="$vuetify.theme.dark ? 'bg-gradient--dark' : 'bg-gradient--light'"
    >
      <v-container
        :class="'fill-height ' + ($vuetify.breakpoint.xsOnly ? 'pa-1' : 'pt-5')"
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  async middleware(ctx) {
    if (ctx.store.state.layout.items.length) {
      return
    }
    const itemsResp = await ctx.$content('drawer').fetch()
    // @ts-ignore
    ctx.store.commit('layout/setItems', itemsResp['item-list'])
  },
})
export default class DefaultLayout extends Vue {}
</script>
