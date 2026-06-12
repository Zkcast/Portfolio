import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "../data/portfolio"

type ProjectCardProps = {
  project: Project
  index: number
  large?: boolean
}

export function ProjectCard({ project, index, large = false }: ProjectCardProps) {
  const CardWrapper = project.website ? motion.a : motion.article
  const wrapperProps = project.website
    ? {
        href: project.website,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {}

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised transition-colors hover:border-border-subtle ${
        large ? "md:col-span-2" : ""
      } ${project.website ? "cursor-pointer" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}66, transparent)`,
        }}
      />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            {project.company && (
              <p className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {project.company}
                {project.period && <span className="text-ink-faint/60"> · {project.period}</span>}
              </p>
            )}
            <h3
              className={`mt-1 font-semibold tracking-tight text-ink ${
                large ? "text-2xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
          </div>
          {project.website && (
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-ink-faint transition-all group-hover:border-transparent"
              aria-hidden
            >
              <div
                className="flex h-full w-full items-center justify-center rounded-lg transition-colors group-hover:text-surface"
                style={{ backgroundColor: `${project.accent}18` }}
              >
                <ArrowUpRight
                  size={16}
                  className="transition-colors group-hover:text-surface"
                  style={{ color: project.accent }}
                />
              </div>
            </div>
          )}
        </div>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <ul className="mb-5 space-y-1.5">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-ink-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent/60 before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border-subtle bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  )
}
