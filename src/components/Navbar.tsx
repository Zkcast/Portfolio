import { motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks, personal } from "../data/portfolio"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-surface/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-raised text-xs text-accent transition-colors group-hover:border-accent/40">
            EC
          </span>
          <span className="hidden sm:inline">{personal.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personal.cvPath}
            download
            className="hidden items-center gap-2 rounded-lg border border-accent/30 bg-accent-glow px-4 py-2 text-sm font-medium text-accent transition-all hover:border-accent/60 hover:bg-accent/20 sm:inline-flex"
          >
            <Download size={15} />
            Download CV
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-muted md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 top-16 z-30 bg-surface/95 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="flex flex-col gap-1 p-5">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-lg text-ink-muted hover:bg-surface-raised hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
            <li className="mt-4">
              <a
                href={personal.cvPath}
                download
                className="flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent-glow px-4 py-3 text-sm font-medium text-accent"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={15} />
                Download CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
