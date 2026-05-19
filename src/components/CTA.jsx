import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <Reveal className="cta-inner">
          <span className="badge badge-emerald" style={{ marginBottom: 24 }}>
            No credit card required
          </span>
          <h2 className="cta-heading">
            Ready to streamline<br />your commissions?
          </h2>
          <p className="cta-sub">
            Join 500+ teams who trust WoveLeap to pay their partners accurately, on time, every time.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-xl">Start 14-Day Free Trial</a>
            <a href="#" className="btn btn-secondary btn-xl">Book a Demo</a>
          </div>
          <div className="cta-note">Free trial · No credit card · Cancel anytime</div>
        </Reveal>
      </div>
    </section>
  )
}
