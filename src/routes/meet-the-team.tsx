import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meet-the-team')({
  component: MeetTheTeamPage,
  head: () => ({
    meta: [
      { title: 'Meet the Team | DD Web Solutions' },
      {
        name: 'description',
        content:
          'Meet Dan and Danny, the team behind DD Web Solutions. Combining software engineering, customer engagement and business experience to help UK businesses stand out.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Meet the Team | DD Web Solutions' },
      { property: 'og:description', content: 'Two people. Two skill sets. One goal — helping your business stand out.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://ddwebsolution.com/meet-the-team' }],
  }),
})

const SERVICES = [
  ['01', 'Website Design', 'Professional, modern websites designed to showcase your business and turn visitors into customers.'],
  ['02', 'Business Cards', 'Eye-catching, professional designs that make a great first impression wherever you meet a potential customer.'],
  ['03', 'Leaflets & Flyers', 'Designed to help you promote your services, reach local customers and get your business noticed.'],
]

export default function MeetTheTeamPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0a1628' }}>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(6,15,32,0.9)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[74px] md:h-[86px]">
            <a href="/" className="flex items-center no-underline" aria-label="DD Web Solutions home">
              <img src="/logo.png" alt="DD Web Solutions" className="h-10 sm:h-12 w-auto object-contain" />
            </a>
            <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
              {[
                ['Home', '/'],
                ['Services', '/#services'],
                ['Our Work', '/our-work'],
                ['Pricing', '/#pricing'],
                ['Meet the Team', '/meet-the-team'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <a key={label} href={href} className="nav-link premium-nav-link">
                  <span className="premium-nav-link__label">{label}</span>
                </a>
              ))}
            </nav>
            <a href="/#contact" className="btn-primary hidden sm:inline-flex items-center text-sm px-5 py-2.5" style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-36 md:pt-44 pb-20 md:pb-28" style={{ background: 'radial-gradient(circle at 82% 20%, rgba(37,99,176,0.13), transparent 32%), linear-gradient(180deg, #f0f7ff 0%, #f8fbff 58%, #ffffff 100%)' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
              <div>
                <span className="section-label">Meet the team</span>
                <h1 className="font-display mt-5" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: '#0a1628', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.035em' }}>
                  Two people.<br /><span style={{ color: '#4a82cc' }}>Two skill sets.</span><br />One goal.
                </h1>
                <p className="mt-7 text-lg leading-relaxed" style={{ color: '#365b82', maxWidth: '590px' }}>
                  Helping your business stand out — online and offline. We combine technical expertise, creativity and real customer experience to help businesses look professional, get noticed and grow.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Work With Us</a>
                  <a href="/our-work" className="btn-outline" style={{ background: '#0f2347', textDecoration: 'none' }}>See Our Work</a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[24px]" style={{ border: '1px solid #d8e4f2', background: '#fff', boxShadow: '0 30px 70px rgba(10,22,40,0.14)' }}>
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: 'linear-gradient(90deg, #e8b84b, #2563b0)' }} />
                <img src="/ddpic.jpg" alt="Dan and Danny, founders of DD Web Solutions" className="block w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-14">
              <span className="section-label">Behind DD Web Solutions</span>
              <h2 className="font-display section-title mt-4">Different strengths. <span style={{ color: '#4a82cc' }}>One team.</span></h2>
              <p className="section-copy mt-5" style={{ maxWidth: '650px' }}>
                We’re excited to officially launch DD Web Solutions, providing affordable and professional solutions to help businesses build their presence both online and offline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(145deg, #0f2347, #163468)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 16px 38px rgba(10,22,40,0.08)', color: 'white' }}>
                <p className="text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: '#e8b84b' }}>Technical & Digital</p>
                <h3 className="font-display mt-3" style={{ fontSize: '2.25rem', fontWeight: 700 }}>Dan</h3>
                <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>12 years of experience</p>
                <p className="mt-7 leading-relaxed" style={{ color: 'rgba(255,255,255,0.76)' }}>
                  Dan brings 12 years of experience in software engineering, coding and programming. Bringing the technical knowledge needed to build effective websites and digital solutions.
                </p>
              </article>

              <article className="rounded-2xl p-8 md:p-10" style={{ background: '#f8fbff', border: '1px solid #e0ecf9', boxShadow: '0 16px 38px rgba(10,22,40,0.08)' }}>
                <p className="text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: '#2563b0' }}>Customer & Business</p>
                <h3 className="font-display mt-3" style={{ fontSize: '2.25rem', fontWeight: 700 }}>Danny</h3>
                <p className="mt-1 text-sm" style={{ color: '#7aaada' }}>10+ years of experience</p>
                <p className="mt-7 leading-relaxed" style={{ color: '#4a82cc' }}>
                  Danny brings over 10 years of experience in customer engagement, sales and account management. Bringing the people skills, business understanding and focus on building strong customer relationships.
                </p>
              </article>
            </div>

            <div className="mt-10 rounded-2xl p-8 md:p-10" style={{ background: '#f0f7ff', border: '1px solid #d8e4f2' }}>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#1e4a8a' }}>
                Together, we combine technical expertise, creativity and real customer experience to help businesses look professional, get noticed and grow.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: '#f0f7ff' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label">What we do</span>
              <h2 className="font-display section-title mt-4">More than just <span style={{ color: '#4a82cc' }}>websites.</span></h2>
              <p className="section-copy mt-5">
                Professional digital and printed solutions designed to help your business get noticed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map(([number, title, description]) => (
                <article key={title} className="rounded-2xl p-7 md:p-8" style={{ background: '#fff', border: '1px solid #d8e4f2', boxShadow: '0 12px 30px rgba(10,22,40,0.06)' }}>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xs font-bold" style={{ background: '#0f2347', color: '#e8b84b' }}>{number}</span>
                  <h3 className="font-display mt-6 text-xl font-bold" style={{ color: '#0a1628' }}>{title}</h3>
                  <p className="mt-3 leading-relaxed text-sm" style={{ color: '#4a82cc' }}>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28" style={{ background: '#0a1628', color: 'white' }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <span className="section-label" style={{ color: '#e8b84b' }}>Let’s work together</span>
            <h2 className="font-display mt-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, lineHeight: 1.12, color: 'white' }}>Ready to make your business stand out?</h2>
            <p className="mt-5 mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)', maxWidth: '650px' }}>
              Whether you’re a new business looking to get started or an established business ready for a refresh, we’d love to work with you.
            </p>
            <div className="mt-8 flex justify-center"><a href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Start a Conversation</a></div>
            <p className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>This is just the beginning. Welcome to DD Web Solutions.</p>
          </div>
        </section>
      </main>

      <footer style={{ background: '#060f20', color: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="font-semibold text-white text-sm">DD Web Solutions</span>
              <p className="text-xs leading-relaxed max-w-xs mt-3">Professional web design, local SEO and ongoing website support for UK small businesses.</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/" className="text-xs hover:text-white" style={{ color: 'rgba(255,255,255,0.45)' }}>Home</a>
              <a href="/our-work" className="text-xs hover:text-white" style={{ color: 'rgba(255,255,255,0.45)' }}>Our Work</a>
              <a href="/meet-the-team" className="text-xs hover:text-white" style={{ color: 'rgba(255,255,255,0.45)' }}>Meet the Team</a>
              <a href="/#contact" className="text-xs hover:text-white" style={{ color: 'rgba(255,255,255,0.45)' }}>Contact</a>
            </nav>
          </div>
          <div className="border-t mt-10 pt-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="text-xs">&copy; {new Date().getFullYear()} DD Web Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
