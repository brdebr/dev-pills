<template>
  <v-footer
    class="px-6 pb-4 pt-5 mx-auto rounded-t-xl toolbar-color"
    max-width="75%"
    absolute
  >
    <div
      class="d-flex align-center py-1 ml-auto mr-3"
      style="border-right: 1px solid;"
    >
      <div>
        <v-btn
          icon
          small
          outlined
          title="Toggle dark mode"
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
        <v-btn
          x-small
          tile
          outlined
          class="mr-2"
          title="Change language to English"
          @click="$i18n.setLocale('en')"
        >
          EN
        </v-btn>
        <v-btn
          x-small
          tile
          outlined
          title="Change language to Spanish"
          @click="$i18n.setLocale('es')"
        >
          ES
        </v-btn>
      </div>
    </div>
    <div class="d-flex align-center">
      <span class="mr-3">
        Bryan de Oliveira Brettas
      </span>
      <v-btn
        small
        icon
        outlined
        title="Github repository"
        href="https://github.com/brdebr/dev-pills"
        target="_blank"
      >
        <v-icon>
          mdi-github
        </v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>
