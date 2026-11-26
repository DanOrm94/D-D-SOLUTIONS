import type { ReactNode } from 'react'
import { NAV_LINKS } from './Header'

/**
 * Shared site footer. Used on every route so links and legal pages stay in
 * sync. Pass `children` to render extra content under the navigation links.
 */
export default function Footer({ children }: { children?: ReactNode }) {
  return (
    <footer style={{ background: '#060f20', color: 'rgba(255,255,255,0.5)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #2563b0, #1e4a8a)', fontFamily: 'var(--font-display)' }}
                aria-hidden="true"
              >
                DD
              </div>
              <span className="font-semibold text-white text-sm">DD Web Solutions</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Professional web design, local SEO and ongoing website support for UK small businesses.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {children}
          </div>
        </div>

        <div
          className="border-t mt-10 pt-8 flex flex-col sm:flex-row justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs">&copy; {new Date().getFullYear()} DD Web Solutions. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <a href="/privacy-policy" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
