<template>
  <v-navigation-drawer
    :value="$store.state.layout.drawer"
    :mini-variant="$store.state.layout.drawerMini"
    mini-variant-width="80"
    :class="`the-drawer ${
      $store.state.layout.collapseBar ? 'the-drawer--collapsed' : null
    }`"
    overlay-color="#fff"
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
          v-for="(item, i) in $store.state.layout.items"
          :key="i"
          :to="localePath(item.to)"
          active-class="accent--text text--darken-1"
          :title="item.title[$i18n.locale]"
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
                {{ item.title[$i18n.locale] }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer />
      <transition name="flip-x" mode="out-in">
        <div
          :key="$store.state.layout.footer"
          :class="`mx-auto ${
            $store.state.layout.isMobile ? 'mt-3 mb-1' : 'mb-3'
          }`"
        >
          <v-btn
            block
            outlined
            tile
            small
            color="primary"
            width="40"
            :title="
              $store.state.layout.footer ? $t('show-footer') : $t('hide-footer')
            "
            @click.stop="$store.commit('layout/toggleFooter')"
          >
            <v-icon
              small
              :color="$store.state.layout.footer ? 'blue-grey' : 'primary'"
            >
              mdi-page-layout-footer
            </v-icon>
          </v-btn>
        </div>
      </transition>
      <transition name="flip-x" mode="out-in">
        <div
          :key="$store.state.layout.drawerMini"
          :class="`${$store.state.layout.drawerMini ? 'mx-auto' : 'mx-3'} ${
            $store.state.layout.isMobile ? 'mt-3 order-first mb-1' : 'mb-3'
          }`"
        >
          <v-btn
            :block="!$store.state.layout.drawerMini"
            outlined
            tile
            color="primary"
            :title="
              $store.state.layout.drawerMini ? $t('expand') : $t('collapse')
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
<i18n>
{
  "en" : {
    "expand": "Expand drawer",
    "collapse": "Collapse drawer",
    "show-footer": "Show footer",
    "hide-footer": "Hide footer"
  },
  "es" : {
    "expand": "Expandir navegación",
    "collapse": "Colapsar navegación",
    "show-footer": "Mostrar pie de página",
    "hide-footer": "Ocultar pie de página"
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="scss">
.the-drawer {
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
      .accent--text.text--darken-1 {
        color: #007c82 !important;
        caret-color: #007c82 !important;
      }
    }
  }
  .drawer-item-title {
    font-size: 16px;
    letter-spacing: 0.7px;
  }
}

.the-active-color-for-the-selected-drawer-shoud-be-this {
  color: #059876;
  color: #059876;
}
</style>
