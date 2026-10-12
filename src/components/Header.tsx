import { useState } from 'react'

export interface NavLink {
  label: string
  href: string
}

/**
 * Shared site header with desktop nav, a "Get Started" CTA, and a working
 * mobile menu. Used across every route so navigation stays consistent and the
 * mobile menu is available on all pages (not just the home page).
 *
 * Links use absolute paths with hash anchors (e.g. `/#services`) so they work
 * from any route, not only from `/`.
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Meet the Team', href: '/meet-the-team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header({ links = NAV_LINKS }: { links?: NavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(10,22,40,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center no-underline" aria-label="DD Web Solutions home">
            <img src="/logo.png" alt="DD Web Solutions" className="h-10 sm:h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link premium-nav-link">
                <span className="premium-nav-link__label">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="btn-primary hidden sm:inline-flex items-center text-sm px-5 py-2.5"
              style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
            >
              Get Started
            </a>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <>
            <button
              aria-label="Close mobile menu"
              className="mobile-nav-backdrop md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="mobile-nav-panel md:hidden"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                width: '100%',
                background: '#060f20',
                color: '#ffffff',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
                zIndex: 9999,
              }}
            >
              <nav aria-label="Mobile navigation" className="mobile-nav-links">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link premium-nav-link text-base"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="premium-nav-link__label">{link.label}</span>
                  </a>
                ))}
              </nav>
              <a
                href="/#contact"
                className="btn-primary block text-center mt-4 text-sm"
                style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
