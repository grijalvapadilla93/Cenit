"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], ["rgba(18,19,23,0)", "rgba(18,19,23,0.85)"])
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"])
  const navBlur = useTransform(scrollY, [0, 80], [0, 16])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 border-b"
      style={{ background: navBg, borderColor: navBorder, backdropFilter: `blur(${navBlur}px)` } as any}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-[72px] md:h-[80px]">
        <a href="#" className="font-headline-lg-mobile md:font-headline-lg text-[18px] md:text-headline-lg tracking-tighter text-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200">
          <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
          <span className="md:hidden">Cenit</span>
          <span className="hidden md:inline">Cenit Digital</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary/60 font-medium hover:text-primary transition-all duration-300 font-label-sm text-label-sm uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact">
          <Button variant="outline" size="sm" className="hidden md:inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 active:scale-[0.97]">
            Inquire
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Button>
        </a>
        <button className="md:hidden text-primary relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 top-0 bg-surface z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-display-lg text-4xl text-primary hover:text-primary/70 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-primary text-surface font-label-sm text-[12px] uppercase tracking-widest rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Inquire
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
