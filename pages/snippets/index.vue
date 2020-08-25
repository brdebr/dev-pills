<template>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card outlined tile>
        <v-card-title>
          Snippets
        </v-card-title>
        <v-card-text :class="!$vuetify.breakpoint.xsOnly ? 'px-5' : 'px-2'">
          <v-row>
            <v-col>
              <v-chip
                v-for="tag in tags"
                :key="tag"
                outlined
                color="primary"
                text
                class="rounded-0 mr-3 mb-3 tag-chip pl-2"
              >
                <span class="grey--text text--lighten-1 mr-1">
                  #
                </span>
                <span>
                  {{ tag }}
                </span>
              </v-chip>
            </v-col>
          </v-row>
          <v-row ref="contents" class="flex-wrap">
            <v-col v-for="snippet in snippets" :key="snippet.slug" cols="12">
              <v-row no-gutters>
                <v-col cols="12">
                  {{ snippet[`title-${$i18n.locale}`] }}
                </v-col>
                <v-col cols="12">
                  <nuxt-content :document="snippet" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Prism from 'prismjs'
import 'prismjs/plugins/autoloader/prism-autoloader.js'
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js' // Copy to clipboard loaded before Toolbar
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

@Component({
  head() {
    return {
      title: 'Snippets',
    }
  },
  async asyncData(ctx) {
    const snippets = await ctx.$content('snippets').fetch()
    return {
      snippets: snippets
        // @ts-ignore
        .map((el) => {
          el['title-en'] = el.title
          return el
        }),
    }
  },
})
export default class SnippetsPage extends Vue {
  snippets!: []

  get tags() {
    return this.snippets.reduce((acc, el) => {
      // @ts-ignore
      const tags: [] = Object.values(el.tags)
      tags.forEach((tag) => {
        if (!acc.some((auxEL: string) => auxEL.includes(tag))) acc.push(tag)
      })
      return acc
    }, [])
  }

  refreshPrism() {
    setTimeout(() => {
      // @ts-ignore
      Prism.highlightAllUnder(this.$refs.contents)
    }, 50)
  }

  mounted() {
    Prism.plugins.autoloader.languages_path = '/prism/components/'
    this.refreshPrism()
    this.$nuxt.$on('content:update', this.refreshPrism)
  }

  destroyed() {
    this.$nuxt.$off('content:update', this.refreshPrism)
  }
}
</script>

<style lang="scss">
.tag-chip {
  border-left-width: 4px !important;
  min-width: 125px;
}
</style>
