<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card outlined tile>
        <v-card-title>
          About Page
        </v-card-title>
        <v-card-text class="px-5">
          <p v-t="'message01'" />
          <p v-t="'message02'" />
          <nuxt-content :document="techs" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<i18n>
{
  "en": {
    "message01" : "This website's central motivation is to archive various development guides and tutorials for my self in the future, carefully explain them with images, code blocks, and repositories.",
    "message02" : "It's build using the following technologies:"
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
