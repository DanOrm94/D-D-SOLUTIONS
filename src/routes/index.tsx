import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
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
    title: 'SEO Foundations',
    description:
      'Built-in search engine optimisation so local customers can find you on Google. Proper page titles, meta tags, and speed optimisation from day one.',
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
    initials: 'MT',
  },
  {
    quote:
      "I was nervous about the tech side but they made it so easy. The monthly fee means I never have to worry about the site breaking or going outdated.",
    author: 'Ryan Duddy',
    business: 'CR Statics',
    initials: 'RO',
  },
  {
    quote:
      "Our old site looked like it was from 2009. The new one actually reflects the quality of our work. Customers comment on it regularly.",
    author: 'Alex Webster',
    business: 'MGW Electrical',
    initials: 'DK',
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
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#1e4a8a"/>
            <path d="M9 16l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <label className="block text-sm font-500 text-navy-700 mb-1.5">Your name</label>
          <input
            className="form-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-500 text-navy-700 mb-1.5">Business name</label>
          <input
            className="form-input"
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Smith's Café"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-500 text-navy-700 mb-1.5">Email address</label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@smithscafe.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-500 text-navy-700 mb-1.5">Phone (optional)</label>
          <input
            className="form-input"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="07923034016"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-500 text-navy-700 mb-1.5">Tell us about your business</label>
        <textarea
          className="form-input"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What does your business do? Do you have an existing website? What are you hoping a website will help with?"
          required
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full text-base"
        style={{ fontFamily: 'var(--font-body)' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Book My Free Discovery Call'}
      </button>
      <p className="text-xs text-navy-400 text-center">
        No obligation. No spam. Just a friendly conversation about your business.
      </p>
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
            <a href="#" className="flex items-center gap-2.5 no-underline">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #2563b0, #1e4a8a)', fontFamily: 'var(--font-display)' }}
              >
                DD
              </div>
              <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
                DD Web Solutions
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="btn-primary hidden sm:inline-flex items-center text-sm px-5 py-2.5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get Started Free
              </a>
              <button
                className="md:hidden text-white p-1"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
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
                  className="block py-2 nav-link text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
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
        <div
          className="absolute pointer-events-none"
          style={{
            right: '-10%',
            top: '10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            border: '1px solid rgba(74,130,204,0.15)',
            background: 'radial-gradient(circle at center, rgba(37,99,176,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            right: '5%',
            top: '20%',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1px solid rgba(74,130,204,0.08)',
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 relative z-10">
          <div className="max-w-[680px]">
            <div className="section-label animate-fade-up" style={{ color: '#e8b84b' }}>
              <span style={{ background: '#e8b84b', width: 24, height: 2, display: 'inline-block' }} />
              Local Business Web Design
            </div>

            <h1
              className="font-display animate-fade-up-delay-1 mt-6 leading-tight"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: 'white',
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Your business deserves
              <br />
              <span style={{ color: '#7aaada' }}>a website that works</span>
              <br />
              as hard as you do.
            </h1>

            <p
              className="animate-fade-up-delay-2 mt-6 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '520px' }}
            >
              DD Web Solutions builds professional websites for local small businesses —
              with a simple one-time setup fee and a low monthly maintenance plan that keeps
              everything running smoothly.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <a href="#contact" className="btn-primary text-base">
                Book a Free Call
              </a>
              <a href="#pricing" className="btn-outline text-base">
                See Pricing
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-up-delay-4" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
              {['No lock-in contracts', 'You own your domain', 'Real human support'].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" fill="rgba(37,99,176,0.4)"/>
                    <path d="M4 7l2 2 4-4" stroke="#7aaada" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafcff)' }} />
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-4">
            <span className="section-label">What we build</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0a1628', fontWeight: 700, lineHeight: 1.2 }}
            >
              Everything your website needs,
              <br />
              nothing you don't.
            </h2>
            <p style={{ color: '#4a82cc', maxWidth: '320px', fontSize: '0.95rem', lineHeight: 1.6 }}>
              We focus on what actually grows local businesses online — clean design, local SEO, and reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="service-card rounded-xl p-7"
                style={{
                  border: '1.5px solid #e0ecf9',
                  background: i === 0 ? 'linear-gradient(135deg, #0f2347, #1e4a8a)' : 'white',
                  color: i === 0 ? 'white' : '#0a1628',
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    background: i === 0 ? 'rgba(255,255,255,0.12)' : '#e0ecf9',
                    color: i === 0 ? 'white' : '#1e4a8a',
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2.5" style={{ lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.75)' : '#4a82cc' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process" className="py-24" style={{ background: '#f0f7ff' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Simple process</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0a1628', fontWeight: 700 }}
            >
              From idea to live website
              <br />
              in four steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 font-display font-bold text-lg"
                  style={{ background: '#1e4a8a', color: 'white' }}
                >
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2.5 text-navy-900" style={{ color: '#0a1628' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a82cc' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-4">
            <span className="section-label">Transparent pricing</span>
          </div>
          <div className="text-center mb-16">
            <h2
              className="font-display mt-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0a1628', fontWeight: 700 }}
            >
              One setup fee. Low monthly rate.
              <br />
              No surprises.
            </h2>
            <p style={{ color: '#4a82cc', marginTop: '1rem', fontSize: '1rem' }}>
              We believe great web presence shouldn't come with confusing quotes or hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Build Only */}
<div
  className="pricing-card rounded-xl p-8"
  style={{ border: '1.5px solid #e0ecf9', background: 'white' }}
>
  <div className="mb-6">
    <p className="text-sm font-600 uppercase tracking-widest mb-2" style={{ color: '#4a82cc', letterSpacing: '0.1em' }}>Build Only</p>
    <div className="flex items-end gap-1">
      <span className="font-semibold font-bold" style={{ fontSize: '2.8rem', color: '#0a1628', lineHeight: 1 }}>£299</span>
      <span className="text-sm pb-1" style={{ color: '#7aaada' }}>one-off</span>
    </div>
    <div className="mt-2">
      <span className="text-sm" style={{ color: '#7aaada' }}>No monthly fee</span>
    </div>
  </div>
  <ul className="space-y-3 mb-8">
    {[
      '1-page website',
      'Mobile responsive',
      'Contact form',
      'SSL certificate',
      'Basic SEO setup',
      'You manage hosting',
    ].map(item => (
      <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#163468' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" fill="#e0ecf9"/>
          <path d="M5 8l2 2 4-4" stroke="#1e4a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {item}
      </li>
    ))}
  </ul>
  <a href="#contact" className="block text-center py-3 rounded font-semibold text-sm transition-colors"
    style={{ border: '1.5px solid #1e4a8a', color: '#1e4a8a', textDecoration: 'none' }}
    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#e0ecf9' }}
    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
  >
    Get Started
  </a>
</div>
            {/* Starter */}
            <div
              className="pricing-card rounded-xl p-8"
              style={{ border: '1.5px solid #e0ecf9', background: 'white' }}
            >
              <div className="mb-6">
                <p className="text-sm font-600 uppercase tracking-widest mb-2" style={{ color: '#4a82cc', letterSpacing: '0.1em' }}>Starter</p>
                <div className="flex items-end gap-1">
                  <span className="font-semibold font-bold" style={{ fontSize: '2.8rem', color: '#0a1628', lineHeight: 1 }}>£150</span>
                  <span className="text-sm pb-1" style={{ color: '#7aaada' }}>setup</span>
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-semibold text-xl" style={{ color: '#0a1628' }}>£29</span>
                  <span className="text-sm" style={{ color: '#7aaada' }}>/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '3-page website',
                  'Mobile responsive',
                  'Contact form',
                  'SSL certificate',
                  'Basic SEO setup',
                  'Monthly backups',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#163468' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#e0ecf9"/>
                      <path d="M5 8l2 2 4-4" stroke="#1e4a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center py-3 rounded font-semibold text-sm transition-colors"
                style={{ border: '1.5px solid #1e4a8a', color: '#1e4a8a', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#e0ecf9' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                Get Started
              </a>
            </div>

            {/* Professional — featured */}
            <div
              className="pricing-card rounded-xl p-8 relative"
              style={{ background: 'linear-gradient(160deg, #0f2347, #163468)', border: '1.5px solid #2563b0' }}
            >
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: '#e8b84b', color: '#0a1628', letterSpacing: '0.08em' }}
              >
                Most Popular
              </div>
              <div className="mb-6">
                <p className="text-sm font-600 uppercase tracking-widest mb-2" style={{ color: '#7aaada', letterSpacing: '0.1em' }}>Professional</p>
                <div className="flex items-end gap-1">
                  <span className="font-semibold font-bold" style={{ fontSize: '2.8rem', color: 'white', lineHeight: 1 }}>£250</span>
                  <span className="text-sm pb-1" style={{ color: '#7aaada' }}>setup</span>
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-semibold text-xl" style={{ color: 'white' }}>£49</span>
                  <span className="text-sm" style={{ color: '#7aaada' }}>/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Up to 8 pages',
                  'Mobile responsive',
                  'Blog / news section',
                  'Google Business integration',
                  'Advanced SEO',
                  'Monthly performance report',
                  'Content updates included',
                  'Priority support',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.1)"/>
                      <path d="M5 8l2 2 4-4" stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary block text-center py-3 rounded text-sm"
                style={{ textDecoration: 'none', fontFamily: 'var(--font-body)' }}
              >
                Get Started
              </a>
            </div>

            {/* Premium */}
            <div
              className="pricing-card rounded-xl p-8"
              style={{ border: '1.5px solid #e0ecf9', background: 'white' }}
            >
              <div className="mb-6">
                <p className="text-sm font-600 uppercase tracking-widest mb-2" style={{ color: '#4a82cc', letterSpacing: '0.1em' }}>Premium</p>
                <div className="flex items-end gap-1">
                  <span className="font-semibold font-bold" style={{ fontSize: '2.8rem', color: '#0a1628', lineHeight: 1 }}>£350</span>
                  <span className="text-sm pb-1" style={{ color: '#7aaada' }}>setup</span>
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-semibold text-xl" style={{ color: '#0a1628' }}>£79</span>
                  <span className="text-sm" style={{ color: '#7aaada' }}>/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited pages',
                  'E-commerce ready',
                  'Booking / appointment system',
                  'Full SEO campaign',
                  'Weekly content updates',
                  'Monthly strategy call',
                  'Social media integration',
                  'Dedicated account manager',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#163468' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="#e0ecf9"/>
                      <path d="M5 8l2 2 4-4" stroke="#1e4a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center py-3 rounded font-semibold text-sm transition-colors"
                style={{ border: '1.5px solid #1e4a8a', color: '#1e4a8a', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#e0ecf9' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: '#7aaada' }}>
            All prices include hosting setup. VAT may apply. Custom quotes available for larger projects.
          </p>
        </div>
      </section>

      {/* ── WHY DD ── */}
      <section id="about" className="py-24" style={{ background: '#0a1628' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label" style={{ color: '#7aaada' }}>
                <span style={{ background: '#e8b84b', width: 24, height: 2, display: 'inline-block' }} />
                Why DD
              </span>
              <h2
                className="font-display mt-4 text-white"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2 }}
              >
                A web partner who
                <br />
                actually picks up the phone.
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
                We started DD Web Solutions because we saw too many local business owners get burned by agencies that
                overpromised and underdelivered — or charged a fortune for something simple.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
                We keep our client list intentionally small so we can give each business the attention they deserve. You'll
                always deal with the same person, and you'll always get a straight answer.
              </p>
              <a href="#contact" className="btn-primary inline-block mt-8 text-sm">
                Start the Conversation
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {WHY_ITEMS.map(item => (
                <div
                  key={item.label}
                  className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="font-display font-bold mb-1"
                    style={{ fontSize: '1.6rem', color: '#e8b84b', lineHeight: 1 }}
                  >
                    {item.stat}
                  </div>
                  <div className="font-semibold text-white text-sm mb-2">{item.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Client stories</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0a1628', fontWeight: 700 }}
            >
              What local business owners say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div
                key={t.author}
                className="testimonial-card rounded-xl p-7"
                style={{ border: '1.5px solid #e0ecf9', background: '#f8fbff' }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#e8b84b">
                      <path d="M8 1l1.9 3.8 4.2.6-3 3 .7 4.2L8 10.5l-3.8 2.1.7-4.2-3-3 4.2-.6z"/>
                    </svg>
                  ))}
                </div>

                <blockquote
                  className="leading-relaxed mb-6 text-sm"
                  style={{ color: '#163468', fontStyle: 'italic' }}
                >
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1e4a8a, #2563b0)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0a1628' }}>{t.author}</div>
                    <div className="text-xs" style={{ color: '#7aaada' }}>{t.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24" style={{ background: '#f0f7ff' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Copy */}
            <div className="lg:sticky lg:top-24">
              <span className="section-label">Get in touch</span>
              <h2
                className="font-display mt-4"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0a1628', fontWeight: 700, lineHeight: 1.2 }}
              >
                Ready for a website
                <br />
                that brings in customers?
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: '#4a82cc', fontSize: '1rem' }}>
                Book your free 30-minute discovery call. No pushy sales pitch — just an honest conversation about your business
                and whether we're the right fit.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: '✉', label: 'Email us', value: 'ddwebsolutions@hotmail.com' },
                  { icon: '☎', label: 'Call us', value: '07923034016' },
                  { icon: '⏱', label: 'Response time', value: 'Within 48 hours' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ background: '#e0ecf9', color: '#1e4a8a' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#7aaada' }}>
                        {item.label}
                      </div>
                      <div className="font-medium text-sm mt-0.5" style={{ color: '#0a1628' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: '1.5px solid #e0ecf9' }}>
              <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#0a1628' }}>
                Book your free discovery call
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#060f20', color: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #2563b0, #1e4a8a)', fontFamily: 'var(--font-display)' }}
                >
                  DD
                </div>
                <span className="font-semibold text-white text-sm">DD Web Solutions</span>
              </div>
              <p className="text-xs leading-relaxed max-w-xs">
                Professional websites for local small businesses. Simple pricing, real support.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t mt-10 pt-8 flex flex-col sm:flex-row justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} DD Web Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
