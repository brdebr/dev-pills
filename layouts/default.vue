<template>
  <v-app>
    <the-drawer />
    <the-toolbar :is-dev="isDev" />
    <v-main
      style="padding-bottom: 90px;"
      :class="$vuetify.theme.dark ? 'bg-gradient--dark' : 'bg-gradient--light'"
    >
      <v-container
        :class="'d-block ' + ($vuetify.breakpoint.xsOnly ? 'pa-1' : 'pt-5')"
        style="overflow-x: hidden;"
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
    <transition name="scale-transition">
      <v-btn
        v-show="showScrollTop"
        :key="showScrollTop"
        v-scroll="onScroll"
        :dark="!$vuetify.theme.dark"
        absolute
        bottom
        right
        fixed
        min-width="40"
        class="pa-2"
        style="z-index: 2;"
        depressed
        color="#058074"
        @click="toTop"
      >
        <v-icon>
          mdi-chevron-up-box-outline
        </v-icon>
      </v-btn>
    </transition>
    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const isDev = process.env.NODE_ENV !== 'production'

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
export default class DefaultLayout extends Vue {
  offsetTop = 0
  get showScrollTop() {
    return this.offsetTop > 500
  }

  toTop() {
    this.$vuetify.goTo(0, {
      duration: 750,
      easing: 'easeInOutCubic',
    })
  }

  isDev = isDev

  // @ts-ignore
  onScroll(e) {
    this.offsetTop = e.target.scrollingElement.scrollTop
  }
}
</script>
