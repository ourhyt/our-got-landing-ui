export interface DJ {
  id: string
  name: string
  soundcloud: string
}

export interface Set {
  id: string
  title: string
  djs: DJ[] | null
  date: string
  soundcloudUrl: string
  soundcloudEmbedUrl: string
  imageUrl: string
  category: 'weekly' | 'classic'
  duration: string
}

export interface Event {
  id: string
  title: string
  date: string
  location: string
  imageUrl: string
  ticketUrl: string
  isPast: boolean
  country: string
  djs: DJ[] | null
}

export interface Post {
  id: string
  title: string
  description: string
  date: string
  imageUrl: string
  category: string
  content_md: string
}

export interface Contact {
  id: string
  email_demo: string
  email_info: string
  instagram: string
  tiktok: string
  youtube: string
  soundcloud: string
}

export interface ApiResponse {
  events: Event[]
  sets: Set[]
  posts: Post[]
  contact: Contact
} 