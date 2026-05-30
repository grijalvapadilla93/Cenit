"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const trustItems = [
  { icon: "bolt", label: "Fast Turnaround", sub: "No delays" },
  { icon: "verified_user", label: "Premium Quality", sub: "Built to perform" },
  { icon: "neurology", label: "AI-Powered", sub: "Future-ready" },
  { icon: "support_agent", label: "Ongoing Support", sub: "We've got you" },
]

export function HeroSection() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 800], [1, 1.3])
  const contentOpacity = useTransform(scrollY, [0, 800], [1, 0])

  return (
    <div className="relative min-h-screen md:h-screen">
      <motion.div className="absolute inset-0 overflow-hidden -z-10" style={{ scale }}>
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center md:[object-position:65%_65%]"
          quality={90}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(18, 19, 23, 0.85) 0%, rgba(18, 19, 23, 0.6) 40%, rgba(18, 19, 23, 0) 70%)" }} />
      </motion.div>

      <main className="relative z-10 w-full min-h-screen md:h-screen px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col pt-[80px]">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start"
            style={{ opacity: contentOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-6 md:mb-8 backdrop-blur-sm bg-white/5">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              <span className="font-label-sm text-[10px] md:text-label-sm uppercase tracking-widest text-primary">Digital Systems That Drive Growth</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display-lg editorial-headline text-primary mb-6 font-medium [text-shadow:_0_4px_30px_rgb(0_0_0_/_50%)]">
              Websites.<br />
              Automation.<br />
              <span className="italic font-light text-primary">Growth.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface mb-12 max-w-md leading-relaxed [text-shadow:_0_2px_20px_rgb(0_0_0_/_50%)]">
              We build premium websites, AI-powered systems, and growth strategies that help businesses attract more customers and scale with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contact">
                <Button variant="default" size="default" className="font-label-sm text-label-sm uppercase tracking-widest">
                  Book a Strategy Call
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </Button>
              </a>
              <a href="#work">
                <Button variant="outline" size="default" className="font-label-sm text-label-sm uppercase tracking-widest">
                  See Our Work
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: contentOpacity }}>
          <div className="flex md:flex-wrap items-center justify-between gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8 pb-6 md:pb-8 overflow-x-auto md:overflow-visible scrollbar-none">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 flex-shrink-0 md:flex-shrink">
                <span className="material-symbols-outlined text-primary/90 text-xl">{item.icon}</span>
                <div>
                  <div className="font-label-sm text-[11px] md:text-label-sm text-primary whitespace-nowrap">{item.label}</div>
                  <div className="font-label-sm text-[10px] text-on-surface-variant/70 tracking-normal">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
