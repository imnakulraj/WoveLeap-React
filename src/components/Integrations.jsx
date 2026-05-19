import Reveal from './Reveal'

const CHIPS = [
  { icon: '📊', label: 'Zoho CRM' },
  { icon: '☁️', label: 'Salesforce' },
  { icon: '🔗', label: 'HubSpot' },
  { icon: '📒', label: 'Tally' },
  { icon: '📘', label: 'QuickBooks' },
  { icon: '📗', label: 'Zoho Books' },
  { icon: '💳', label: 'Razorpay' },
  { icon: '🔐', label: 'Auth0' },
  { icon: '🪝', label: 'Webhooks' },
]

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <div className="container">
        <div className="integrations-layout">

          <Reveal>
            <span className="section-label">Integrations</span>
            <h2 className="section-heading" style={{ marginBottom: 20 }}>
              Works with your<br />existing stack
            </h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              WoveLeap plugs into your CRM, accounting software, and payment tools via secure
              webhooks and APIs — no rip-and-replace required.
            </p>
            <a href="#cta" className="btn btn-primary">Explore all integrations</a>
          </Reveal>

          <Reveal delay={1} className="int-grid">
            {CHIPS.map(({ icon, label }) => (
              <div className="int-chip" key={label}>
                <span className="int-icon">{icon}</span>
                {label}
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  )
}
