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

function getInstallContext(canInstall, installed) {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      label: 'Install App',
      sublabel: 'Add WoveLeap to your device',
      badge: null,
      title: 'Install WoveLeap on your device',
    }
  }

  if (installed) {
    return {
      label: 'App Installed',
      sublabel: 'Find WoveLeap on your desktop or home screen',
      badge: null,
      title: 'WoveLeap is already installed',
    }
  }

  const ua = navigator.userAgent
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  const isAndroid = /Android/i.test(ua)
  const isSafari = /Safari/i.test(ua) && !/Chrome|CriOS|Edg/i.test(ua)
  const isSupportedDesktop = /Chrome|Edg/i.test(ua)

  if (canInstall) {
    return {
      label: 'Install WoveLeap',
      sublabel: isAndroid
        ? 'Add it to your phone for faster access'
        : 'Works offline and launches like an app',
      badge: 'Free',
      title: 'Install WoveLeap on your device',
    }
  }

  if (isIOS && isSafari) {
    return {
      label: 'Add to Home Screen',
      sublabel: 'Use Safari Share menu to install WoveLeap',
      badge: null,
      title: 'Install from Safari using Add to Home Screen',
    }
  }

  if (isSupportedDesktop) {
    return {
      label: 'Install Available',
      sublabel: 'Refresh once install prompt is ready',
      badge: null,
      title: 'Install becomes available when the browser exposes the prompt',
    }
  }

  return {
    label: 'Open in Chrome or Edge',
    sublabel: 'Install support depends on your browser',
    badge: null,
    title: 'Use Chrome, Edge, or Safari on iPhone to install WoveLeap',
  }
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

  const canInstall = !!prompt && !installed
  const installContext = getInstallContext(canInstall, installed)

  return {
    canInstall,
    install,
    installed,
    browser: detectBrowser(),
    isIOS: isIOS(),
    installContext,
  }
}
