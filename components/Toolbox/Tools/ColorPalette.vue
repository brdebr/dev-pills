<template>
  <v-card tile flat style="background-color: #fdfdfd;" width="100%">
    <v-row class="px-2 flex-wrap">
      <v-col cols="12" sm="9">
        <v-color-picker
          v-model="selected"
          show-swatches
          flat
          :width="$vuetify.breakpoint.xsOnly ? 300 : 350"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <v-row class="flex-wrap" no-gutters>
          <v-col cols="12" class="text-center caption">
            Selected
          </v-col>
          <v-col
            cols="12"
            class="text-center"
            :style="{ height: '14px', backgroundColor: selected }"
          />
          <v-col cols="12" class="text-center">
            {{ selected }}
          </v-col>
          <v-col cols="12" class="text-center caption">
            Inverted
          </v-col>
          <v-col
            cols="12"
            class="text-center"
            :style="{
              height: '14px',
              backgroundColor: selected,
              filter: 'invert(1)',
            }"
          />
          <v-col cols="12" class="text-center caption">
            + Rotate
          </v-col>
          <v-col
            cols="12"
            class="text-center"
            :style="{
              height: '14px',
              backgroundColor: selected,
              filter: 'invert(1) hue-rotate(180deg)',
            }"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// TODO: Implement some of this functions
// https://bgrins.github.io/TinyColor/docs/tinycolor.html

@Component({})
export default class extends Vue {
  selected = ''
}
</script>
