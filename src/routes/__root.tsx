import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import BounceCards from '../components/BounceCards'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'DD Web Solutions — Websites for Local Small Businesses' },
      {
        name: 'description',
        content:
          'Professional websites for local small businesses. One-time setup fee, low monthly maintenance. DD Web Solutions.',
      },
      // Site-wide Open Graph / Twitter defaults. Individual routes override
      // og:title / og:description / og:url where appropriate.
      { property: 'og:site_name', content: 'DD Web Solutions' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:image', content: 'https://ddwebsolution.com/logo.png' },
      { property: 'og:image:alt', content: 'DD Web Solutions' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://ddwebsolution.com/logo.png' },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://news.google.com/swg/js/v1/publisher.js"></script>
      </head>
      <body>
        <div className="site-shell">
          <div className="site-content">{children}</div>
          <BounceCards
            selector=".service-card"
            animationDelay={0.2}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.6)"
            enableHover
          />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
