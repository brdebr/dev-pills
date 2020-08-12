---
message01: "This website's central primary is to archive various development guides and tutorials for my self in the future, carefully explain them with images, code blocks, and repositories."
message02: "It's build using the following technologies:"
items:
    -
        name: 'Vue'
        description: 'The base UI library that is used to display reactive variables, manage events, styles and more.'
        icon: 'image---/assets/images/icons/vue-icon.svg'
        link: 'https://vuejs.org/'
    -
        name: 'Nuxt'
        description: 'Framework wrapping Vue that manages: SSR, file path based routing, automatic vuex store, Webpack and much more.'
        icon: 'mdi-nuxt green--text text--darken-2'
        link: 'https://nuxtjs.org/'
    -
        name: 'Nuxt Content'
        description: 'Nuxt module to write in a "content/" directory and fetch your files content through a MongoDB like API, acting as a Git-based Headless CMS.'
        icon: 'mdi-post-outline green--text text--darken-2'
        link: 'https://content.nuxtjs.org/'
    -
        name: 'Vuetify'
        description: 'Components framework that implements the Material Design 2 specification from Google using Vue components also with various css and js helpers.'
        icon: 'mdi-vuetify light-blue--text text--darken-1'
        link: 'https://vuetifyjs.com/en/'
    -
        name: 'Netlify'
        description: 'Hosting for static sites with benefits like collect form data, automatic deployment from repository pushes and more.'
        icon: 'image---/assets/images/icons/netlify-icon.svg'
        link: 'https://www.netlify.com/'

---

<d-table :items="items">
</d-table>
