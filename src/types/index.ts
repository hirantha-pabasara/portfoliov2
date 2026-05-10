export interface Project {
  _id: string
  title: string
  slug: { current: string }
  thumbnail: any
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
}