import { useState } from 'react'
import useInstallPrompt from '../hooks/useInstallPrompt'
import LogoMark from './LogoMark'

export default function InstallBanner() {
  const { canInstall, install, installed } = useInstallPrompt()
  const [dismissed, setDismissed] = useState(false)
  const [justInstalled, setJustInstalled] = useState(false)

  if (dismissed || (!canInstall && !justInstalled)) return null

  const handleInstall = async () => {
    await install()
    setJustInstalled(true)
    setTimeout(() => setDismissed(true), 3000)
  }

  return (
    <div className="install-banner">
      <div className="install-banner-inner">

        {justInstalled ? (
          <div className="install-success">
            <span className="install-success-icon">🎉</span>
            <div>
              <div className="install-banner-title">WoveLeap installed!</div>
              <div className="install-banner-sub">Find it on your desktop or taskbar.</div>
            </div>
          </div>
        ) : (
          <>
            <div className="install-banner-left">
              <div className="install-app-icon">
                <LogoMark size={32} />
              </div>
              <div>
                <div className="install-banner-title">Install WoveLeap</div>
                <div className="install-banner-sub">Add to your desktop for quick access — works offline too.</div>
              </div>
            </div>

            <div className="install-banner-actions">
              <button className="btn btn-primary" onClick={handleInstall}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Install App
              </button>
              <button className="install-dismiss" onClick={() => setDismissed(true)} aria-label="Dismiss">
                ✕
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}
