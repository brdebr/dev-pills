<template>
  <v-card
    outlined
    tile
    class="section-card"
    :to="localePath(item.to)"
    :disabled="item.disabled"
  >
    <v-card-title class="d-flex align-center">
      <span class="subtitle-2">
        {{ title }}
      </span>
      <v-spacer />
      <span>
        <v-icon class="pb-1" color="primary">
          {{ item.icon }}
        </v-icon>
      </span>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { DrawerItemI } from '~/store/layout'

@Component({})
export default class SectionCard extends Vue {
  @Prop()
  item!: DrawerItemI

  @Prop()
  title!: String
}
</script>
<style lang="scss">
.section-card {
  border-color: #007c6f !important;
  &.v-card--disabled {
    border-color: #888888 !important;
  }
}
</style>
