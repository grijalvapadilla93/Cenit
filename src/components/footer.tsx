import Link from "next/link"

const footerLinks = {
  company: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-17.88 5.85m19.5 4.17c-4.95-1.39-9.71-1.08-14.62 1.1" />
    </svg>
  )
}

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: DribbbleIcon, href: "#", label: "Dribbble" },
]

export function Footer() {
  return (
    <footer className="relative w-full bg-surface border-t border-white/5">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-6 mb-10 md:mb-14">
          <div className="col-span-2 md:col-span-4">
            <Link href="#" className="inline-flex items-center gap-2.5 mb-4 group">
              <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
              <span className="font-headline-lg text-[18px] md:text-headline-lg tracking-tighter text-primary group-hover:opacity-80 transition-opacity duration-200">Cenit Digital</span>
            </Link>
            <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed max-w-xs">
              Digital systems that help businesses attract more customers and scale with confidence.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="font-label-sm text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em] mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body-md text-[13px] text-primary/70 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-label-sm text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em] mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body-md text-[13px] text-on-surface-variant/60 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="font-label-sm text-[10px] text-on-surface-variant/50 uppercase tracking-[0.2em] mb-5">Connect</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant/60 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body-md text-[11px] text-on-surface-variant/40 tracking-wide">
            &copy; {new Date().getFullYear()} Cenit Digital. All rights reserved.
          </p>
          <span className="font-body-md text-[11px] text-on-surface-variant/40 tracking-wide">hello@cenitdigital.com</span>
        </div>
      </div>
    </footer>
  )
}
