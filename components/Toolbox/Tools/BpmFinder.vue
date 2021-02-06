<template>
  <v-card flat style="background-color: #fdfdfd" tile width="100%">
    <v-card-text class="px-5 py-3">
      <v-row no-gutters class="flex-wrap">
        <v-col cols="12" class="mb-3">
          <div class="beat-blocks-container px-2">
            <div
              v-for="i in 32"
              :key="i"
              class="beat-block"
              :class="{ sad: diffArr.length < i }"
            ></div>
          </div>
        </v-col>
        <v-col cols="12" class="mb-3">
          <v-text-field
            class="bpm-val-centered tile-text-field"
            outlined
            readonly
            disabled
            :value="BPM"
            hide-details
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            outlined
            color="teal darken-1"
            class="bpm-val-centered tile-text-field"
            autofocus
            hide-details
            placeholder="'Tap me to start!'"
            @click="addDiff"
            @keydown="addDiff"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class BPMFinderDialog extends Vue {
  dialog = false

  @Watch('dialog')
  refreshData(newVal: boolean) {
    if (newVal) {
      this.$set(this, 'diffArr', [])
      this.lastPress = 0
    }
  }

  lastPress = 0

  get averageDiff() {
    return this.diffArr.reduce((a, b) => a + b, 0) / this.diffArr.length
  }

  get BPM() {
    const aux = (60000 / this.averageDiff).toFixed(2)
    if (aux === 'NaN') {
      return ' '
    }
    return aux
  }

  timeout: any = null

  addDiff(ev: Event) {
    ev.preventDefault()
    if (this.diffArr.length >= 32) {
      this.refreshDiffData()
      return
    }
    if (!this.lastPress) {
      this.lastPress = Date.now()
      return
    }
    const dateNow = Date.now()
    this.diffArr.push(dateNow - this.lastPress)
    this.lastPress = dateNow
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.refreshDiffData()
    }, 3000)
  }

  refreshDiffData() {
    this.lastPress = 0
    this.$set(this, 'diffArr', [])
    clearTimeout(this.timeout)
  }

  diffArr: Array<number> = []
}
</script>
<style lang="scss">
.beat-blocks-container {
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 0px;
  border-left: 1px solid silver;
  border-right: 1px solid silver;
  .beat-block {
    width: 100%;
    height: 10px;
    background-color: #009688;
    &:nth-of-type(4n + 4) {
      background-color: #004b43;
    }
    &.sad {
      opacity: 0.2;
    }
  }
}
.bpm-val-centered {
  input[type='text'] {
    text-align: center;
    color: black !important;
  }
}
</style>
