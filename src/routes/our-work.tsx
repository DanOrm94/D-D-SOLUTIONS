import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-work')({
  component: OurWorkPage,
  head: () => ({
    meta: [
      {
        title: 'Our Work | DD Web Solutions',
      },
      {
        name: 'description',
        content:
          'Recent websites designed and built by DD Web Solutions for local UK businesses.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: 'Our Work | DD Web Solutions',
      },
      {
        property: 'og:description',
        content:
          'Recent websites designed and built by DD Web Solutions for local UK businesses.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://ddwebsolution.com/our-work',
      },
    ],
  }),
})

const PROJECTS = [
  {
    name: 'Soot Destroyer',
    category: 'Chimney & Soot Removal Services',
    description:
      'A professional website designed to give the business a stronger online presence, clearly present its services, and make it easier for potential customers to get in touch.',
    url: 'https://www.sootdestroyer.co.uk/',
    tags: ['Website Design', 'Mobile Responsive', 'SEO Ready', 'Enquiry Focused'],
  },
]

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M5 13L13 5M7 5h6v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function OurWorkPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0a1628' }}>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(10,22,40,0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center no-underline" aria-label="DD Web Solutions home">
              <img
                src="/logo.png"
                alt="DD Web Solutions"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="nav-link">Home</a>
              <a href="/our-work" className="nav-link">Our Work</a>
              <a href="/#services" className="nav-link">Services</a>
              <a href="/#pricing" className="nav-link">Pricing</a>
              <a href="/#contact" className="nav-link">Contact</a>
            </nav>

            <a
              href="/#contact"
              className="btn-primary hidden sm:inline-flex items-center text-sm px-5 py-2.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          className="pt-36 pb-20"
          style={{
            background:
              'linear-gradient(180deg, #f0f7ff 0%, #f8fbff 55%, #ffffff 100%)',
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <span className="section-label">
                <span
                  style={{
                    background: '#e8b84b',
                    width: 24,
                    height: 2,
                    display: 'inline-block',
                  }}
                />
                Recent work
              </span>

              <h1
                className="font-display mt-5"
                style={{
                  fontSize: 'clamp(2.3rem, 5vw, 4rem)',
                  color: '#0a1628',
                  fontWeight: 700,
                  lineHeight: 1.08,
                }}
              >
                Websites built for
                <br />
                <span style={{ color: '#4a82cc' }}>real businesses.</span>
              </h1>

              <p
                className="mt-6 leading-relaxed"
                style={{
                  color: '#4a82cc',
                  fontSize: '1.08rem',
                  maxWidth: '680px',
                }}
              >
                Take a look at a recent project built by DD Web Solutions. Every
                site is designed around the business, its customers, and the
                actions that matter most.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-8">
              {PROJECTS.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: '1.5px solid #e0ecf9',
                    background: '#f8fbff',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className="min-h-[320px] lg:min-h-[440px] p-10 sm:p-14 flex items-end"
                      style={{
                        background: 'linear-gradient(160deg, #0f2347, #1e4a8a)',
                      }}
                    >
                      <div className="w-full">
                        <div
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                          style={{
                            background: 'rgba(255,255,255,0.1)',
                            color: '#e8b84b',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        >
                          Featured project
                        </div>
                        <h2
                          className="font-display mt-4 text-white"
                          style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                          }}
                        >
                          {project.name}
                        </h2>
                        <p
                          className="mt-3"
                          style={{ color: 'rgba(255,255,255,0.72)' }}
                        >
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="p-8 sm:p-12 flex flex-col justify-center">
                      <span className="section-label">The project</span>
                      <h3
                        className="font-display mt-4"
                        style={{
                          fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                          color: '#0a1628',
                          fontWeight: 700,
                          lineHeight: 1.15,
                        }}
                      >
                        Professional, clear and built to generate enquiries.
                      </h3>

                      <p
                        className="mt-5 leading-relaxed"
                        style={{ color: '#4a82cc', fontSize: '1rem' }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2.5 mt-7">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1.5 text-xs font-semibold"
                            style={{
                              background: '#e0ecf9',
                              color: '#1e4a8a',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-9 flex flex-wrap gap-4 items-center">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary inline-flex items-center gap-2"
                          style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                        >
                          View Live Website
                          <ArrowUpRight />
                        </a>
                        <a
                          href="/#contact"
                          className="font-semibold text-sm"
                          style={{ color: '#1e4a8a', textDecoration: 'none' }}
                        >
                          Start your project →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: '#0a1628' }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <span className="section-label" style={{ color: '#7aaada' }}>
              Your next project
            </span>
            <h2
              className="font-display mt-4 text-white"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Ready to put your business online properly?
            </h2>
            <p
              className="mt-5 mx-auto"
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '650px', lineHeight: 1.7 }}
            >
              Tell us what your business does, what is not working with your
              current website, and what you want it to achieve.
            </p>
            <a
              href="/#contact"
              className="btn-primary inline-block mt-8 text-sm"
              style={{ textDecoration: 'none' }}
            >
              Book a Free Call
            </a>
          </div>
        </section>
      </main>

      <footer style={{ background: '#060f20', color: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-white text-sm">DD Web Solutions</div>
              <p className="text-xs mt-2">Professional web design for UK small businesses.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a>
              <a href="/our-work" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Our Work</a>
              <a href="/#pricing" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Pricing</a>
              <a href="/#contact" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div
            className="border-t mt-8 pt-6 text-xs"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            &copy; {new Date().getFullYear()} DD Web Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
