<template>
  <v-col lg="2" md="3" sm="4" cols="12" class="with-category-icon">
    <v-card
      tile
      outlined
      class="text-center"
      :disabled="!tool.component"
      @click="$emit('add-tool', tool)"
    >
      <v-card-text>
        {{ tool.name[$i18n.locale] }}
      </v-card-text>
    </v-card>
    <div class="category-icon mr-3 mt-2">
      <v-icon size="14">
        {{ mapCategoryIcons(tool.category) }}
      </v-icon>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ToolItemI } from '@/pages/toolbox.vue'
import { Prop } from 'vue-property-decorator'

@Component({})
export default class ToolCard extends Vue {
  @Prop()
  tool!: ToolItemI

  mapCategoryIcons(val: string) {
    switch (val) {
      case 'dates':
        return 'mdi-calendar-blank-outline'
      case 'colors':
        return 'mdi-palette-outline'
      case 'numbers':
        return 'mdi-variable'
      case 'data':
        return 'mdi-code-braces'
      default:
        return ''
    }
  }
}
</script>

<style lang="scss">
.with-category-icon {
  position: relative;
  .category-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 2px;
    padding-right: 3px;
  }
}
</style>
