<template>
  <v-row class="justify-center" no-gutters>
    <v-col v-bind="bindings()">
      <slot v-if="!$store.state.layout.loading">
        <v-card outlined tile>
          <v-card-title>
            TITLE
          </v-card-title>
          <v-card-text :class="!$vuetify.breakpoint.xsOnly ? 'px-5' : 'px-2'">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              orci id ligula mattis pretium. Donec quam urna, scelerisque
              aliquam rutrum ac, rutrum quis metus. In magna metus, vehicula id
              congue eu, sollicitudin eget mauris. Praesent cursus placerat
              consequat. Nulla scelerisque malesuada nunc feugiat tempor. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Aenean et condimentum lacus, at imperdiet tellus.
              Vivamus et elit luctus leo ornare tincidunt. Nulla consectetur
              sollicitudin scelerisque. Sed et auctor arcu. Integer dapibus urna
              nec pellentesque luctus. Duis imperdiet nibh a lectus tristique
              rhoncus. Cras dictum tincidunt sem, pharetra finibus est blandit
              nec. Vivamus feugiat et massa non blandit. Donec vitae gravida
              diam.
            </p>
            <p>
              Suspendisse nec cursus quam. Sed vel est cursus, tempor sem in,
              posuere mi. Cras malesuada egestas turpis et condimentum. Praesent
              dignissim purus luctus risus consectetur, in feugiat nisl
              convallis. Donec ac euismod ligula. Sed feugiat sollicitudin
              felis, sed posuere massa molestie at. Donec sit amet finibus leo.
              Ut sagittis pretium est, et hendrerit enim. Sed et lobortis urna.
              Maecenas accumsan dui ante, a suscipit nunc aliquet eget.
            </p>
          </v-card-text>
        </v-card>
      </slot>
      <v-skeleton-loader v-else :type="loaderType()" tile width="100%" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({})
export default class PageContainer extends Vue {
  @Prop({ default: [12] })
  cols!: Array<number> | string

  getCols() {
    if (typeof this.cols === 'string') {
      return this.cols.replace(/(\s|_)/g, '').split(',')
    }
    return this.cols
  }

  bindings() {
    const aux = this.getCols()
    return {
      xl: aux[4] || undefined,
      lg: aux[3] || undefined,
      md: aux[2] || undefined,
      sm: aux[1] || undefined,
      cols: aux[0],
    }
  }

  loaderType() {
    const loaderTypeArr = [
      'card-heading',
      'list-item-three-line',
      'list-item-avatar-two-line',
      'article',
      'list-item-three-line',
      'article',
      'list-item-two-line@2',
    ]
    return loaderTypeArr.join(',')
  }
}
</script>
