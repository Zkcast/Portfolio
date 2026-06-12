import { projects } from "../data/portfolio"
import { AnimatedSection } from "./AnimatedSection"
import { ProjectCard } from "./ProjectCard"
import { SectionHeading } from "./SectionHeading"

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Real products I built or led, from business operations and e-commerce to AI integrations and payments."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large={i === 0} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + featured.length}
              />
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}
