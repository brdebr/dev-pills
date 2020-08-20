<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card outlined tile>
        <v-card-title>
          {{ techs['heading'] }}
        </v-card-title>
        <v-card-text :class="!$vuetify.breakpoint.xsOnly ? 'px-5' : 'px-2'">
          <p v-text="techs['message01']" />
          <p v-text="techs['message02']" />
          <nuxt-content :document="techs" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
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
