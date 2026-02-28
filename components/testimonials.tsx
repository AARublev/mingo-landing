'use client';

import Image from "next/image"
import { BarChart3, Target, Users } from "lucide-react"

const items = [
  {
    type: "stat" as const,
    icon: BarChart3,
    number: "87% ДЕТЕЙ",
    description: "Стали меньше сидеть в телефоне",
  },
  {
    type: "quote" as const,
    text: "Дочка теперь рисует и читает вместо TikTok. Я не ожидала такого быстрого результата",
    author: "Мама Насти, 13 лет",
    avatar: "/images/parent-nastya.jpg",
  },
  {
    type: "stat" as const,
    icon: Target,
    number: "9 ИЗ 10 РОДИТЕЛЕЙ",
    description: "Видят как ребёнок увлечён",
  },
  {
    type: "quote" as const,
    text: "Сын сам готовится к занятиям, записывает подкасты. Не нужно заставлять — делает с интересом",
    author: "Папа Максима, 15 лет",
    avatar: "/images/parent-maxim.jpg",
  },
  {
    type: "stat" as const,
    icon: Users,
    number: "95% ДЕТЕЙ",
    description: "Нашли друзей в кружках",
  },
  {
    type: "quote" as const,
    text: "София обсуждает книги с ребятами из клуба. Наконец-то общение не про гаджеты",
    author: "Мама Софии, 14 лет",
    avatar: "/images/parent-sofia.jpg",
  },
]

interface TestimonialsProps {
  onCtaClick: () => void
}

export function Testimonials({ onCtaClick }: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="mb-16 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Результаты которые видят родители"}
        </h2>

        <div className="space-y-8">
          {items.map((item, i) => {
            if (item.type === "stat") {
              const Icon = item.icon!
              return (
                <div
                  key={i}
                  className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-7 w-7 text-blue-500" />
                  </div>
                  <p className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">
                    {item.number}
                  </p>
                  <p className="text-lg text-gray-700">{item.description}</p>
                </div>
              )
            }

            return (
              <div
                key={i}
                className="mx-auto max-w-2xl rounded-xl border-l-4 border-blue-400 bg-blue-50 p-6 md:p-8"
              >
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-20 md:w-20">
                      <Image
                        src={item.avatar || "/placeholder.svg"}
                        alt={item.author || ""}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </div>
                  {/* Quote content */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="mb-4 text-lg italic text-gray-900 md:text-xl">
                      {`"${item.text}"`}
                    </p>
                    <p className="text-sm text-gray-600">
                      {"— "}{item.author}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-12 text-center text-lg text-gray-600">
          {"Присоединяйтесь к родителям, которые уже помогли детям найти увлечение"}
        </p>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','signup_click'); onCtaClick(); }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {"Записаться на пробное занятие"}
          </button>
        </div>
      </div>
    </section>
  )
}
