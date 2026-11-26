import { createFileRoute } from '@tanstack/react-router'
import LegalPage, { LegalHeading } from '../components/LegalPage'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | DD Web Solutions' },
      { name: 'description', content: 'How DD Web Solutions collects, uses and protects the personal information you send us.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Privacy Policy | DD Web Solutions' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ddwebsolution.com/privacy-policy' },
    ],
    links: [{ rel: 'canonical', href: 'https://ddwebsolution.com/privacy-policy' }],
  }),
})

// DRAFT: have this reviewed before relying on it as legal advice.
function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        DD Web Solutions ("we", "us") is the controller of the personal information collected through this website. This policy
        explains what we collect, why, and your rights under UK data protection law (UK GDPR and the Data Protection Act 2018).
      </p>

      <LegalHeading>What we collect</LegalHeading>
      <p>
        When you use the contact form we collect your name, business name, email address, phone number (optional) and the message you
        write. If you email or phone us, we hold the details you give us in that conversation.
      </p>

      <LegalHeading>How we use it</LegalHeading>
      <p>
        We use this information only to reply to your enquiry, arrange a discovery call and, if you go ahead, provide our services. Our
        lawful basis is taking steps at your request before entering a contract, and our legitimate interest in running our business. We
        do not sell your information or use it for unsolicited marketing.
      </p>

      <LegalHeading>Who we share it with</LegalHeading>
      <p>
        Contact form submissions are processed by Web3Forms (web3forms.com), which delivers them to us by email. Our email is provided
        by Microsoft (Hotmail/Outlook). This website is hosted on Netlify. Fonts are loaded from Google Fonts, which means your browser
        sends your IP address to Google when a page loads.
      </p>

      <LegalHeading>How long we keep it</LegalHeading>
      <p>
        Enquiries that do not lead to work are deleted within 12 months. Information about clients is kept for as long as we provide
        services and for up to six years afterwards for accounting and legal purposes.
      </p>

      <LegalHeading>Your rights</LegalHeading>
      <p>
        You can ask us to access, correct or delete your personal information, to restrict or object to how we use it, or to move it to
        another provider. Email{' '}
        <a href="mailto:ddwebsolutions@hotmail.com" style={{ color: '#1e4a8a', textDecoration: 'underline' }}>ddwebsolutions@hotmail.com</a>{' '}
        and we will respond within one month. If you are unhappy with how we handle your data, you can complain to the Information
        Commissioner's Office at ico.org.uk.
      </p>
    </LegalPage>
  )
}
