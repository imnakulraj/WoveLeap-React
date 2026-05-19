import { useState, useEffect } from 'react'
import LogoMark from './LogoMark'

const APP_URL = 'https://app.woveleap.com/'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <LogoMark size={38} />
            <span className="nav-logo-text">WoveLeap</span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>

          <div className="nav-actions">
            <a href={APP_URL} className="btn btn-primary">Sign In to WoveLeap</a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#integrations" onClick={closeMenu}>Integrations</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href={APP_URL} className="btn btn-primary btn-lg" style={{ marginTop: 12 }} onClick={closeMenu}>
          Sign In to WoveLeap
        </a>
      </div>
    </>
  )
}
