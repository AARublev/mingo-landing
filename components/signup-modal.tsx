"use client"

import React from "react"

import { useState, useCallback, useEffect } from "react"
import { X } from "lucide-react"
import { sendToTelegram } from '@/lib/telegram';

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "")

  // Always start with 7
  let d = digits
  if (d.startsWith("8")) {
    d = "7" + d.slice(1)
  }
  if (!d.startsWith("7") && d.length > 0) {
    d = "7" + d
  }

  if (d.length === 0) return ""
  if (d.length <= 1) return "+7"
  if (d.length <= 4) return `+7 (${d.slice(1)}`
  if (d.length <= 7) return `+7 (${d.slice(1, 4)}) ${d.slice(4)}`
  if (d.length <= 9) return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`
  return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7, 9)}-${d.slice(9, 11)}`
}

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!name.trim() || !phone.trim() || !consent) return

      // Отправка в Telegram
      await sendToTelegram(name, phone)

      if(typeof ym !== 'undefined') ym(107047349,'reachGoal','form_submit')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setName("")
        setPhone("")
        setConsent(false)
        onClose()
      }, 2000)
    },
    [name, phone, consent, onClose]
  )

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  if (!isOpen) return null

  const isValid = name.trim().length > 0 && phone.replace(/\D/g, "").length >= 11 && consent

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
      onKeyDown={() => { }}
      role="presentation"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{"Заявка отправлена!"}</h3>
            <p className="mt-2 text-gray-600">{"Мы свяжемся с вами в течение 2 часов"}</p>
          </div>
        ) : (
          <>
            <h3 className="mb-2 pr-8 text-xl font-bold text-gray-900 md:text-2xl">
              {"Запишитесь на пробное занятие за 500₽"}
            </h3>
            <p className="mb-6 text-sm text-gray-500">
              {"Оставьте контакты — подберём кружок и забронируем место"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="signup-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  {"Ваше имя"}
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="signup-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  {"Телефон"}
                </label>
                <input
                  id="signup-phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="signup-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="signup-consent" className="text-xs leading-relaxed text-gray-500">
                  {"Заполняя форму, вы даёте согласие на обработку персональных данных и на получение информационных и рекламных предложений."}
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {"Записаться на пробное занятие"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
