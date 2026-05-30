"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: "websites",
    icon: "web",
    title: "Websites",
    description: "Strategic, high-converting websites designed to turn visitors into customers.",
    callout: "Built to convert visitors into loyal customers.",
  },
  {
    id: "automation",
    icon: "settings",
    title: "Automation",
    description: "Streamline operations and eliminate repetitive tasks.",
    callout: "Save time, reduce costs, and operate more efficiently.",
  },
  {
    id: "ai",
    icon: "auto_awesome",
    title: "AI Systems",
    description: "Capture, qualify, and engage leads automatically 24/7.",
    callout: "Never miss a lead again. AI that works while you sleep.",
  },
  {
    id: "seo",
    icon: "trending_up",
    title: "SEO & Growth",
    description: "Rank higher, get found, and drive consistent, qualified traffic.",
    callout: "More visibility. More traffic. More opportunities.",
  },
]

export function WhoWeAre() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="relative w-full min-h-[1000px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] bg-[#F7F7F7] text-[#121317] z-10 relative flex flex-col justify-center px-margin-mobile lg:px-margin-desktop py-20 lg:py-32 h-auto lg:min-h-[1000px] lg:[mask-image:linear-gradient(to_right,black_0%,black_80%,transparent_100%)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-lg"
        >
          <p className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-[#636565] mb-8">Who We Are</p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight mb-6 leading-[1.1]">
            We build digital systems that help businesses grow.
          </h2>
          <p className="font-body-md text-body-md text-[#454747] leading-relaxed">
            From high-converting websites to AI-powered automation and growth strategies, we create systems designed to attract more customers and scale with confidence.
          </p>
        </motion.div>

        <motion.div className="flex flex-col gap-4 max-w-lg" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {services.map((service, i) => (
            <motion.button
              key={service.id}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i + 0.2 } },
              }}
              onMouseEnter={() => setActiveId(service.id)}
              className="service-card group w-full text-left bg-white border border-[#E5E2E1] rounded-xl p-6 flex items-center gap-6 relative overflow-hidden"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#E5E2E1] rounded-lg bg-[#F7F7F7] text-[#1A1C1C]">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-label-sm text-label-sm tracking-widest uppercase text-[#1A1C1C] mb-2">{service.title}</h3>
                <p className="font-body-md text-[14px] text-[#636565] leading-snug">{service.description}</p>
              </div>
              <span className="material-symbols-outlined arrow-icon text-[#1A1C1C] transition-transform duration-300">arrow_forward</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="w-full h-[600px] lg:min-h-[1000px] lg:absolute lg:top-0 lg:left-0 lg:w-full z-0 relative overflow-hidden bg-surface">
        <Image
          src="/whoweareback.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #F7F7F7 0%, #F7F7F7 15%, rgba(247,247,247,0.4) 22%, transparent 32%, rgba(18,19,23,0.15) 42%, rgba(18,19,23,0.35) 55%, rgba(18,19,23,0.55) 70%, rgba(18,19,23,0.75) 85%, #121317 100%)",
        }} />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-8 lg:pl-[42%] lg:pr-20 z-10 gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i + 0.3 } },
              }}
              className="flex items-start gap-4 lg:gap-8"
              animate={{
                opacity: activeId === null || activeId === service.id ? 1 : 0.3,
                x: activeId === null || activeId === service.id ? 0 : -10,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary flex-shrink-0 mt-1">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <motion.div
                className="h-[1px] bg-white/30 mt-7 hidden lg:block"
                animate={{
                  width: activeId === null || activeId === service.id ? 48 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              />
              <div>
                <h4 className="font-label-sm text-label-sm tracking-widest uppercase text-white mb-2">{service.title}</h4>
                <p className="font-body-md text-[15px] text-white/80 leading-snug max-w-xs">{service.callout}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
