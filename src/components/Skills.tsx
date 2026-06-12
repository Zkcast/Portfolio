import { motion } from "framer-motion"
import { educationPrograms, skillGroups } from "../data/portfolio"
import { AnimatedSection } from "./AnimatedSection"
import { SectionHeading } from "./SectionHeading"

const educationStyles = {
  sage: {
    card: "border-sage/20 bg-sage-dim",
    label: "text-sage",
    badge: "bg-sage/20 text-sage",
    module: "border-sage/20 text-sage",
  },
  violet: {
    card: "border-violet-400/20 bg-violet-400/8",
    label: "text-violet-300",
    badge: "bg-violet-400/20 text-violet-300",
    module: "border-violet-400/20 text-violet-300",
  },
} as const

export function Skills() {
  return (
    <AnimatedSection id="stack" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Tools"
          title="Stack & Education"
          description="Technologies I use day to day, plus what I'm actively learning in Web3 and security."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="rounded-xl border border-border-subtle bg-surface-raised/40 p-5"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ borderColor: "var(--color-border)" }}
            >
              <h3 className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {educationPrograms.map((program, i) => {
            const styles = educationStyles[program.variant]
            return (
              <motion.div
                key={program.institution}
                className={`rounded-xl border p-5 ${styles.card}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className={`font-mono text-xs tracking-widest uppercase ${styles.label}`}>
                    In progress
                  </h3>
                  {program.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${styles.badge}`}
                    >
                      {program.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base font-semibold text-ink">{program.program}</p>
                <p className="text-sm text-ink-muted">
                  {program.institution} · {program.location}
                </p>
                <p className="mt-1 font-mono text-xs text-ink-faint">{program.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {program.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {program.modules.map((mod) => (
                    <li
                      key={mod}
                      className={`rounded-md border px-2 py-1 text-xs ${styles.module}`}
                    >
                      {mod}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
