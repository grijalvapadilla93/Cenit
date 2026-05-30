"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/contactformbg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/40 to-surface/70 z-[1]" />

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-label-sm text-[12px] text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-full inline-block mb-6">
              Let&apos;s Talk
            </span>
            <h2 className="font-display-lg text-[52px] md:text-[72px] text-primary leading-[1.1] font-medium mb-6">
              Start a<br />
              <span className="italic font-light text-primary/90">Conversation</span>
            </h2>
            <p className="font-body-lg text-[18px] text-on-surface leading-relaxed mb-10 max-w-md">
              Tell us about your project. We&apos;ll follow up within 24 hours to discuss how we can help your business grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-[18px] text-primary/60 group-hover:text-primary transition-colors duration-300">mail</span>
                <span className="font-body-md text-[15px] text-on-surface group-hover:text-primary transition-colors duration-300">hello@cenitdigital.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-[18px] text-primary/60 group-hover:text-primary transition-colors duration-300">call</span>
                <span className="font-body-md text-[15px] text-on-surface group-hover:text-primary transition-colors duration-300">+1 (555) 000-0000</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 block">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body-md text-[15px] text-primary placeholder-on-surface-variant/40 outline-none focus:border-primary/40 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 block">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body-md text-[15px] text-primary placeholder-on-surface-variant/40 outline-none focus:border-primary/40 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body-md text-[15px] text-primary placeholder-on-surface-variant/40 outline-none focus:border-primary/40 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 block">Budget Range</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body-md text-[15px] text-primary/70 outline-none focus:border-primary/40 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300 appearance-none">
                  <option value="" className="bg-surface">Select a range</option>
                  <option value="under-5k" className="bg-surface">Under $5,000</option>
                  <option value="5k-10k" className="bg-surface">$5,000 - $10,000</option>
                  <option value="10k-25k" className="bg-surface">$10,000 - $25,000</option>
                  <option value="25k+" className="bg-surface">$25,000+</option>
                </select>
              </div>
              <div>
                <label className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-2 block">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body-md text-[15px] text-primary placeholder-on-surface-variant/40 outline-none focus:border-primary/40 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-primary text-surface font-label-sm text-[12px] uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
