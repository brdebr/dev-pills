<template>
  <div ref="tesPage" style="width: 100%;">
    <nuxt-content
      class="ttt"
      :document="pageMd"
      @content:update="refreshPrism"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Prism from 'prismjs'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

@Component({
  async asyncData({ $content }) {
    const pageMd = await $content('hello').fetch()

    return {
      pageMd,
    }
  },
})
export default class TestPage extends Vue {
  pageMd = null

  refreshPrism() {
    // @ts-ignore
    Prism.highlightAllUnder(this.$refs.tesPage)
  }

  mounted() {
    this.refreshPrism()
  }
}
</script>
<style lang="scss">
.ttt {
  .nuxt-content-highlight {
    code {
      background-color: unset !important;
      color: unset !important;
      padding: unset !important;
      font-size: unset !important;
      font-weight: unset !important;
      border-radius: unset !important;
      margin: unset !important;
      box-sizing: unset !important;
    }
  }
}
</style>
