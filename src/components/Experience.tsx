import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { experience } from "../data/portfolio"
import { AnimatedSection } from "./AnimatedSection"
import { SectionHeading } from "./SectionHeading"

export function Experience() {
  return (
    <AnimatedSection id="experience" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Career path"
          title="Experience"
          description="From IT technician to product engineer, building across fintech, legal tech, e-commerce, and business operations."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-[11px]" />

          <div className="space-y-0">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                className="relative grid gap-4 pb-12 pl-8 md:grid-cols-[200px_1fr] md:gap-8 md:pl-12 md:pb-14"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div
                  className={`absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 md:h-[23px] md:w-[23px] ${
                    job.current
                      ? "border-accent bg-accent/20"
                      : "border-border bg-surface-raised"
                  }`}
                />

                <div className="md:pt-0.5">
                  <p className="font-mono text-xs tracking-wide text-ink-faint">{job.period}</p>
                  {job.current && (
                    <span className="mt-1 inline-block rounded-full bg-accent-glow px-2 py-0.5 font-mono text-[10px] text-accent">
                      current
                    </span>
                  )}
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-raised/50 p-5 transition-colors hover:border-border md:p-6">
                  <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
                    <span className="text-sm text-ink-faint">· {job.location}</span>
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-ink-faint transition-colors hover:text-accent"
                      >
                        <ExternalLink size={12} />
                        <span className="font-mono text-xs">
                          {job.website.replace(/^https?:\/\/(www\.)?/, "")}
                        </span>
                      </a>
                    )}
                  </div>
                  <p className="mb-4 text-sm font-medium text-accent">{job.role}</p>

                  <ul className="mb-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent/60 before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border-subtle px-2 py-0.5 font-mono text-[11px] text-ink-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
