import { createFileRoute } from '@tanstack/react-router'
import LegalPage, { LegalHeading } from '../components/LegalPage'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: 'Terms of Use | DD Web Solutions' },
      { name: 'description', content: 'Terms of use for the DD Web Solutions website.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Terms of Use | DD Web Solutions' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ddwebsolution.com/terms' },
    ],
    links: [{ rel: 'canonical', href: 'https://ddwebsolution.com/terms' }],
  }),
})

// DRAFT: have this reviewed before relying on it as legal advice.
function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="June 2026">
      <p>
        These terms cover your use of the DD Web Solutions website. Work we carry out for clients is covered by a separate written
        agreement agreed before a project starts.
      </p>

      <LegalHeading>Information on this site</LegalHeading>
      <p>
        We aim to keep the content, prices and descriptions on this website accurate, but they are for general information and may
        change. Prices exclude VAT where it applies. A quote or written agreement from us sets the final scope and price of any project.
      </p>

      <LegalHeading>Intellectual property</LegalHeading>
      <p>
        The content of this website, including text, design and logos, belongs to DD Web Solutions unless stated otherwise. Names and
        logos of client businesses belong to those businesses and are shown with their permission. You may not copy or reuse our content
        without written permission.
      </p>

      <LegalHeading>Links to other sites</LegalHeading>
      <p>
        This site links to websites we have built for clients. We are not responsible for the content of those sites or any other
        third-party site.
      </p>

      <LegalHeading>Liability</LegalHeading>
      <p>
        We are not liable for loss arising from your use of this website, except where the law does not allow us to exclude liability.
        Nothing in these terms limits your statutory rights.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        Questions about these terms:{' '}
        <a href="mailto:ddwebsolutions@hotmail.com" style={{ color: '#1e4a8a', textDecoration: 'underline' }}>ddwebsolutions@hotmail.com</a>.
        These terms are governed by the laws of England and Wales.
      </p>
    </LegalPage>
  )
}
