'use client';

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const clubs = [
  {
    emoji: "\uD83C\uDFAC",
    name: "КИНОКЛУБ",
    age: "12-18 лет",
    image: "/images/club-cinema.jpg",
    description:
      "Смотрим фильмы, обсуждаем сюжеты, разбираем персонажей и понимаем замысел режиссёра",
    benefits: [
      "Научится видеть смыслы в фильмах",
      "Разовьёт критическое мышление",
      "Научится аргументировать мнение",
    ],
    cta: "Записаться на киноклуб",
  },
  {
    emoji: "\uD83C\uDFA8",
    name: "МУЛЬТИПЛИКАТОРЫ",
    age: "10-18 лет",
    image: "/images/club-animation.jpg",
    description:
      "Создаём сюжеты и сценарии, придумываем героев, озвучиваем и делаем свои мультфильмы",
    benefits: [
      "Создаст свой первый мультфильм",
      "Разовьёт креативность и усидчивость",
      "Научится доводить дело до конца",
    ],
    cta: "Записаться на мультипликацию",
  },
  {
    emoji: "\uD83D\uDCDA",
    name: "ЧИТАТЕЛЬСКИЙ КЛУБ",
    age: "10-18 лет",
    image: "/images/club-reading.jpg",
    description:
      "Читаем книги, обсуждаем истории и создаём свои, учимся высказывать мысли",
    benefits: [
      "Полюбит читать и обсуждать",
      "Научится формулировать мысли",
      "Расширит словарный запас и эрудицию",
    ],
    cta: "Записаться в читательский клуб",
  },
  {
    emoji: "\uD83C\uDF99\uFE0F",
    name: "ПОДКАСТЕРЫ",
    age: "12-18 лет",
    image: "/images/club-podcast.jpg",
    description:
      "Записываем подкасты со сверстниками и интересными гостями, учимся выстраивать беседу и говорить уверенно",
    benefits: [
      "Разовьёт уверенность и речь",
      "Научится вести беседу и задавать вопросы",
      "Преодолеет страх выступлений",
    ],
    cta: "Записаться на подкасты",
  },
  {
    emoji: "\uD83C\uDFB2",
    name: "НАСТОЛЬНЫЕ ИГРЫ",
    age: "10-18 лет",
    image: "/images/club-boardgames.jpg",
    description:
      "Играем в стратегические настолки, учимся думать на шаг вперёд и создаём свои игры",
    benefits: [
      "Разовьёт стратегическое мышление",
      "Научится принимать решения",
      "Станет внимательнее и усидчивее",
    ],
    cta: "Записаться на настольные игры",
  },
]

interface ClubsCatalogProps {
  onCtaClick: () => void
}

export function ClubsCatalog({ onCtaClick }: ClubsCatalogProps) {
  return (
    <section id="clubs" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Выберите, что сейчас нужно ребёнку"}
        </h2>

        <div className="hidden gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden md:h-56">
                <Image
                  src={club.image || "/placeholder.svg"}
                  alt={club.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span className="absolute right-4 top-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  {club.age}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <span className="text-4xl" role="img" aria-hidden="true">
                    {club.emoji}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {club.name}
                </h3>
                <p className="mt-4 text-gray-600">{club.description}</p>

                <ul className="mt-6 space-y-2">
                  {club.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','signup_click'); onCtaClick(); }}
                  className="mt-6 block w-full rounded-lg border-2 border-blue-500 bg-transparent px-4 py-3 text-center text-sm font-semibold text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
                >
                  {club.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {clubs.map((club) => (
              <div
                key={club.name}
                className="w-80 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={club.image || "/placeholder.svg"}
                    alt={club.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                    {club.age}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 text-center">
                    <span className="text-4xl" role="img" aria-hidden="true">
                      {club.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {club.name}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">{club.description}</p>

                  <ul className="mt-6 space-y-2">
                    {club.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','signup_click'); onCtaClick(); }}
                    className="mt-6 block w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    {club.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {clubs.map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>
        </div>
        {/* Help Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','signup_click'); onCtaClick(); }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {"Не знаете что выбрать? Поможем подобрать"}
          </button>
        </div>
      </div>
    </section>
  )
}
