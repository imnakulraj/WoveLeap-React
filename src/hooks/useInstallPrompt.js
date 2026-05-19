import { useState, useEffect } from 'react'

export function detectBrowser() {
  const ua = navigator.userAgent
  if (ua.includes('Edg/')) return 'edge'
  if (ua.includes('Chrome')) return 'chrome'
  if (ua.includes('Firefox')) return 'firefox'
  if (ua.includes('Safari')) return 'safari'
  return 'other'
}

export function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
}

export function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
}

export default function useInstallPrompt() {
  const [prompt, setPrompt] = useState(() => window.__pwaInstallPrompt || null)
  const [installed, setInstalled] = useState(() => isStandalone())

  useEffect(() => {
    if (window.__pwaInstallPrompt) setPrompt(window.__pwaInstallPrompt)

    const onPromptReady = () => {
      if (window.__pwaInstallPrompt) setPrompt(window.__pwaInstallPrompt)
    }
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
    if (!p) return false
    p.prompt()
    const { outcome } = await p.userChoice
    if (outcome === 'accepted') setInstalled(true)
    setPrompt(null)
    window.__pwaInstallPrompt = null
    return outcome === 'accepted'
  }

  return {
    canInstall: !!prompt && !installed,   // native prompt available
    install,
    installed,
    browser: detectBrowser(),
    isIOS: isIOS(),
  }
}
