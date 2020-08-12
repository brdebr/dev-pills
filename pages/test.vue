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
import 'prismjs/plugins/autoloader/prism-autoloader.js'
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js' // Copy to clipboard loaded before Toolbar
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
    setTimeout(() => {
      // @ts-ignore
      Prism.highlightAllUnder(this.$refs.tesPage)
    }, 50)
  }

  mounted() {
    Prism.plugins.autoloader.languages_path = '/prism/components/'
    this.refreshPrism()
    this.$nuxt.$on('content:update', this.refreshPrism)
  }

  destroyed() {
    this.$nuxt.$off('content:update', this.refreshPrism)
  }
}
</script>
<style lang="scss">
.ttt {
  .nuxt-content-highlight {
    position: relative;
    code {
      background-color: unset !important;
      color: unset !important;
      padding: unset !important;
      font-size: unset !important;
      font-weight: unset !important;
      border-radius: unset !important;
      margin: unset !important;
      box-sizing: unset !important;
      letter-spacing: unset !important;
    }
    .filename {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      color: #fff;
      margin-top: 11px;
      margin-right: 9px;
      background-color: #171e35;
      padding: 5px 16px;
      padding-right: 30px;
      letter-spacing: 0.7px;
    }
    pre[class*='language-'] {
      &::before {
        position: absolute;
        right: 15px;
        top: 16px;
        z-index: 1;
        font-family: 'Material Design Icons';
        content: '\F0214';
        color: #fff;
      }
      &.language-js {
        &::before {
          content: '\F031E';
          color: #ffca28;
        }
      }
      &.language-ts {
        &::before {
          content: '\F06E6';
          color: #0288d1;
        }
      }
    }
  }
}
</style>
