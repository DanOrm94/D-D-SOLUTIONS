import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: 'Web Design for Local Small Businesses | DD Web Solutions',
      },
      {
        name: 'description',
        content:
          'Professional web design, local SEO and ongoing website support for UK small businesses. Fast, mobile-friendly websites built to generate enquiries and customers.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: 'Web Design for Local Small Businesses | DD Web Solutions',
      },
      {
        property: 'og:description',
        content:
          'Professional websites, local SEO and ongoing support for small businesses across the UK.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://ddwebsolution.com/',
      },
    ],
  }),
})

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M9 21v3M19 21v3M6 24h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 9h16M6 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Website Design',
    description:
      'A professionally crafted website built around your brand — not a cookie-cutter template. Designed to convert visitors into customers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 3C14 3 9 8 9 14s5 11 5 11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 3c0 0 5 5 5 11s-5 11-5 11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 14h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.5 9h19M4.5 19h19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile-Responsive Layout',
    description:
      'Every site we build looks great on phones, tablets, and desktops. Over 60% of your customers are searching on mobile — we make sure you show up right.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7v8c0 5.5 4.3 10.1 10 11 5.7-.9 10-5.5 10-11V7L14 3z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Local SEO Foundations',
    description:
      'Built-in local SEO foundations so nearby customers can find you on Google. Proper page titles, meta descriptions, internal linking, structured content, and speed optimisation from day one.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2l3.5 7 7.5 1-5.5 5.3 1.3 7.7L14 20l-6.8 3 1.3-7.7L3 10l7.5-1L14 2z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Content Management',
    description:
      'Update your hours, menu, or photos yourself with an easy-to-use dashboard — no tech skills needed. Or leave it to us with your monthly plan.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M8 8V6a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SSL & Security',
    description:
      'Every site includes an SSL certificate (the padlock in your browser), keeping your visitors safe and improving your Google ranking.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-6 4 4 4-5 6 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 4v20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Monthly Reporting',
    description:
      'Know how your website is performing. Monthly maintenance subscribers get a plain-English report showing visitors, popular pages, and search terms.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Free Discovery Call',
    description:
      "We learn about your business, your customers, and what you need from your website. No obligation, no jargon.",
  },
  {
    number: '02',
    title: 'Design & Build',
    description:
      "We design a site tailored to your brand. You review, request tweaks, and approve before anything goes live.",
  },
  {
    number: '03',
    title: 'Launch Day',
    description:
      "Your website goes live. We handle domain connection, hosting, and all the technical bits so you don't have to.",
  },
  {
    number: '04',
    title: 'Ongoing Care',
    description:
      "Sit back while we handle updates, security patches, and backups every month. Your site stays fast and fresh.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Before DD built our site, we were invisible online. Now we get 3–4 new enquiries every week directly through the website. Worth every penny.",
    author: 'Chris Cox',
    business: "NDC Movements",
    initials: 'CC',
  },
  {
    quote:
      "I was nervous about the tech side but they made it so easy. The monthly fee means I never have to worry about the site breaking or going outdated.",
    author: 'Danny Marshall',
    business: 'Dragonfly Developments',
    initials: 'DM',
  },
  {
    quote:
      "Our old site looked like it was from 2009. The new one actually reflects the quality of our work. Customers comment on it regularly.",
    author: 'Aatif',
    business: 'AK Traders',
    initials: 'AA',
  },
]

