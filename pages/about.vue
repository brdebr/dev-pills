<template>
  <page-container cols="12,10">
    <v-card outlined tile>
      <v-card-title class="headline">
        {{ $t('heading') }}
      </v-card-title>
      <v-card-text :class="!$store.state.layout.isMobile ? 'px-5' : 'px-2'">
        <p v-t="'message01'" />
        <p v-t="'message02'" />
        <nuxt-content :document="techs" />
      </v-card-text>
    </v-card>
  </page-container>
</template>
<i18n>
{
  "en": {
    "heading": "About",
    "message01": "This website's central primary is to archive various development guides and tutorials for my self in the future, carefully explain them with images, code blocks, and repositories.",
    "message02": "It's build using the following technologies:"
  },
  "es": {
    "heading": "Acerca de",
    "message01": "El objetivo principal de esta página es archivar varias guías y tutoriales de desarrollo para mi mismo en el futuro, explicarlas detalladamente con imágenes, fragmentos de código y repositorios para luego consultarlos con rapidez",
    "message02": "Está desarrollado utilizando las siguientes tecnologías:"
  }
}
</i18n>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  head() {
    return {
      title: 'About',
    }
  },
  async asyncData(ctx) {
    const techs = await ctx
      .$content('about', ctx.app.i18n.locale, 'technologies')
      .fetch()

    return {
      techs,
    }
  },
})
export default class AboutPage extends Vue {
  techs!: Object
}
</script>
