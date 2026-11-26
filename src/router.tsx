import { createRouter } from '@tanstack/react-router'
import Header from './components/Header'
import Footer from './components/Footer'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

function NotFound() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0a1628' }}>
      <meta name="robots" content="noindex" />
      <Header />
      <main className="pt-40 pb-32 text-center" style={{ background: '#f8fbff' }}>
        <div className="max-w-2xl mx-auto px-5">
          <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Page not found
          </h1>
          <p className="mt-5" style={{ color: '#35659f' }}>
            The page you are looking for does not exist or has moved.
          </p>
          <a href="/" className="btn-primary inline-block mt-8" style={{ textDecoration: 'none' }}>
            Back to the homepage
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFound,
  })

  return router
}
