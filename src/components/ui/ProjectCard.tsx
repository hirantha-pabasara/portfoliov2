import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-brand-surface-container-lowest rounded-2xl border border-brand-surface-container-highest p-6 hover:shadow-sm hover:shadow-brand-accent/10 hover:-translate-y-1 transition-all duration-300 flex flex-col group">

      {/* Thumbnail */}
      <Link href={`/projects/${project.slug.current}`} className="block aspect-video w-full mb-6 rounded-xl overflow-hidden bg-brand-surface-container relative">
        {project.thumbnail ? (
          <Image
            src={urlFor(project.thumbnail).width(800).height(500).url()}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-muted">
            No image
          </div>
        )}
      </Link>

      {/* Content */}
      <h3 className="typography-h3 text-brand-text mb-2 ">
        <Link href={`/projects/${project.slug.current}`} className="hover:text-brand-accent transition-colors">
          {project.title}
        </Link>
      </h3>

      <p className="typography-body-md text-brand-muted mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack?.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-brand-accent/10 text-brand-accent typography-caption rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-auto">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 typography-label-md text-brand-muted hover:text-brand-accent transition-colors"
          >
            <Image src="/icons/github-sign.png" alt="GitHub" width={20} height={20} />
            Source
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 typography-label-md text-brand-muted/40 cursor-not-allowed">
            <Image src="/icons/github-sign.png" alt="GitHub" width={20} height={20} className="opacity-40" />
            Source Unavailable
          </span>
        )}
      </div>

    </div>
  )
}