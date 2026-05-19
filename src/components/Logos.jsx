const LOGOS = ['Nexus Corp', 'Meridian', 'Vortex Labs', 'Stellar HQ', 'Zenith Cloud', 'Apex Partners']

export default function Logos() {
  return (
    <div className="logos-section">
      <div className="container">
        <div className="logos-label">Powering sales operations at</div>
        <div className="logos-row">
          {LOGOS.map(name => (
            <span key={name} className="logo-item">{name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
