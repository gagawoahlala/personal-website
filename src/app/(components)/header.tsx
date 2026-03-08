'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './theme-provider'
import { useLocale, LOCALES, LOCALE_LABELS } from './locale-provider'
import type { Locale } from '@/lib/i18n'

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Avatar({ large = false, href = '/' }: { large?: boolean; href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={`block rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10 ${
        large ? 'h-16 w-16' : 'h-9 w-9'
      }`}
    >
      <div
        className="rounded-full bg-gradient-to-br from-teal-400 to-violet-600 h-full w-full"
        aria-hidden="true"
      />
    </Link>
  )
}

function MobileMenu({
  isOpen,
  onClose,
  pathname,
  navLabels,
  closeLabel,
  navigationLabel,
}: {
  isOpen: boolean
  onClose: () => void
  pathname: string
  navLabels: { href: string; label: string }[]
  closeLabel: string
  navigationLabel: string
}) {
  if (!isOpen) return null
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={navigationLabel}
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            aria-label={closeLabel}
            onClick={onClose}
            className="-m-1 p-1"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{navigationLabel}</h2>
        </div>
        <nav className="mt-6" aria-label={navigationLabel}>
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {navLabels.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`block py-2 ${pathname === href ? 'text-teal-500' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const { theme, toggleTheme } = useTheme()
  const { t, locale, setLocale } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLabels = [
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
  ]

  function cycleLocale() {
    const idx = LOCALES.indexOf(locale)
    const next: Locale = LOCALES[(idx + 1) % LOCALES.length]
    setLocale(next)
  }

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
            <div
              className="sm:px-8 top-0 order-last -mb-3 pt-3"
              style={{ position: 'var(--header-position)' as React.CSSProperties['position'] }}
            >
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div
                      className="top-3 w-full"
                      style={{ position: 'var(--header-inner-position)' as React.CSSProperties['position'] }}
                    >
                      <div className="relative">
                        <div
                          className="absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                          style={{
                            opacity: 'var(--avatar-border-opacity, 0)',
                            transform: 'var(--avatar-border-transform)',
                          }}
                          aria-hidden="true"
                        />
                        <div
                          className="block h-16 w-16 origin-left pointer-events-auto"
                          style={{ transform: 'var(--avatar-image-transform)' }}
                        >
                          <Link href="/" aria-label={t.nav.home} className="block h-16 w-16 rounded-full">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-400 to-violet-600" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' as React.CSSProperties['position'] }}
        >
          <div
            className="sm:px-8 w-full"
            style={{
              position: 'var(--header-inner-position)' as React.CSSProperties['position'],
              top: 'var(--header-top, theme(spacing.6))',
            }}
          >
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    {/* Left: small avatar on non-home pages */}
                    <div className="flex flex-1">
                      {!isHomePage && (
                        <div className="pointer-events-auto">
                          <Avatar href="/" />
                        </div>
                      )}
                    </div>

                    {/* Center: desktop nav */}
                    <div className="flex flex-1 justify-end md:justify-center">
                      {/* Mobile menu button */}
                      <div className="pointer-events-auto md:hidden">
                        <button
                          type="button"
                          aria-expanded={mobileMenuOpen}
                          aria-label={t.nav.navigation}
                          onClick={() => setMobileMenuOpen(true)}
                          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        >
                          {t.nav.menu}
                          <svg
                            viewBox="0 0 8 6"
                            aria-hidden="true"
                            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                          >
                            <path
                              d="M1.75 1.75 4 4.25l2.25-2.5"
                              fill="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Desktop nav */}
                      <nav className="pointer-events-auto hidden md:block" aria-label={t.nav.navigation}>
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          {navLabels.map(({ href, label }) => {
                            const isActive = pathname === href
                            return (
                              <li key={href}>
                                <Link
                                  href={href}
                                  className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${
                                    isActive ? 'text-teal-500 dark:text-teal-400' : ''
                                  }`}
                                  aria-current={isActive ? 'page' : undefined}
                                >
                                  {label}
                                  {isActive && (
                                    <span
                                      className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                                      aria-hidden="true"
                                    />
                                  )}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </nav>
                    </div>

                    {/* Right: language toggle + theme toggle */}
                    <div className="flex justify-end md:flex-1 gap-2">
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          aria-label={t.language.toggle}
                          onClick={cycleLocale}
                          className="rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-700 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:text-teal-500 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:hover:text-teal-400"
                        >
                          {LOCALE_LABELS[locale]}
                        </button>
                      </div>
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          aria-label={theme === 'dark' ? t.theme.switchToLight : t.theme.switchToDark}
                          onClick={toggleTheme}
                          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                        >
                          <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
                          <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block dark:fill-teal-400/10 dark:stroke-teal-500 dark:group-hover:stroke-teal-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
        navLabels={navLabels}
        closeLabel={t.nav.close}
        navigationLabel={t.nav.navigation}
      />
    </>
  )
}
