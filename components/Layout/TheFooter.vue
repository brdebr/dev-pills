<template>
  <v-footer app>
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
    <span class="ml-auto">
      Bryan de Oliveira Brettas &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>
