import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-brand-surface-container-lowest border border-brand-surface-container-highest hover:shadow-sm hover:shadow-brand-accent/10 hover:-translate-y-1 transition-all duration-300 flex flex-col group mb-6 h-full">

      {/* Thumbnail */}
      <Link href={`/projects/${project.slug.current}`} className="block aspect-video w-full overflow-hidden bg-brand-surface-container relative">
        {project.thumbnail ? (
          <Image
            src={urlFor(project.thumbnail).width(800).height(500).url()}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-muted">
            No image
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ padding: '15px', marginLeft: '5px' }}>

        {/* Title & Description */}
        <div style={{ marginBottom: '32px' }}>
          <h3 className="typography-h3 text-brand-text" style={{ marginBottom: '16px' }}>
            <Link href={`/projects/${project.slug.current}`} className="hover:text-brand-accent transition-colors duration-200">
              {project.title}
            </Link>
          </h3>

          <p className="typography-body-md text-brand-muted" style={{ lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '20px' }}>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '4px' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub & Source */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid #e3e2e0' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 typography-label-md text-brand-muted hover:text-brand-accent transition-colors duration-200 group/link"
            >
              <Image src="/icons/github-sign.png" alt="GitHub" width={24} height={24} className="group-hover/link:scale-110 transition-transform duration-200" />
              <span>Source</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2.5 typography-label-md text-brand-muted/40 cursor-not-allowed">
              <Image src="/icons/github-sign.png" alt="GitHub" width={24} height={24} className="opacity-40" />
              <span>Source Unavailable</span>
            </span>
          )}
        </div>

      </div>

    </div>
  )
}