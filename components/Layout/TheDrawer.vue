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
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          active-class="accent--text text--darken-1"
          :title="item.title"
          :disabled="item.disabled"
          router
          exact
        >
          <v-list-item-icon class="ml-3 mr-auto">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title>
              <span
                :class="
                  'drawer-item-title rbt-font ' +
                  ($vuetify.theme.dark ? 'white--text' : null)
                "
              >
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
<style lang="scss">
.the-drawer {
  // &--collapsed {
  //   top: 0 !important;
  //   max-height: calc(100% - 36px) !important;
  // }
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    .v-list {
      .v-list-item.v-list-item--disabled {
        .v-list-item__icon {
          .v-icon {
            color: rgba(0, 0, 0, 0.3);
          }
        }
        .v-list-item__content {
          .v-list-item__title {
            > span {
              filter: contrast(0.2);
            }
          }
        }
      }
    }
  }
  .drawer-item-title {
    font-size: 16px;
    letter-spacing: 0.7px;
  }
}
</style>
