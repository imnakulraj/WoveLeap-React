import Reveal from './Reveal'

const APP_URL = 'https://app.woveleap.com/'

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
            <a href={APP_URL} className="btn btn-primary btn-xl">Sign In to WoveLeap</a>
          </div>
          <div className="cta-note">Direct access to your live WoveLeap workspace</div>
        </Reveal>
      </div>
    </section>
  )
}
