<template>
  <v-col :cols="colWidth">
    <v-card tile flat color="#f9f9f9" class="fill-height d-flex flex-column">
      <v-card-title class="pr-1 d-flex align-center">
        <v-btn
          text
          icon
          small
          outlined
          color="red"
          class="mr-2"
          @click="$emit('remove-click')"
        >
          <v-icon size="20">
            mdi-delete-forever
          </v-icon>
        </v-btn>
        <span>
          {{ toolItem.name[$i18n.locale] }}
        </span>
        <template v-if="!this.$store.state.layout.isMobile">
          <v-btn
            text
            class="ml-auto mr-1"
            small
            :disabled="colWidth <= 3"
            @click="colWidthVal--"
          >
            <v-icon>
              mdi-arrow-collapse-horizontal
            </v-icon>
          </v-btn>
          <v-btn text small :disabled="colWidth >= 12" @click="colWidthVal++">
            <v-icon>
              mdi-arrow-expand-horizontal
            </v-icon>
          </v-btn>
        </template>
      </v-card-title>
      <v-row no-gutters class="d-flex">
        <component :is="toolItem.component" />
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ToolItemI } from '@/pages/toolbox.vue'

@Component({
  components: {
    't-percentage': () => import('@/components/Toolbox/Tools/Percentage.vue'),
    't-date-format': () => import('@/components/Toolbox/Tools/DateFormat.vue'),
    't-cross-multiply': () =>
      import('@/components/Toolbox/Tools/CrossMultiply.vue'),
    't-color-palette': () =>
      import('@/components/Toolbox/Tools/ColorPalette.vue'),
    't-sum': () => import('@/components/Toolbox/Tools/Sum.vue'),
  },
})
export default class ToolSelectedCard extends Vue {
  colWidthVal = 1

  @Prop()
  toolItem!: ToolItemI

  get colWidth() {
    // @ts-ignore
    if (this.$store.state.layout.isMobile) {
      return 12
    }
    if (this.toolItem.component === 't-color-palette') {
      return 6
    }
    const aux = this.colWidthVal * 3
    if (aux >= 12) return 12
    if (aux <= 3) return 3
    return aux
  }
}
</script>
