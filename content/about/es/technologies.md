---
heading: "Acerca de"
message01: "El objetivo principal de esta página es archivar varias guías y tutoriales de desarrollo para mi mismo en el futuro, explicarlas detalladamente con imágenes, trozos de código y repositorios para luego consultarlos con rapidez"
message02: "Está desarrollado utilizando las siguientes tecnologías:"
items:
    -
        name: 'Netlify'
        description: 'Hosting para sitios estáticos con beneficios como recolectar datos de formularios, despliegues automáticos a partir de cambios en el repositorio, entre otros.'
        icon: 'image---/assets/images/icons/netlify-icon.svg'
        link: 'https://www.netlify.com/'
    -
        name: 'Vue'
        description: 'La librería de UI base que se usa para mostrar y gestionar variables reactivas, eventos, estilos, transiciones entre otras cosas.'
        icon: 'image---/assets/images/icons/vue-icon.svg'
        link: 'https://vuejs.org/'
    -
        name: 'Nuxt'
        description: 'Framework que alrededor de Vue que se encarga de añadirle: SSR, direcciones basadas en rutas de directorios, gestión de estado con vuex automático, Webpack y mucho más a traves de módulos.'
        icon: 'mdi-nuxt green--text text--darken-2'
        link: 'https://nuxtjs.org/'
    -
        name: 'Vuetify'
        description: 'Framework de componentes que implementa la especificación Material Design 2 de Google usando componentes Vue además de ofrecer varias utilidades de css y javascript.'
        icon: 'mdi-vuetify light-blue--text text--darken-1'
        link: 'https://vuetifyjs.com/en/'
    -
        name: 'Nuxt Content'
        description: 'Módulo de Nuxt para escribir en el directorio "content/" y luego poder recuperar esa información usando una interfaz similar a MongoDB, actuando como CMS basado en Git.'
        icon: 'mdi-post-outline green--text text--darken-2'
        link: 'https://content.nuxtjs.org/'
    -
        name: 'Nuxt i18n'
        description: 'Módulo de Nuxt para proveer internacionalización implementando vue-i18n, añadir idiomas a la generación de rutas, detectar el idioma del navegador, entre otros.'
        icon: 'mdi-web-box green--text text--darken-2'
        link: 'https://i18n.nuxtjs.org/'
    -
        name: 'Nuxt PWA'
        description: 'Módulo de Nuxt que simplifica mucho la configuración necesaria para convertir el proyecto en una PWA, configurado con valores por defecto para que funcione sin configuración'
        icon: 'image---/assets/images/icons/pwa-icon.svg'
        link: 'https://pwa.nuxtjs.org/'

---

<d-about-techs :items="items">
</d-about-techs>
