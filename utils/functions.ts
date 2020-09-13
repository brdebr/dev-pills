import { ArticleI } from '@/types/global'

export const articleHeadObjBuilder = (article: ArticleI, locale: string) => {
  return {
    title: article.title,
    meta: [
      { hid: 'description', name: 'description', content: article.description },
      { hid: 'og:title', property: 'og:title', content: article.title },
      { hid: 'og:image', property: 'og:image', content: article.image.route },
      { hid: 'og:locale', property: 'og:locale', content: locale },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Dev-Pills' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: article.description,
      },
      { hid: 'twitter:title', name: 'twitter:title', content: article.title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: article.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: article.image.route,
      },
    ],
  }
}
