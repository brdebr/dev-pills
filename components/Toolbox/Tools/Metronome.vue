<template>
  <v-card flat style="background-color: #fdfdfd" tile width="100%">
    <v-card-text class="px-5 py-3">
      <v-row no-gutters class="flex-wrap">
        <v-col cols="12" class="mb-3">
          <v-text-field
            v-model.number="bpm"
            outlined
            label="BPM"
            color="teal darken-1"
            class="tile-text-field"
            hide-details="auto"
          >
            <template #append>
              <v-btn tile small icon outlined @click="handleClick">
                <v-icon> {{ playing ? 'mdi-pause' : 'mdi-play' }} </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Metronome extends Vue {
  audioContext = new window.AudioContext()

  bpm = 120

  interval: any = null

  playing = false

  @Watch('bpm')
  refreshInterval() {
    if (this.playing) {
      this.start()
    }
  }

  handleClick() {
    if (this.playing) {
      this.stop()
    } else {
      this.start()
    }
  }

  start() {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.playing = true
      this.beep()
    }, 60000 / this.bpm)
  }

  stop() {
    clearInterval(this.interval)
    this.interval = null
    this.playing = false
  }

  beep() {
    return new Promise<void>((resolve) => {
      const oscillator = this.audioContext.createOscillator()
      oscillator.frequency.value = 600
      oscillator.type = 'sine'
      oscillator.connect(this.audioContext.destination)
      oscillator.start(0)
      setTimeout(() => {
        oscillator.stop()
        oscillator.disconnect()
        resolve()
      }, 150)
    })
  }
}
</script>
<style lang="scss"></style>