const WHY_ITEMS = [
  {
    stat: '48hrs',
    label: 'Typical response time',
    detail: 'When you email or call, you hear back from a real person — not an automated ticket system.',
  },
  {
    stat: 'Local',
    label: 'We know your market',
    detail: 'We work exclusively with local small businesses and understand how customers in your area search.',
  },
  {
    stat: 'No lock-in',
    label: 'You own your site',
    detail: 'Your domain, your content, your data. If you ever want to move on, we hand everything over cleanly.',
  },
  {
    stat: '5-star',
    label: 'Client satisfaction',
    detail: 'Every client who has launched with us would recommend DD to another local business owner.',
  },
]

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const payload = {
        access_key: '8c68b917-5a7f-4aa9-8cd6-d61b8415afad',
        subject: 'New website enquiry - DD Web Solutions',
        from_name: form.name,
        name: form.name,
        business: form.business,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.message || 'Form submission failed')
      }

      setStatus('sent')
      setForm({
        name: '',
        business: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong — please try emailing us directly at ddwebsolutions@hotmail.com')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#1e4a8a" />
            <path d="M9 16l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Message received!</h3>
        <p className="text-navy-600">We'll be in touch within 48 hours to arrange your free discovery call.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-500 text-navy-700 mb-1.5">Your name</label>
          <input id="name" className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-500 text-navy-700 mb-1.5">Business name</label>
          <input id="business" className="form-input" name="business" value={form.business} onChange={handleChange} placeholder="Smith's Café" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-500 text-navy-700 mb-1.5">Email address</label>
          <input id="email" className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@smithscafe.com" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-500 text-navy-700 mb-1.5">Phone (optional)</label>
          <input id="phone" className="form-input" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="07923034016" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-500 text-navy-700 mb-1.5">Tell us about your business</label>
        <textarea id="message" className="form-input" name="message" value={form.message} onChange={handleChange} placeholder="What does your business do? Do you have an existing website? What are you hoping a website will help with?" required />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMsg}</p>
      )}

      <button type="submit" className="btn-primary w-full text-base" style={{ fontFamily: 'var(--font-body)' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Book My Free Discovery Call'}
      </button>

      <p className="text-xs text-navy-400 text-center">No obligation. No spam. Just a friendly conversation about your business.</p>
    </form>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* ── NAVIGATION ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: 'rgba(10,22,40,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center no-underline">
              <img src="logo.png" alt="DD Web Solutions" className="h-10 sm:h-12 w-auto object-contain" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="nav-link premium-nav-link">
                  <span className="premium-nav-link__label">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a href="#contact" className="btn-primary hidden sm:inline-flex items-center text-sm px-5 py-2.5" style={{ fontFamily: 'var(--font-body)' }}>
                Get Started
              </a>
              <button
                className="md:hidden text-white p-1"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  {menuOpen ? (
                    <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  ) : (
                    <>
                      <path d="M3 6h16M3 11h16M3 16h16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-white border-opacity-10 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 nav-link premium-nav-link text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="premium-nav-link__label">{link.label}</span>
                </a>
              ))}
              <a href="#contact" className="btn-primary block text-center mt-4 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Get Started Free
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero-bg geo-pattern relative overflow-hidden min-h-screen flex items-center pt-16">
        {/* Decorative blue circle */}
        <div className="absolute pointer-events-none" style={{ right: '-10%', top: '10%', width: '520px', height: '520px', borderRadius: '50%', border: '1px solid rgba(74,130,204,0.15)', background: 'radial-gradient(circle at center, rgba(37,99,176,0.12) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ right: '5%', top: '20%', width: '320px', height: '320px', borderRadius: '50%', border: '1px solid rgba(74,130,204,0.08)' }} />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 relative z-10">
          <div className="max-w-[680px]">
            <div className="section-label animate-fade-up" style={{ color: '#e8b84b' }}>
              <span style={{ background: '#e8b84b', width: 24, height: 2, display: 'inline-block' }} />
              Local Business Web Design
            </div>
            <h1 className="font-display animate-fade-up-delay-1 mt-6 leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'white', fontWeight: 700, lineHeight: 1.12 }}>
              Web Design for Local
              <br />
              <span style={{ color: '#7aaada' }}>Small Businesses</span>
              <br />
              That Gets You More Customers.
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px' }}>
              We design and build fast, modern websites for local small businesses across the UK. Every website is built to attract customers, support local SEO, and turn Google visitors into enquiries. Straightforward pricing, no long-term contracts, and ongoing support.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <a href="#contact" className="btn-primary text-base">Book a Free Call</a>
              <a href="#pricing" className="btn-outline text-base">See Pricing</a>
            </div>
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-up-delay-4" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
              {['No lock-in contracts', 'You own your domain', 'Real human support'].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="rgba(37,99,176,0.4)"/><path d="M4 7l2 2 4-4" stroke="#7aaada" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafcff)' }} />
      </section>

      {/* ── SERVICES ── */}
