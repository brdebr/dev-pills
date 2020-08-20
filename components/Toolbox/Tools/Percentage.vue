<template>
  <v-card
    tile
    flat
    style="background-color: #fdfdfd;"
    width="100%"
    min-height="124px"
    class="d-flex align-center"
  >
    <v-radio-group v-model="mode" hide-details class="mt-0">
      <v-row no-gutters justify="space-around" class="py-3">
        <v-col cols="4" class="d-flex flex-column align-center">
          <v-radio
            value="%1"
            class="mb-1"
            :label="mode === '%1' ? '%' : 'Uts'"
          />
          <v-text-field
            v-model="x"
            dense
            solo
            flat
            outlined
            full-width
            hide-details
            class="rounded-0"
          />
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <v-radio
            value="%2"
            class="mb-1"
            :label="mode === '%2' ? '%' : 'Uts'"
          />
          <v-text-field
            v-model="y"
            dense
            solo
            flat
            outlined
            full-width
            hide-details
            class="rounded-0"
          />
        </v-col>
        <v-col cols="3" class="d-flex">
          <v-text-field
            dense
            solo
            flat
            label="Result"
            outlined
            full-width
            disabled
            :value="result"
            hide-details
            class="rounded-0 mt-auto"
          />
        </v-col>
      </v-row>
    </v-radio-group>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Percentage extends Vue {
  x = 0
  y = 0
  mode = '%2'

  get result() {
    if (this.mode === '%2') {
      return (this.x * (this.y / 100)).toFixed(2)
    } else if (this.mode === '%1') {
      return (this.y * (this.x / 100)).toFixed(2)
    } else {
      return '-BLANK-'
    }
  }
}
</script>
