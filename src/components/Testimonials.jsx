import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    text: '"We used to spend 3 days closing our commission books every month. WoveLeap cut that down to half a day. The automated payout workflows and accounting exports are game-changers."',
    name: 'Arjun Kapoor',
    role: 'VP Sales, Nexus Corp',
    initials: 'AK',
    avatarStyle: { background: 'linear-gradient(135deg,#6366F1,#8B5CF6)' },
  },
  {
    text: '"Our partner network grew 4x last year, and WoveLeap scaled with us effortlessly. The partner portal alone reduced our support tickets by 60% — partners can see everything themselves."',
    name: 'Sneha Rao',
    role: 'Head of Partnerships, Meridian',
    initials: 'SR',
    avatarStyle: { background: 'linear-gradient(135deg,#06B6D4,#3B82F6)' },
  },
  {
    text: '"The dispute resolution feature is brilliant. Our partners trust the numbers because they can see every calculation. Disputes dropped by 80% in the first quarter after we switched."',
    name: 'Mihail Johansson',
    role: 'CFO, Stellar HQ',
    initials: 'MJ',
    avatarStyle: { background: 'linear-gradient(135deg,#10B981,#059669)' },
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Customer stories</span>
          <Reveal tag="h2" className="section-heading">
            Loved by sales &amp; finance teams
          </Reveal>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ text, name, role, initials, avatarStyle }, i) => (
            <Reveal key={name} delay={i} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="star">★</span>
                ))}
              </div>
              <div className="t-text">{text}</div>
              <div className="t-author">
                <div className="t-avatar" style={avatarStyle}>{initials}</div>
                <div>
                  <div className="t-name">{name}</div>
                  <div className="t-role">{role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
