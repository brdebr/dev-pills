<template>
  <v-card tile flat style="background-color: #fdfdfd;" width="100%">
    <v-row class="px-2">
      <v-col cols="12">
        <v-text-field
          dense
          solo
          flat
          outlined
          full-width
          disabled
          :value="sum"
          hide-details
          class="rounded-0 result-num"
        />
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col cols="12">
        <v-text-field
          v-model.number="newNum"
          dense
          solo
          flat
          outlined
          full-width
          hide-details
          class="rounded-0"
          append-icon="mdi-plus-box-outline"
          @click:append="addNum"
          @keyup.enter="addNum"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(num, i) in numbers"
        :key="`${i}:${num}`"
        cols="12"
        class="pl-5 pr-5 d-inline-flex align-center"
      >
        <span class="text-center flex-grow-1"> + {{ num }} </span>
        <span class="ml-auto flex-grow-0">
          <v-btn
            x-small
            tile
            outlined
            class="px-1"
            style="min-width: 15px;"
            color="red darken-3"
            @click="removeNum(i)"
          >
            <v-icon small>
              mdi-close-box-outline
            </v-icon>
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'

@Component({})
export default class CrossMultiply extends Vue {
  numbers: Array<number> = []
  newNum: number | null = null
  addNum() {
    if (!this.newNum) {
      return
    }
    this.numbers.push(this.newNum)
    this.newNum = null
  }

  removeNum(i: number) {
    this.numbers.splice(i, 1)
  }

  get sum() {
    return this.numbers.reduce((acc, el) => acc + el, 0)
  }
}
</script>
<style lang="scss">
.result-num {
  input {
    text-align: center;
    color: rgba(0, 0, 0, 0.9) !important;
    font-weight: 600 !important;
  }
}
</style>
