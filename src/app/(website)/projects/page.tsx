import { client } from '@/sanity/lib/client'
import { PROJECTS_QUERY } from '@/sanity/queries'
import ProjectCard from '@/components/ui/ProjectCard'
import { Project } from '@/types'

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY)

  return (
    <main className="flex-grow flex flex-col" >
      {/* Page Header */}
      <section className="site-container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }} >
        <h1 className="typography-h1 text-brand-text mb-4">Crafting digital experiences.</h1>
        <p className="typography-body-lg text-brand-muted max-w-2xl">
          A collection of projects demonstrating my approach to modern frontend development.
          Focused on clean code, intuitive user experiences, and bridging the gap between design and technical implementation.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="site-container flex-grow" style={{ paddingBottom: "8rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}