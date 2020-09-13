export interface ArticleI {
    title: string
    description: string
    image: {
      route: string
      'alt-text': string
      mention: string
    }
    categories: [string]
    slug: string
    createdAt: string
    updatedAt: string
  }
  