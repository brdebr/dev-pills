<template>
  <page-container cols="12,12,11,11,9">
    <v-card outlined tile class="article-page">
      <v-card-title class="headline article-page__title">
        {{ article.title }}
      </v-card-title>
      <v-img
        :height="imageHeight($vuetify.breakpoint.name)"
        :alt="article.image['alt-text']"
        :src="article.image.route"
        :lazy-src="article.image.route"
      >
        <div class="mr-2 mb-2" style="position: absolute; bottom: 0; right: 0">
          <v-tooltip
            top
            nudge-left="93"
            z-index="3"
            transition="fade-transition"
            close-delay="1000"
            max-width="250px"
            color="primary darken-3 article-tooltip--content"
          >
            <template #activator="{ on, attrs }">
              <div v-bind="attrs" class="ml-2" v-on="on">
                <v-btn
                  tile
                  depressed
                  small
                  color="white"
                  class="px-1"
                  style="z-index: 5"
                >
                  <v-icon color="primary darken-1">
                    mdi-information-variant
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <div class="article-tooltip">
              <div>
                <b> Article updated: </b>
              </div>
              <div>
                {{ formatDate(article.updatedAt) }}
              </div>
              <div>
                <b> Photo attribution: </b>
              </div>
              <div v-html="article.image.mention" />
            </div>
          </v-tooltip>
        </div>
      </v-img>
      <v-row no-gutters class="white px-3 mt-3">
        <v-col>
          <v-chip
            v-for="category in article.categories"
            :key="category"
            text
            outlined
            class="rounded-0 mx-2 my-2"
            color="primary"
          >
            <b class="mr-2">#</b> {{ category }}
          </v-chip>
        </v-col>
      </v-row>
      <v-card-text
        :class="
          (!$store.state.layout.isMobile ? 'px-5' : 'px-2') + ' article-body'
        "
      >
        <nuxt-content :document="article" />
      </v-card-text>
    </v-card>
  </page-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ArticleI } from '@/types/global'
import { articleHeadObjBuilder } from '@/utils/functions'
import moment from 'moment'

@Component<ArticlePage>({
  head() {
    return articleHeadObjBuilder(this.article, this.$i18n.locale)
  },
  async asyncData(ctx) {
    const article = await ctx
      .$content('articles', ctx.app.i18n.locale, ctx.params.slug)
      .fetch()
    return {
      article,
    }
  },
})
export default class ArticlePage extends Vue {
  article!: ArticleI

  imageHeight(val: string) {
    switch (val) {
      case 'xs':
        return '300px'
      case 'sm':
        return '400px'
      case 'md':
        return '400px'
      case 'lg':
        return '420px'
      case 'xl':
        return '500px'
      default:
        return '400px'
    }
  }

  formatDate(val: string) {
    return moment(val).format('dddd DD/MM/YYYY HH:mm')
  }
}
</script>

<style lang="scss">
.article-tooltip {
  &--content {
    pointer-events: all !important;
  }
  a {
    color: #fff !important;
  }
}
.article-page {
  &__title {
    word-break: break-word;
    font-weight: bold;
  }
  .nuxt-content-container,
  .nuxt-content {
    blockquote {
      opacity: 0.85;
      font-style: italic;
      border-left: 5px solid #058074;
      background-color: #f5fffe;
      padding: 14px 12px;
      p {
        margin: 0;
      }
    }
  }
}
.article-body {
  p {
    white-space: break-spaces;
  }
  ::selection {
    background-color: #0c6e65;
    color: white;
  }
}
</style>
