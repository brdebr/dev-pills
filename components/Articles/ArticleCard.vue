<template>
  <v-card
    v-if="article"
    tile
    outlined
    max-width="600px"
    class="article-card"
    color="primary"
  >
    <v-img
      class="white--text align-start"
      height="320px"
      :alt="article.image['alt-text']"
      :src="article.image.route"
    >
      <v-card-title
        class="bg-above-img py-3 px-5 flex-nowrap"
        style="word-break: break-word"
      >
        <div class="article-card__title">
          {{ article.title }}
        </div>
      </v-card-title>
      <div class="mr-2 mb-2" style="position: absolute; bottom: 0; right: 0">
        <v-tooltip
          bottom
          left
          nudge-bottom
          z-index="3"
          transition="fade-transition"
          close-delay="1000"
          max-width="250px"
          color="primary darken-3 article-tooltip--content"
        >
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" class="ml-2" v-on="on">
              <v-btn tile depressed small color="white" class="px-1">
                <v-icon color="primary darken-1">
                  mdi-information-variant
                </v-icon>
              </v-btn>
            </div>
          </template>
          <div class="article-tooltip">
            <div>
              <b> Description: </b>
            </div>
            <div>
              {{ article.description }}
            </div>
            <div>
              <b> Updated: </b>
            </div>
            <div>
              {{ formatDate(article.updatedAt) }}
            </div>
            <div>
              <b> Mention: </b>
            </div>
            <div v-html="article.image.mention" />
          </div>
        </v-tooltip>
      </div>
    </v-img>
    <v-row no-gutters class="white">
      <v-col>
        <v-chip
          v-for="category in article.categories"
          :key="category"
          text
          outlined
          class="rounded-0 mx-2 my-2"
          color="primary"
        >
          # {{ category }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ArticleI } from '@/pages/articles.vue'
import { Prop } from 'vue-property-decorator'
import moment from 'moment'

@Component({})
export default class ArticleCard extends Vue {
  @Prop()
  article!: ArticleI

  formatDate(val: string) {
    return moment(val).format('DD/MM/YYYY HH:mm')
  }
}
</script>

<style lang="scss">
.bg-above-img {
  background-color: transparentize(#00413a, 0.2);
}
.article-card {
  &__title {
  }
}
.article-tooltip {
  &--content {
    pointer-events: all !important;
  }
  a {
    color: #fff !important;
  }
}
</style>
