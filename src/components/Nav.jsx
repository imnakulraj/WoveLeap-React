import { useState, useEffect } from 'react'
import LogoMark from './LogoMark'
import useInstallPrompt from '../hooks/useInstallPrompt'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { canInstall, install } = useInstallPrompt()

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
            <a href="#" className="nav-login">Log in</a>
            {canInstall && (
              <button className="btn btn-install" onClick={install} title="Install WoveLeap on your device">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M4 6l3 3 3-3M1 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Install
              </button>
            )}
            <a href="#cta" className="btn btn-primary">Start Free Trial</a>
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
        <a href="#" style={{ color: 'var(--gray-500)' }} onClick={closeMenu}>Log in</a>
        {canInstall && (
          <button className="btn btn-install btn-lg" style={{ marginTop: 8 }} onClick={() => { install(); closeMenu() }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Install App
          </button>
        )}
        <a href="#cta" className="btn btn-primary btn-lg" style={{ marginTop: 8 }} onClick={closeMenu}>
          Start Free Trial
        </a>
      </div>
    </>
  )
}
