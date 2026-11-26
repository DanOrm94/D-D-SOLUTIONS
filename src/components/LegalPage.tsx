import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

/** Shared layout for plain-text legal pages (privacy policy, terms). */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0a1628' }}>
      <Header />
      <main className="pt-36 pb-24" style={{ background: '#f8fbff' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 legal-content">
          <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </h1>
          <p className="mt-3 text-sm" style={{ color: '#4f6f95' }}>Last updated: {updated}</p>
          <div className="mt-10 space-y-5 leading-relaxed" style={{ color: '#163468' }}>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display pt-4" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0a1628' }}>
      {children}
    </h2>
  )
}
