import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { ShowcaseSection } from "@/components/showcase-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <section id="services" className="scroll-mt-20"><WhoWeAre /></section>
      <section id="work" className="scroll-mt-20"><ShowcaseSection /></section>
      <section id="pricing" className="scroll-mt-20"><PricingSection /></section>
      <section id="contact" className="scroll-mt-20"><ContactSection /></section>
      <Footer />
    </>
  )
}
