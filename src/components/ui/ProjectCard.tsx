import Image from 'next/image'
import { Project } from '@/types'
import { urlFor } from '@/sanity/lib/image'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="bg-brand-surface-container-lowest border border-brand-surface-container-highest hover:shadow-sm hover:shadow-brand-accent/10 hover:-translate-y-1 transition-[transform,shadow] duration-300 flex flex-col group mb-6 h-full will-change-transform">

      {/* Thumbnail */}
      <div className="block aspect-video w-full overflow-hidden bg-brand-surface-container relative">
        {project.thumbnail ? (
          <Image
            src={urlFor(project.thumbnail).width(800).height(500).url()}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            className="object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-muted">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ padding: '15px', marginLeft: '5px' }}>

        {/* Title & Description & Tech Stack - takes available space */}
        <div className="flex-1" style={{ paddingBottom: '16px' }}>
          <h3 className="typography-h3 text-brand-text" style={{ marginBottom: '16px' }}>
            <span className="transition-colors duration-200">
              {project.title}
            </span>
          </h3>

          <p className="typography-body-md text-brand-muted" style={{ lineHeight: 1.6, marginBottom: '20px' }}>
            {project.description}
          </p>

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

        {/* GitHub & Source - fixed at bottom */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid #e3e2e0' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 typography-label-md text-brand-muted hover:text-brand-accent transition-colors duration-200 group/link"
            >
              <Image src="/icons/github-sign.png" alt="GitHub" width={24} height={24} className="group-hover/link:scale-110 transition-transform duration-200 will-change-transform" />
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