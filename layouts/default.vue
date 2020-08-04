<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      mini-variant-width="80"
      class="the-drawer"
      clipped
      app
    >
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
            :block="!miniVariant"
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon>
              mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
            </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        Dev - Pills
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" style="background-color: #fefcf9;">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span class="ml-auto">
        Bryan de Oliveira Brettas &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.the-drawer {
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
