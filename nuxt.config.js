const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', 'nuxt-primevue'],
    
    components: [
        '~/components',
        {
            path: '~/components/layout',
            prefetch: false
        }
    ],
    primevue: {
        options: {
            unstyled: true,
            ripple: false,
        },
        importPT: { as: 'primeone', from:  '/presets/primeone/index.js'},
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'PrimeVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'PrimeVue | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'PrimeVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://primevue.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['~/assets/styles/style.css','/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/layout/layout.scss'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
});