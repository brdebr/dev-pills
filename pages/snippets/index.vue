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
                :text-color="$vuetify.theme.dark ? 'white' : null"
                :class="
                  'rounded-0 mr-3 mb-3 tag-chip pl-2 ' +
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
            <v-col class="flex-grow-0">
              <v-text-field
                v-model="snippetSearch"
                label="Search..."
                dense
                solo
                solo-inverted
                flat
                outlined
                full-width
                hide-details
                color="indigo accent-2"
                append-icon="mdi-magnify"
                class="rounded-0 search-snippet"
              />
            </v-col>
          </v-row>
          <v-row ref="contents" class="flex-wrap">
            <v-col
              v-for="snippet in filteredSnippets"
              :key="snippet.slug"
              cols="12"
            >
              <v-row no-gutters class="snippet-container">
                <v-col cols="12" class="pt-3 pb-1 px-3 d-flex">
                  <span class="mr-auto">
                    {{ snippet[`title-${$i18n.locale}`] }}
                  </span>
                  <span>
                    <span
                      v-for="tag in snippet.tags"
                      :key="tag"
                      class="snippet-container__tag"
                    >
                      <span class="hashtag" />
                      <span>
                        {{ tag }}
                      </span>
                    </span>
                  </span>
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
import { Watch } from 'vue-property-decorator'

export interface SnippetItemI {
  title: string
  'title-es': string
  'title-en': string
  tags: Array<string>
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
        }),
    }
  },
})
export default class SnippetsPage extends Vue {
  snippets!: [SnippetItemI]

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
    this.$nextTick(() => {
      if (this.$refs.contents) {
        this.refreshPrism()
      }
    })
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

  refreshPrism() {
    setTimeout(() => {
      // @ts-ignore
      Prism.highlightAllUnder(this.$refs.contents)
    }, 10)
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
@import '@/assets/css/prism';
.tag-chip {
  border-left-width: 1px !important;
  min-width: 125px;
  transition: border-left-width 0.2s linear;
  &--active {
    border-left-width: 4.5px !important;
  }
}
.search-snippet {
  min-width: 320px;
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
      }
    }
  }
}
#app.theme--light pre[class*='language-'],
#app.theme--dark pre[class*='language-'] {
  margin-bottom: 0;
}
</style>
