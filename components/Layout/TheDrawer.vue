<template>
  <v-navigation-drawer
    :value="$store.state.layout.drawer"
    :mini-variant="$store.state.layout.drawerMini"
    mini-variant-width="80"
    :class="`the-drawer ${
      $store.state.layout.collapseBar ? 'the-drawer--collapsed' : null
    }`"
    clipped
    floating
    app
    @input="(val) => $store.commit('layout/setDrawer', val)"
  >
    <v-layout column justify-space-between fill-height>
      <v-list
        v-if="
          $store.state.layout.collapseBar && !$store.state.layout.drawerMini
        "
      >
        <v-list-item class="text-center headline">
          <span>
            {{ $store.state.layout.appBarTitle }}
          </span>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :style="{
            transition: 'margin .18s linear',
            marginRight: $store.state.layout.drawerMini ? null : '8px',
          }"
          :title="item.title"
          router
          exact
        >
          <v-list-item-icon class="ml-3 mr-auto">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-4">
            <v-list-item-title>
              <span>
                {{ item.title }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer />
      <transition name="flip-x" mode="out-in">
        <div
          :key="$store.state.layout.drawerMini"
          :class="`${$store.state.layout.drawerMini ? 'mx-auto' : 'mx-3'} mb-3`"
        >
          <v-btn
            :block="!$store.state.layout.drawerMini"
            outlined
            tile
            color="primary"
            :title="
              $store.state.layout.drawerMini
                ? 'Expand drawer'
                : 'Collapse drawer'
            "
            @click.stop="$store.commit('layout/toggleDrawerMini')"
          >
            <v-icon>
              mdi-{{
                `chevron-${$store.state.layout.drawerMini ? 'right' : 'left'}`
              }}
            </v-icon>
          </v-btn>
        </div>
      </transition>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
