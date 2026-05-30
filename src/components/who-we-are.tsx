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
    steps: [
      { step: 1, title: "Discovery & Strategy", description: "We learn your business, audience, and goals to build a roadmap." },
      { step: 2, title: "Design & Prototype", description: "We craft a high-conversion visual experience tailored to your brand." },
      { step: 3, title: "Build & Develop", description: "We develop with clean, performant code that scales." },
      { step: 4, title: "Launch & Optimize", description: "We deploy, test, and iterate to maximize results." },
    ],
  },
  {
    id: "automation",
    icon: "settings",
    title: "Automation",
    description: "Streamline operations and eliminate repetitive tasks.",
    callout: "Save time, reduce costs, and operate more efficiently.",
    steps: [
      { step: 1, title: "Process Audit", description: "We map your workflows and identify bottlenecks." },
      { step: 2, title: "System Design", description: "We design automated workflows tailored to your operations." },
      { step: 3, title: "Integration", description: "We connect your tools into a seamless ecosystem." },
      { step: 4, title: "Monitor & Refine", description: "We track performance and optimize continuously." },
    ],
  },
  {
    id: "ai",
    icon: "auto_awesome",
    title: "AI Systems",
    description: "Capture, qualify, and engage leads automatically 24/7.",
    callout: "Never miss a lead again. AI that works while you sleep.",
    steps: [
      { step: 1, title: "Opportunity Analysis", description: "We identify where AI drives the most impact." },
      { step: 2, title: "Model Selection", description: "We choose the right AI tools for your needs." },
      { step: 3, title: "Implementation", description: "We deploy AI systems into your workflows." },
      { step: 4, title: "Train & Scale", description: "We train your team and scale AI across operations." },
    ],
  },
  {
    id: "seo",
    icon: "trending_up",
    title: "SEO & Growth",
    description: "Rank higher, get found, and drive consistent, qualified traffic.",
    callout: "More visibility. More traffic. More opportunities.",
    steps: [
      { step: 1, title: "Audit & Research", description: "We analyze your current position and opportunities." },
      { step: 2, title: "Strategy Development", description: "We build a roadmap to dominate your market." },
      { step: 3, title: "Execution", description: "We implement on-page, off-page, and technical SEO." },
      { step: 4, title: "Measure & Adapt", description: "We track rankings, traffic, and refine the approach." },
    ],
  },
]

export function WhoWeAre() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="relative w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] bg-[#F7F7F7] text-[#121317] z-10 relative flex flex-col justify-center px-margin-mobile lg:px-margin-desktop py-16 lg:py-32 h-auto lg:min-h-[800px] lg:[mask-image:linear-gradient(to_right,black_0%,black_80%,transparent_100%)]">
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

      <div className="w-full lg:h-full lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-0 relative overflow-hidden bg-surface py-12 lg:py-0">
        <Image
          src="/WhoWeareback360norotation.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/30 to-surface/10 lg:hidden" />
        <div className="hidden lg:block absolute inset-0" style={{
          background: "linear-gradient(to right, #F7F7F7 0%, rgba(247,247,247,0.9) 10%, rgba(247,247,247,0.4) 20%, transparent 35%, rgba(18,19,23,0.15) 45%, rgba(18,19,23,0.35) 55%, rgba(18,19,23,0.55) 70%, rgba(18,19,23,0.75) 85%, #121317 100%)",
        }} />

        <motion.div
          className="relative lg:absolute lg:inset-0 flex flex-col lg:justify-center px-margin-mobile lg:pl-[42%] lg:pr-20 z-10 gap-10 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeId ?? "default"}
        >
          {(() => {
            const service = services.find((s) => s.id === activeId) ?? services[0]
            return (
              <>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display-lg text-3xl md:text-4xl text-white font-medium mb-4"
                >
                  Our{" "}
                  <span className="italic font-light text-white/80">{service.title}</span>{" "}
                  Process
                </motion.h3>
                {service.steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i + 0.2 } },
                    }}
                    className="flex items-start gap-4 lg:gap-6"
                  >
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary flex-shrink-0 mt-0.5 font-label-sm text-base">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-label-sm text-sm md:text-base tracking-widest uppercase text-white mb-1.5">{step.title}</h4>
                      <p className="font-body-md text-[15px] md:text-[17px] text-white/70 leading-relaxed max-w-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </>
            )
          })()}
        </motion.div>
      </div>
    </section>
  )
}
