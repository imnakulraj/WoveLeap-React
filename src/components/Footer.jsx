import LogoMark from './LogoMark'

const LINKS = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal:   ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <LogoMark size={48} />
              <span className="nav-logo-text" style={{ fontSize: 22 }}>WoveLeap</span>
            </a>
            <p className="footer-desc">
              Automate your commission management, empower your partners, and close your
              books faster with WoveLeap.
            </p>
            <div className="footer-socials">
              <a className="social-btn" href="#" title="Twitter/X">𝕏</a>
              <a className="social-btn" href="#" title="LinkedIn">in</a>
              <a className="social-btn" href="#" title="GitHub">⌨</a>
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div className="footer-col" key={title}>
              <div className="footer-col-title">{title}</div>
              <ul>
                {items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            © 2025 WoveLeap Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
