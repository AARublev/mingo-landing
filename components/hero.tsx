"use client"

import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const clubs = [
  { emoji: "\uD83C\uDFAC", label: "Киноклуб" },
  { emoji: "\uD83C\uDFA8", label: "Мультипликация" },
  { emoji: "\uD83D\uDCDA", label: "Читательский клуб" },
  { emoji: "\uD83C\uDF99\uFE0F", label: "Подкастеры" },
  { emoji: "\uD83C\uDFB2", label: "Настольные игры" },
]

const guarantees = [
  "Не подошёл кружок? Поменяем бесплатно в течение месяца",
  "Еженедельная обратная связь родителям",
  "11 600\u20BD/мес за 8 занятий",
]

const floatingCards = [
  {
    image: "/images/card-cinema.jpg",
    text: "Критическое мышление через кино",
    gradient: "from-blue-500 to-blue-600",
    position: "left-0 top-0",
    animClass: "animate-float",
  },
  {
    image: "/images/card-animation.jpg",
    text: "Совместные проекты в мультипликации",
    gradient: "from-amber-500 to-orange-500",
    position: "right-0 top-8",
    animClass: "animate-float-delay-1",
  },
  {
    image: "/images/card-reading.jpg",
    text: "Чтение через истории и обсуждение",
    gradient: "from-green-500 to-emerald-600",
    position: "bottom-24 left-8",
    animClass: "animate-float-delay-2",
  },
  {
    image: "/images/card-podcast.jpg",
    text: "Навык коммуникации через подкасты",
    gradient: "from-purple-500 to-pink-500",
    position: "bottom-0 right-8",
    animClass: "animate-float-delay-3",
  },
]

interface HeroProps {
  onCtaClick: () => void
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Rounded gradient background */}
      <div className="absolute inset-x-4 inset-y-8 rounded-[3rem] bg-gradient-to-br from-blue-50 via-purple-50/40 to-pink-50/60 md:inset-x-6" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {"Ребёнок целый день в телефоне?"}{" "}
            <span className="text-blue-600">
              {"Не увлекают кружки и не знает, чем заняться?"}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {"Онлайн-кружки МИНГО - ребёнок выходит из TikTok-ов, находит увлечение, создаёт проекты и заводит друзей по интересам"}
          </p>

          {/* Clubs Chips */}
          <div className="mt-8 flex flex-wrap gap-4">
            {clubs.map((club) => (
              <a
                key={club.label}
                href="#clubs"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-2 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {club.emoji}
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {club.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA + Group size */}
          <div className="mt-8 flex flex-col items-center gap-2 md:items-start">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              {"Записаться на бесплатное пробное занятие"}
            </button>
            <p className="text-sm text-gray-500 text-center md:text-left">
              {"Группы до 8-10 детей \u2022 2 раза в неделю"}
            </p>
          </div>
        </div>

        {/* Right Column - Floating Photo Cards */}
        <div className="relative hidden h-[500px] md:h-[600px] lg:block">
          {floatingCards.map((card) => (
            <div
              key={card.text}
              className={`absolute w-48 overflow-hidden rounded-2xl bg-white shadow-2xl ${card.position} ${card.animClass}`}
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.text}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div
                className={`bg-gradient-to-r ${card.gradient} px-4 py-3`}
              >
                <p className="text-sm font-semibold text-white">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards (2 visible) */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden pt-4">
          {floatingCards.map((card) => (
            <div
              key={card.text}
              className={`w-40 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl ${card.animClass}`}
            >
              <div className="relative h-28 w-full overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.text}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div
                className={`bg-gradient-to-r ${card.gradient} px-3 py-2.5`}
              >
                <p className="text-xs font-semibold text-white">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
