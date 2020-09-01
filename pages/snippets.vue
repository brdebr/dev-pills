<template>
  <page-container cols="12,10">
    <v-card outlined tile>
      <v-card-title class="headline">
        {{ $t('title') }}
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
              :text-color="$vuetify.theme.dark ? '#ffffffcc' : null"
              :class="
                'rounded-0 mx-2 my-2 tag-chip pl-2 ' +
                (!snippetTagSearch.length || snippetTagSearch.includes(tag)
                  ? 'tag-chip--active'
                  : null)
              "
              @click="toggleTag(tag)"
            >
              <span class="grey--text text--lighten-1 mr-1">
                #
              </span>
              <span>
                {{ tag }}
              </span>
            </v-chip>
          </v-col>
          <v-col class="flex-grow-0 d-flex align-center">
            <v-text-field
              v-model="snippetSearch"
              :label="$t('search')"
              clearable
              clear-icon="mdi-close-box-outline mr-4"
              dense
              solo
              solo-inverted
              flat
              outlined
              full-width
              hide-details
              color="indigo accent-2"
              append-icon="mdi-magnify"
              class="ml-2 rounded-0 search-snippet"
            />
          </v-col>
        </v-row>
        <v-lazy>
          <v-row ref="contents" class="flex-wrap">
            <v-col
              v-for="snippet in filteredSnippets"
              :key="snippet.slug"
              cols="12"
            >
              <v-row no-gutters class="snippet-container">
                <v-col cols="12" class="pt-3 pb-1 px-3 d-flex align-center">
                  <span class="mr-auto" @click="copyDates(snippet)">
                    {{ snippet[`title-${$i18n.locale}`] }}
                  </span>
                  <div class="d-flex">
                    <span
                      class="pl-2 d-inline-flex flex-wrap"
                      :style="
                        $vuetify.breakpoint.xsOnly
                          ? 'width: min-content;'
                          : null
                      "
                    >
                      <span
                        v-for="tag in snippet.tags"
                        :key="tag"
                        class="snippet-container__tag my-1 d-inline-flex align-center"
                      >
                        <span class="hashtag" />
                        <span>{{ tag }}</span>
                      </span>
                    </span>
                    <v-tooltip top>
                      <template #activator="{on, attrs}">
                        <span
                          class="ml-2 my-auto"
                          style="line-height: 10px;"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-btn
                            tile
                            x-small
                            outlined
                            class="date-details-icon"
                          >
                            <v-icon
                              small
                              :color="
                                $vuetify.theme.dark ? '#a3e4d4cc' : '#1e8282'
                              "
                            >
                              mdi-calendar-today
                            </v-icon>
                          </v-btn>
                        </span>
                      </template>
                      <span class="date-tooltip-text">
                        {{ getDateFormatted(snippet.updatedAt) }}
                      </span>
                    </v-tooltip>
                  </div>
                </v-col>
                <v-col cols="12">
                  <nuxt-content :document="snippet" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-lazy>
      </v-card-text>
    </v-card>
  </page-container>
</template>
<i18n>
{
  "en": {
    "title": "Snippets",
    "search": "Search snippet..."
  },
  "es": {
    "title": "Notas / Fragmentos de código",
    "search": "Búsqueda de notas..."
  }
}
</i18n>
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
import { Watch } from 'vue-property-decorator'
import moment from 'moment'

export interface SnippetItemI {
  title: string
  'title-es': string
  'title-en': string
  tags: Array<string>
  createdAt: string
  updatedAt: string
}

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
        })
        .sort(
          // @ts-ignore
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          // a.slug.localeCompare(b.slug)
        ),
      isDev: ctx.isDev,
    }
  },
})
export default class SnippetsPage extends Vue {
  snippets!: [SnippetItemI]
  isDev!: boolean

  async copyDates(item: SnippetItemI) {
    if (!this.isDev) {
      return
    }
    const textVar = `createdAt: ${item.createdAt}
updatedAt: ${item.updatedAt}`
    console.log('Copied to clipboard: \n' + textVar)
    if (!navigator.clipboard) {
      console.error('Clipboard feature not supported in this browser :c')
      return
    }
    await navigator.clipboard.writeText(textVar)
  }

  snippetSearch = ''
  snippetTagSearch: Array<string> = []

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

  @Watch('snippetSearch')
  emptyTagsFilter(newVal: string) {
    if (newVal) {
      this.snippetTagSearch = []
    }
  }

  get filteredSnippets() {
    if (!this.snippetSearch && this.snippetTagSearch.length === 0) {
      return this.snippets
    }
    if (this.snippetSearch) {
      return this.snippets.filter((el) => {
        // @ts-ignore
        return el[`title-${this.$i18n.locale}`]
          ?.toLowerCase()
          ?.includes(this.snippetSearch)
      })
    }
    if (this.snippetTagSearch.length > 0) {
      return this.snippets.filter((el) => {
        return el.tags.some((tagEl) => this.snippetTagSearch.includes(tagEl))
      })
    }
  }

  toggleTag(tag: string) {
    const index = this.snippetTagSearch.findIndex((el) => el === tag)
    if (index === -1) {
      this.snippetTagSearch.push(tag)
    } else {
      this.snippetTagSearch.splice(index, 1)
    }
  }

  getDateFormatted(isoDate: string) {
    return moment(isoDate)
      .locale(this.$i18n.locale)
      .format('dddd DD/MM/YYYY · HH:mm')
  }

  refreshPrism() {
    if (this.$refs.contents) {
      // @ts-ignore
      Prism.highlightAllUnder(this.$refs.contents)
    } else {
      setTimeout(() => this.refreshPrism(), 50)
    }
  }

  mounted() {
    Prism.plugins.autoloader.languages_path = '/prism/components/'
    this.$nuxt.$on('content:update', this.refreshPrism)
    this.refreshPrism()
  }

  updated() {
    this.refreshPrism()
  }

  destroyed() {
    this.$nuxt.$off('content:update', this.refreshPrism)
  }
}
</script>

<style lang="scss">
@import '@/assets/css/prism';
.tag-chip {
  border-left-width: 1px !important;
  min-width: 125px;
  transition: border-left-width 0.2s linear;
  &--active {
    border-left-width: 4.5px !important;
  }
}
.search-snippet.v-text-field {
  min-width: 320px;
  label {
    margin-left: 5px;
    font-weight: 400 !important;
    letter-spacing: 0.9px;
    font-family: 'Roboto', serif !important;
  }
}
#app.theme--light {
  .snippet-container {
    background-color: #edf7f5;
  }
}
#app.theme--dark {
  .snippet-container {
    background-color: #206859;
  }
}
.snippet-container {
  background-color: #edf7f5;
  &__tag {
    display: inline-block;
    opacity: 0.6;
    border: 1px solid silver;
    font-size: 13px;
    margin-right: 10px;
    padding: 0 6px;
    &:last-child {
      margin-right: 0;
    }
    .hashtag {
      &::before {
        content: '#';
        font-size: 11px;
        color: #b3b3b3;
        margin-right: 3px;
      }
    }
  }
}
#app.theme--light pre[class*='language-'],
#app.theme--dark pre[class*='language-'] {
  margin-bottom: 0;
}
.date-details-icon {
  min-width: 10px !important;
  width: 10px !important;
  border-color: #85b1a6 !important;
}
.date-tooltip-text {
  display: inline-block;
  &::first-letter {
    text-transform: uppercase !important;
  }
}
</style>
