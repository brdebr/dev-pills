<template>
  <div class="fixed-footer">
    <div class="fixed-footer__content" :style="containerStyles">
      <v-footer
        :class="
          'px-6 pb-5 pt-7 mx-auto rounded-t-xl footer-bar cut-shape ' +
          ($vuetify.breakpoint.xsOnly ? 'footer-bar--mobile' : '')
        "
        max-width="75%"
        :dark="!$vuetify.theme.dark"
        :light="$vuetify.theme.dark"
        absolute
      >
        <div
          :class="
            'd-flex align-center py-1 ' +
            ($vuetify.breakpoint.xsOnly ? 'justify-space-between' : '')
          "
          :style="$vuetify.breakpoint.xsOnly ? 'width: 100%;' : ''"
        >
          <div class="pr-4">
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
              title="Cambiar idioma a Castellano"
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
              :title="$t('dark-mode')"
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
<i18n>
{
  "en" : {
    "dark-mode": "Toggle dark/light mode"
  },
  "es" : {
    "dark-mode": "Cambiar entre modo noche/día"
  }
}
</i18n>
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
    bottom: -55px !important;
    &--mobile {
      bottom: -110px !important;
    }
    transition: bottom 0.15s ease-in-out;
    &:hover {
      bottom: 0px !important;
    }
    &.theme--dark {
      background-color: #058074 !important;
    }
    &.theme--light {
      background-color: #d0ebe4 !important;
    }
  }
}

.cut-shape {
  --topXDiffSize: 25px;
  --topYDiffSize: 20px;

  clip-path: polygon(
    var(--topXDiffSize) 0%,
    calc(100% - var(--topXDiffSize)) 0%,
    100% var(--topYDiffSize),
    100% 100%,
    0 100%,
    0% var(--topYDiffSize)
  );
}
</style>
