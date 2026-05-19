import { useState } from 'react'
import Reveal from './Reveal'

const APP_URL = 'https://app.woveleap.com/'

const PLANS = [
  {
    name: 'Starter',
    monthly: '4,999',
    annual: '3,999',
    desc: 'Perfect for small teams getting started with commission automation.',
    features: [
      { text: 'Up to 25 partners' },
      { text: 'Basic commission rules' },
      { text: 'Payout workflows' },
      { text: 'CSV & Excel exports' },
      { text: 'Email support' },
      { text: 'Multi-currency', dim: true },
      { text: 'CRM integrations', dim: true },
      { text: 'Custom API', dim: true },
    ],
    cta: 'Get started',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Growth',
    monthly: '12,999',
    annual: '10,399',
    desc: 'For growing companies with complex structures and partner networks.',
    popular: true,
    features: [
      { text: 'Up to 200 partners' },
      { text: 'Tiered & milestone rules' },
      { text: 'Partner self-service portal' },
      { text: 'Multi-currency + live FX' },
      { text: 'CRM webhook integrations' },
      { text: 'Dispute resolution module' },
      { text: 'Accounting exports' },
      { text: 'Priority support' },
    ],
    cta: 'Start free trial',
    ctaClass: 'btn-primary',
  },
  {
    name: 'Enterprise',
    monthly: null,
    annual: null,
    desc: 'For large organisations with advanced compliance and customisation needs.',
    features: [
      { text: 'Unlimited partners' },
      { text: 'Custom commission logic' },
      { text: 'White-label partner portal' },
      { text: 'SSO (Auth0 / SAML)' },
      { text: 'GDPR & audit compliance' },
      { text: 'Dedicated account manager' },
      { text: 'SLA guarantees' },
      { text: 'Custom API integrations' },
    ],
    cta: 'Contact sales',
    ctaClass: 'btn-secondary',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-label">Transparent pricing</span>
          <Reveal tag="h2" className="section-heading">
            Simple plans,<br />no surprises
          </Reveal>
          <Reveal delay={1} className="section-sub" style={{ margin: '16px auto 0' }}>
            Start free. Scale as you grow. Cancel anytime.
          </Reveal>

          <div className="pricing-toggle" style={{ display: 'flex' }}>
            <button
              className={`toggle-opt ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-opt ${billing === 'annual' ? 'active' : ''}`}
              onClick={() => setBilling('annual')}
            >
              Annual <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {PLANS.map(({ name, monthly, annual, desc, popular, features, cta, ctaClass }, i) => (
            <Reveal key={name} delay={i} className={`price-card ${popular ? 'popular' : ''}`}>
              {popular && <div className="popular-tag">Most Popular</div>}

              <div className="plan-name">{name}</div>

              <div className="plan-price">
                {monthly ? (
                  <>
                    <span className="currency">₹</span>
                    <span className="amount">{billing === 'monthly' ? monthly : annual}</span>
                    <span className="period">/mo</span>
                  </>
                ) : (
                  <span className="amount" style={{ fontSize: 36, letterSpacing: -1 }}>Custom</span>
                )}
              </div>

              <div className="plan-desc">{desc}</div>
              <div className="plan-divider" />

              <ul className="plan-features">
                {features.map(({ text, dim }) => (
                  <li key={text} className={dim ? 'dimmed' : ''}>{text}</li>
                ))}
              </ul>

              <a href={APP_URL} className={`btn ${ctaClass} btn-full`}>{cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
