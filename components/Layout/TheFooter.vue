<template>
  <div class="fixed-footer">
    <div class="fixed-footer__content" :style="containerStyles">
      <v-footer
        class="px-6 pb-4 pt-5 mx-auto rounded-t-xl toolbar-color footer-bar"
        max-width="70%"
        absolute
      >
        <div class="d-flex align-center py-1">
          <div class="px-3">
            <v-btn
              x-small
              tile
              outlined
              class="mr-2 rbt-font"
              title="Change language to English"
              @click="$i18n.setLocale('en')"
            >
              EN
            </v-btn>
            <v-btn
              x-small
              tile
              outlined
              class="rbt-font"
              title="Change language to Spanish"
              @click="$i18n.setLocale('es')"
            >
              ES
            </v-btn>
          </div>
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
        </div>
        <div class="d-flex align-center ml-auto">
          <span class="mr-3">
            Bryan de Oliveira Brettas
          </span>
          <v-btn
            x-small
            fab
            depressed
            title="Github repository"
            href="https://github.com/brdebr/dev-pills"
            rel="noreferrer"
            target="_blank"
          >
            <v-icon size="28">
              mdi-github
            </v-icon>
          </v-btn>
        </div>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class TheFooter extends Vue {
  get containerStyles() {
    // @ts-ignore
    return `marginLeft: ${this.$vuetify.application.left}px;`
  }
}
</script>
<style lang="scss">
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  &__content {
    position: relative;
    transition: margin-left 0.15s linear;
  }
  .footer-bar {
    bottom: -50px !important;
    transition: bottom 0.15s ease-in-out;
    &:hover {
      bottom: 0px !important;
    }
  }
}
</style>
