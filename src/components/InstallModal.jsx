import { useEffect } from 'react'

const STEPS = {
  chrome: [
    { icon: '1', text: 'Look for the install icon (⊕) in the address bar — top right' },
    { icon: '2', text: 'Click it and select "Install" in the popup' },
    { icon: '3', text: 'WoveLeap opens as a standalone app on your desktop' },
  ],
  edge: [
    { icon: '1', text: 'Click the "…" menu in the top-right corner' },
    { icon: '2', text: 'Go to Apps → "Install this site as an app"' },
    { icon: '3', text: 'Confirm by clicking Install in the dialog' },
  ],
  safari: [
    { icon: '1', text: 'Tap the Share button at the bottom of Safari' },
    { icon: '2', text: 'Scroll down and tap "Add to Home Screen"' },
    { icon: '3', text: 'Tap "Add" to confirm — icon appears on your home screen' },
  ],
  firefox: [
    { icon: '!', text: 'Firefox doesn\'t support PWA install yet' },
    { icon: '→', text: 'Open this page in Chrome or Edge to install the app' },
  ],
  other: [
    { icon: '→', text: 'Open this page in Chrome or Edge for the best install experience' },
  ],
}

const BROWSER_LABELS = {
  chrome: 'Google Chrome',
  edge: 'Microsoft Edge',
  safari: 'Safari',
  firefox: 'Firefox',
  other: 'Your Browser',
}

export default function InstallModal({ browser, isIOS, onClose }) {
  const key = isIOS ? 'safari' : browser
  const steps = STEPS[key] || STEPS.other

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        <div className="modal-header">
          <div className="modal-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="1" y="15" width="20" height="6" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
              <path d="M11 1v10M7 8l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="modal-title">Install WoveLeap</div>
            <div className="modal-sub">on {BROWSER_LABELS[key] || 'your browser'}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-steps">
          {steps.map((s, i) => (
            <div className="modal-step" key={i}>
              <div className="modal-step-num">{s.icon}</div>
              <div className="modal-step-text">{s.text}</div>
            </div>
          ))}
        </div>

        {(key === 'chrome' || key === 'edge') && (
          <div className="modal-tip">
            <span>💡</span>
            <span>Don't see the install icon? Open DevTools (F12) → Application → Manifest → <strong>"Add to homescreen"</strong></span>
          </div>
        )}

        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  )
}
