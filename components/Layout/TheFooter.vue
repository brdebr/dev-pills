<template>
  <v-footer class="px-6 py-4 mx-auto rounded-t-xl" max-width="75%" absolute>
    <div
      class="d-flex align-center py-1 ml-auto mr-3"
      style="border-right: 1px solid;"
    >
      <div>
        <v-btn
          icon
          small
          outlined
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon small>
            {{
              !$vuetify.theme.dark
                ? 'mdi-brightness-4'
                : 'mdi-white-balance-sunny'
            }}
          </v-icon>
        </v-btn>
      </div>
      <div class="px-3">
        <v-btn x-small outlined class="mr-2" @click="$i18n.setLocale('en')">
          EN
        </v-btn>
        <v-btn x-small outlined @click="$i18n.setLocale('es')">
          ES
        </v-btn>
      </div>
    </div>
    <span>
      Bryan de Oliveira Brettas &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>
