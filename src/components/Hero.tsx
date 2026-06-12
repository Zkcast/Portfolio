import { motion } from "framer-motion"
import { Blocks, Download, Mail, MapPin, Shield } from "lucide-react"
import { personal } from "../data/portfolio"

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sage-dim blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5">
            <Blocks size={13} className="text-violet-300" />
            <span className="font-mono text-xs text-violet-300">Blockchain & Smart Contracts</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-sage-dim px-3 py-1.5">
            <Shield size={13} className="text-sage" />
            <span className="font-mono text-xs text-sage">Cybersecurity training</span>
          </span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.p
            className="mb-2 font-mono text-sm tracking-widest text-ink-faint uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {personal.location}
          </motion.p>

          <motion.h1
            className="text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] font-bold tracking-tight text-ink"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {personal.name.split(" ")[0]}
            <br />
            <span className="text-accent">{personal.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg text-ink-muted md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {personal.role}
            <span className="text-ink-faint"> · </span>
            <span className="text-accent">{personal.focus}</span>
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-base text-ink-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personal.summary}
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View projects
          </a>
          <a
            href={personal.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Download size={15} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap gap-6 border-t border-border-subtle pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <Mail size={15} className="text-ink-faint group-hover:text-accent" />
            {personal.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-ink-muted">
            <MapPin size={15} className="text-ink-faint" />
            {personal.location}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
