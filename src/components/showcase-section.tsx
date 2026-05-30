"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    tag: "Website",
    tagIcon: "language",
    title: "ADAPT PERFORMANCE",
    description: "High-conversion platform for a premium fitness brand with seamless booking.",
    longDescription: "A full-stack performance brand site built for Adapt Training. We designed a high-impact digital experience that captures the intensity of elite fitness while driving real business results — lead generation, class bookings, and brand authority.",
    highlights: ["Lead capture with automated follow-up", "Class booking & schedule management", "Mobile-first responsive design"],
    metrics: [
      { label: "Lead Gen", value: "+137%" },
      { label: "Inquiries", value: "2.4x" },
    ],
    category: "Fitness",
    liveUrl: "https://adapt-seven-jade.vercel.app/",
  },
  {
    tag: "Website",
    tagIcon: "language",
    title: "LUXURY HOSPITALITY",
    description: "Immersive booking experience for a boutique hotel group.",
    longDescription: "A refined digital experience for Al Carbon — a boutique hospitality brand that needed a site as elegant as its spaces. We delivered an immersive browsing experience that showcases each room and drives direct bookings.",
    highlights: ["Direct booking engine integration", "Virtual room tours & gallery", "Multi-language support"],
    metrics: [
      { label: "Traffic", value: "+162%" },
      { label: "Bookings", value: "3.1x" },
    ],
    category: "Hospitality",
    liveUrl: "https://al-carbon.vercel.app/",
  },
]

export function ShowcaseSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/showcasesectionbg.png"
          alt=""
          fill
          className="object-cover object-center lg:object-right"
        />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12 md:mb-16">
          <div className="md:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-[14px] text-primary">auto_awesome</span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Selected Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display-lg editorial-headline text-primary mb-4 font-medium [text-shadow:_0_4px_30px_rgb(0_0_0_/_60%)]"
            >
              Digital Systems.<br />
              <span className="italic font-light text-primary">That Drive Growth.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-body-lg text-[20px] text-on-surface max-w-xl leading-relaxed [text-shadow:_0_2px_20px_rgb(0_0_0_/_50%)]"
            >
              A selection of websites and automation systems we&apos;ve designed and built to help businesses grow, scale, and lead their industries.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-20 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative h-[220px] md:h-[400px] rounded-2xl overflow-hidden bg-surface-container border border-white/5 group-hover:border-primary/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                      <span className="material-symbols-outlined text-[12px] text-primary">{project.tagIcon}</span>
                      <span className="font-label-sm text-[10px] text-primary uppercase tracking-wider">{project.tag}</span>
                    </div>
                    <img
                      src={`https://v1.screenshot.11ty.dev/${encodeURIComponent(project.liveUrl)}/opengraph/`}
                      alt={project.title}
                      className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </a>
              </div>
              <div className={`flex flex-col ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <span className="font-label-sm text-[11px] text-primary uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="font-display-lg text-3xl md:text-4xl text-primary font-medium mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 font-body-md text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 md:gap-10 mb-8">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="block font-display-lg text-3xl text-primary mb-0.5">{metric.value}</span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant/60 uppercase tracking-wider">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 border border-white/20 bg-transparent text-primary font-label-sm uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 group active:scale-[0.97]"
                >
                  <span>Visit Live Site</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">north_east</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-px bg-white/20 mb-6" />
          <p className="font-body-lg text-[20px] text-on-surface font-light leading-relaxed mb-10 max-w-2xl">
            Every project is designed to attract the right customers, automate operations, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm text-on-surface-variant">See how we can help your business grow.</span>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 bg-transparent text-primary font-label-sm uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 active:scale-[0.97]">
              <span>Book a Strategy Call</span>
              <span className="material-symbols-outlined text-[16px] ml-2">north_east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
