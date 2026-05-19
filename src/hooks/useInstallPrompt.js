import { useState, useEffect } from 'react'

export default function useInstallPrompt() {
  const [prompt, setPrompt] = useState(() => window.__pwaInstallPrompt || null)
  const [installed, setInstalled] = useState(
    () => window.matchMedia('(display-mode: standalone)').matches
  )

  useEffect(() => {
    // Already captured before React mounted
    if (window.__pwaInstallPrompt) {
      setPrompt(window.__pwaInstallPrompt)
    }

    // Fires if prompt arrives after React mounts
    const onPromptReady = () => {
      if (window.__pwaInstallPrompt) setPrompt(window.__pwaInstallPrompt)
    }

    // Standard handler for late-arriving prompt
    const onBeforeInstall = e => {
      e.preventDefault()
      window.__pwaInstallPrompt = e
      setPrompt(e)
    }

    const onInstalled = () => {
      setInstalled(true)
      setPrompt(null)
      window.__pwaInstallPrompt = null
    }

    window.addEventListener('pwa-prompt-ready', onPromptReady)
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('pwa-prompt-ready', onPromptReady)
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const install = async () => {
    const p = prompt || window.__pwaInstallPrompt
    if (!p) return
    p.prompt()
    const { outcome } = await p.userChoice
    if (outcome === 'accepted') {
      setInstalled(true)
    }
    setPrompt(null)
    window.__pwaInstallPrompt = null
  }

  return {
    canInstall: !!prompt && !installed,
    install,
    installed,
  }
}
