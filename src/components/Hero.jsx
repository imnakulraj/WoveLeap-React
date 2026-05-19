import { useEffect, useRef } from 'react'

const BARS = [35, 55, 42, 70, 60, 88, 75, 95, 80, 90]
const ACTIVE = [5, 7]

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="container">
        <div className="hero-inner" ref={contentRef}>

          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge reveal">
              <span className="badge badge-brand">🚀 Now with AI-powered commission insights</span>
            </div>

            <h1 className="hero-heading reveal" style={{ transitionDelay: '.1s' }}>
              Commission<br />
              Management<br />
              <span className="gradient-text">Done Right.</span>
            </h1>

            <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
              Automate complex commission structures, empower your channel partners, and close
              your books in minutes — not days. Built for fast-growing B2B SaaS and enterprise
              sales teams.
            </p>

            <div className="hero-actions reveal" style={{ transitionDelay: '.3s' }}>
              <a href="#cta" className="btn btn-primary btn-xl">
                Start for Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-secondary btn-xl">See how it works</a>
            </div>

            <div className="hero-social-proof reveal" style={{ transitionDelay: '.4s' }}>
              <div className="hero-avatars">
                <div className="hero-avatar-placeholder av1">AK</div>
                <div className="hero-avatar-placeholder av2">SR</div>
                <div className="hero-avatar-placeholder av3">MJ</div>
                <div className="hero-avatar-placeholder av4">LP</div>
              </div>
              <div className="hero-social-text">
                Trusted by <strong>500+ teams</strong> worldwide
              </div>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="hero-visual reveal" style={{ transitionDelay: '.2s' }}>
            <div className="hero-visual-inner">
              <div className="float-card float-card-1">
                <div className="float-icon">💰</div>
                <div className="float-label">Paid Out This Month</div>
                <div className="float-value gradient-text">₹14.2L</div>
              </div>
              <div className="float-card float-card-2">
                <div className="float-label">Commission Accuracy</div>
                <div className="float-value" style={{ color: 'var(--emerald)' }}>99.98%</div>
              </div>

              <div className="dashboard-card">
                <div className="dash-header">
                  <span className="dash-title">Commission Overview</span>
                  <span className="dash-period">Last 30 days</span>
                </div>

                <div className="dash-kpis">
                  <div className="kpi-card">
                    <div className="kpi-label">Total Earned</div>
                    <div className="kpi-value gradient-text">₹42.8L</div>
                    <div className="kpi-change up">↑ 18.4%</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Partners</div>
                    <div className="kpi-value">124</div>
                    <div className="kpi-change up">↑ 9</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Pending</div>
                    <div className="kpi-value" style={{ color: 'var(--amber)' }}>₹3.1L</div>
                    <div className="kpi-change down">Due 5d</div>
                  </div>
                </div>

                <div className="mini-chart">
                  {BARS.map((h, i) => (
                    <div
                      key={i}
                      className={`bar ${ACTIVE.includes(i) ? 'active' : ''}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-dot" style={{ background: 'var(--emerald)' }} />
                    <div className="activity-text">Rohan Mehta — Deal closed</div>
                    <div className="activity-amount" style={{ color: 'var(--emerald)' }}>+₹48,000</div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot" style={{ background: 'var(--brand-400)' }} />
                    <div className="activity-text">Apex Partners — Payout processed</div>
                    <div className="activity-amount" style={{ color: 'var(--brand-400)' }}>₹1,20,000</div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-dot" style={{ background: 'var(--amber)' }} />
                    <div className="activity-text">Milestone reached — Q2 Target</div>
                    <div className="activity-amount" style={{ color: 'var(--amber)' }}>🎯 100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
