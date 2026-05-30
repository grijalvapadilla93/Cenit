"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const tiers = [
  {
    tag: "Foundation",
    name: "Digital Presence",
    price: "1,500",
    description: "Establish high-conversion brand authority and essential digital infrastructure.",
    features: ["High-conversion Webflow site", "Monthly performance audits", "Basic SEO & Analytics", "Quarterly strategy sessions"],
    highlighted: false,
  },
  {
    tag: "Momentum",
    name: "Digital Growth",
    price: "2,900",
    description: "Automate lead generation and amplify your digital reach with active campaigns.",
    features: ["Everything in Presence, plus:", "Automated CRM integration", "Custom lead generation funnels", "Advanced technical SEO", "Monthly strategy & reporting"],
    highlighted: true,
  },
  {
    tag: "Ecosystem",
    name: "Digital Authority",
    price: "5,900",
    description: "A complete, AI-powered operational ecosystem and bespoke software solutions.",
    features: ["Everything in Growth, plus:", "Custom web app development", "AI-driven operational workflows", "Dedicated engineering squad", "Priority 24/7 support SLA"],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pricingsectionbg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="font-headline-lg-mobile md:font-display-lg text-[56px] md:text-[96px] text-primary mb-4 leading-[1.1]">
            Systems for Scale
          </h1>
          <p className="font-body-lg text-[20px] text-on-surface max-w-2xl mx-auto leading-relaxed">
            Invest in digital infrastructure designed for high-end creative studios. Predictable growth, transparent pricing, uncompromised quality.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 * index }}
              className={`flex flex-col h-full transition-all duration-500 p-6 md:p-10 relative rounded-[24px] md:rounded-[40px] backdrop-blur-xl ${
                tier.highlighted
                  ? "bg-surface/80 border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.3)] md:scale-105 z-10 hover:scale-[1.07] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
                  : "bg-surface/70 border border-white/8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-surface font-label-sm text-[12px] px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <span className={`font-label-sm text-[12px] tracking-widest uppercase border px-3 py-1 rounded-full mb-6 inline-block ${
                  tier.highlighted
                    ? "text-primary border-primary/30"
                    : "text-outline border-outline/30"
                }`}>
                  {tier.tag}
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
                  {tier.name}
                </h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-body-lg text-[18px] text-on-surface-variant">$</span>
                  <span className="font-display-lg md:text-display-lg text-headline-lg-mobile text-primary">{tier.price}</span>
                  <span className="font-body-md text-[16px] text-on-surface-variant">/mo</span>
                </div>
                <p className="font-body-md text-[16px] text-on-surface leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 font-body-md text-[16px] text-on-surface mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`material-symbols-outlined mt-1 ${
                        tier.highlighted && i === 0
                          ? "text-primary"
                          : "text-outline/50"
                      }`} style={{ fontVariationSettings: tier.highlighted && i === 0 ? "'FILL' 1" : "'FILL' 0" }}>
                        {tier.highlighted && i === 0 ? "check_circle" : "check"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`block w-full py-4 px-6 font-label-sm text-[12px] uppercase tracking-widest rounded-xl text-center transition-all duration-300 active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-primary text-surface hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                    : "border border-white/20 text-primary hover:bg-white/10 hover:border-white/30"
                }`}
              >
                Start Project
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
