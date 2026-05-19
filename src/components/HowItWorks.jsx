import Reveal from './Reveal'

const STEPS = [
  {
    icon: '🏢', n: 1,
    title: 'Set up your org',
    desc: 'Create your organization, configure plans, add GST/PAN details, and invite your team with role-based permissions.',
  },
  {
    icon: '📋', n: 2,
    title: 'Define commission rules',
    desc: 'Build tiered structures, milestone bonuses, promotions, and clawback policies using our no-code rule builder.',
  },
  {
    icon: '🔌', n: 3,
    title: 'Connect your CRM',
    desc: 'Wire up your CRM or sales tool via webhook. Deals sync automatically — commissions calculate in real time.',
  },
  {
    icon: '💸', n: 4,
    title: 'Pay & reconcile',
    desc: 'Approve payouts, export to your accounting tool, and close the month in hours — not days. All with a full audit trail.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="how-header text-center">
          <span className="section-label">Simple setup, powerful results</span>
          <Reveal tag="h2" className="section-heading">Up and running in minutes</Reveal>
        </div>

        <div className="how-steps">
          {STEPS.map(({ icon, n, title, desc }, i) => (
            <Reveal key={n} delay={i} className="how-step">
              <div className="step-num">
                {icon}
                <div className="num">{n}</div>
              </div>
              <div className="step-title">{title}</div>
              <div className="step-desc">{desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
