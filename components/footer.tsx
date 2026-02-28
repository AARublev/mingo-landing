"use client"

import { Send, Mail, Phone } from "lucide-react"

const clubLinks = [
  "Киноклуб",
  "Мультипликаторы",
  "Читательский клуб",
  "Подкастеры",
  "Настольные игры",
]

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-lg text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">МИНГО</span>
            </div>
            <p className="mb-3 text-gray-400">
              {"МИНГО — онлайн-кружки для детей 10-18 лет"}
            </p>
            <p className="max-w-xs text-sm text-gray-500">
              {"Помогаем найти увлечение и выйти из телефона через киноклуб, мультипликацию, подкасты, читательский клуб и настольные игры"}
            </p>
          </div>

          {/* Clubs */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-white">
              {"КРУЖКИ"}
            </h3>
            <ul className="space-y-2">
              {clubLinks.map((club) => (
                <li key={club}>
                  <a
                    href="#clubs"
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {club}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide text-white">
              {"КОНТАКТЫ"}
            </h3>
            <div className="flex flex-col items-center gap-3 text-sm text-gray-400 md:items-start">
              <a
                href="https://t.me/mingo_online_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 transition-colors hover:text-blue-400"
                onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','telegram_click'); }}
              >
                {"Напишите в Telegram"}
              </a>
              <a
                href="mailto:hello@mingo.ru"
                className="flex items-center gap-2 transition-colors hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                {"hello@mingo.ru"}
              </a>
              {/*<div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {"+7 (XXX) XXX-XX-XX"}
              </div>*/}

              <div className="mt-4 text-sm text-gray-500">
                <p>{"Пн-Пт: 10:00-20:00"}</p>
                <p>{"Сб-Вс: 12:00-18:00"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="text-xs text-gray-500 transition-colors hover:text-gray-400">
              {"Политика конфиденциальности"}
            </a>
            <a href="/terms" className="text-xs text-gray-500 transition-colors hover:text-gray-400">
              {"Договор оферты"}
            </a>
            <a href="#faq" className="text-xs text-gray-500 transition-colors hover:text-gray-400">
              {"Часто задаваемые вопросы"}
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-gray-600">
            {"\u00A9 2026 МИНГО. Все права защищены."}
          </p>
        </div>
      </div>
    </footer>
  )
}
