<template>
  <div class="global-search">
    <v-text-field
      :label="$t('search')"
      dense
      solo
      solo-inverted
      flat
      outlined
      full-width
      hide-details
      append-icon="mdi-magnify"
      class="rounded-0 flex-grow-1"
    />
  </div>
</template>
<i18n>
{
  "en": {
    "search": "Search..."
  },
  "es": {
    "search": "Búsqueda..."
  }
}
</i18n>

<style lang="scss">
.global-search {
  min-width: 250px;
  transition: min-width 0.25s ease-out;
  &:focus-within {
    min-width: 400px;
  }
}
</style>
