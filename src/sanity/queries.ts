import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    description,
    techStack,
    githubUrl,
    liveUrl,
    featured
  }
`)

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    thumbnail,
    description,
    techStack,
    githubUrl,
    liveUrl,
    featured
  }
`)