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
    <v-list
      v-if="$store.state.layout.collapseBar && !$store.state.layout.drawerMini"
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
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list class="mt-auto">
      <v-list-item>
        <v-btn
          outlined
          tile
          color="primary"
          :block="!$store.state.layout.drawerMini"
          @click.stop="$store.commit('layout/toggleDrawerMini')"
        >
          <v-icon>
            mdi-{{
              `chevron-${$store.state.layout.drawerMini ? 'right' : 'left'}`
            }}
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
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
