"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "О МИНГО", href: "#about" },
  { label: "Кружки", href: "#clubs" },
  { label: "Как начать", href: "#how-it-works" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Частые вопросы", href: "#faq" },
  { label: "Отзывы", href: "#testimonials" },
]

interface NavbarProps {
  onCtaClick?: () => void
}

export function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  const handleMobileCtaClick = () => {
    setMobileOpen(false)
    onCtaClick?.()
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
          }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            {/*<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-xl text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>*/}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
              МИНГО
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="https://t.me/Mingo_online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Telegram"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
          </a>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => onCtaClick?.()}
            className="hidden rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
          >
            Записаться
          </button>

          {/* Mobile Burger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header >

      {/* Mobile Overlay */}
      {
        mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            onKeyDown={() => { }}
            role="presentation"
          />
        )
      }

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-20 items-center justify-end px-4">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleMobileCtaClick}
            className="mt-4 block rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:shadow-lg"
          >
            Записаться
          </button>
        </nav>
      </div>
    </>
  )
}
