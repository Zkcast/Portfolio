import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { personal } from "../data/portfolio"
import { AnimatedSection } from "./AnimatedSection"

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <AnimatedSection id="contact" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-8 md:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              I'm open to full stack and front-end opportunities. Reach out by email or download
              my CV for more detail.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-transform hover:scale-[1.02]"
              >
                <Mail size={15} />
                {personal.email}
              </a>
              <a
                href={personal.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-sm text-ink-faint sm:flex-row">
          <p>
            © {year} {personal.name}
          </p>
          <p className="font-mono text-xs">Buenos Aires, Argentina</p>
        </footer>
      </div>
    </AnimatedSection>
  )
}
