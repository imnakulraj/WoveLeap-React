import Reveal from './Reveal'

const STATS = [
  { number: '₹500Cr+', label: 'Commissions Processed' },
  { number: '10,000+', label: 'Active Partners' },
  { number: '99.98%', label: 'Calculation Accuracy' },
  { number: '4 hrs',  label: 'Average Time to Close Books' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <Reveal>
          <div className="stats-grid">
            {STATS.map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
