import Reveal from './Reveal'

const FEATURES = [
  {
    icon: '🧮', bg: 'rgba(99,102,241,.15)', featured: true,
    title: 'Powerful Commission Engine',
    desc: 'Define flat, tiered, milestone-based, or custom formula-driven commission rules. Handle GST, TDS, clawbacks, and FX adjustments automatically — no spreadsheets required.',
  },
  {
    icon: '🤝', bg: 'rgba(6,182,212,.12)',
    title: 'Partner Portal',
    desc: 'Give every partner a self-service portal to track earnings, download invoices, raise disputes, and view performance in real time.',
  },
  {
    icon: '📊', bg: 'rgba(16,185,129,.12)',
    title: 'Analytics & Reporting',
    desc: 'Visualize commission trends, top performers, and payout forecasts with interactive dashboards and one-click exports.',
  },
  {
    icon: '🔄', bg: 'rgba(245,158,11,.12)',
    title: 'Automated Payouts',
    desc: 'Schedule and automate payout runs with full audit trails, approval workflows, and multi-currency support via live FX rates.',
  },
  {
    icon: '⚖️', bg: 'rgba(244,63,94,.12)',
    title: 'Dispute Resolution',
    desc: 'Built-in ticketing system lets partners raise and track commission disputes — with transparent resolution history for compliance.',
  },
  {
    icon: '🔗', bg: 'rgba(139,92,246,.12)',
    title: 'CRM Integrations',
    desc: 'Connect your CRM via webhooks. Commission calculations trigger automatically when deals close — zero manual data entry.',
  },
  {
    icon: '🧾', bg: 'rgba(6,182,212,.12)',
    title: 'Accounting Export',
    desc: 'Export to Tally XML, QuickBooks IIF, or Zoho Books CSV with one click. Tax reports with GST & TDS included out of the box.',
  },
  {
    icon: '🔒', bg: 'rgba(99,102,241,.12)',
    title: 'GDPR & Audit Logs',
    desc: 'Every action is logged with full attribution. Role-based access control, API keys, SSO via Auth0, and GDPR data requests supported.',
  },
]

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Everything you need</span>
          <Reveal tag="h2" className="section-heading">
            The complete commission<br />operations platform
          </Reveal>
          <Reveal delay={1} className="section-sub">
            From complex tiered structures to real-time partner portals — WoveLeap handles
            every layer of your commission program.
          </Reveal>
        </div>

        <div className="features-grid">
          {FEATURES.map(({ icon, bg, featured, title, desc }, i) => (
            <Reveal key={title} delay={i % 3} className={`feature-card ${featured ? 'featured' : ''}`}>
              <div className="feature-icon" style={{ background: bg }}>{icon}</div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
