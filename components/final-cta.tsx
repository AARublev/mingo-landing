'use client';

import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Пробное занятие за 500₽ в любом кружке",
  "Поможем выбрать направление под вашего ребёнка",
  "Увидите результат уже после первого занятия",
  "Ребенок сам решит продолжать — без давления",
]

interface FinalCTAProps {
  onCtaClick: () => void
}

export function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section id="signup" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* 2-Column layout */}
        <div className="mb-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left - Text content */}
          <div className="text-left">
            <h2 className="mb-6 text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {"Покажите ребёнку мир настоящих увлечений"}
            </h2>

            <p className="mb-8 max-w-xl text-lg text-blue-100 md:text-xl">
              {"Запишитесь на пробное занятие и увидите как ваш ребёнок увлечётся настоящим делом"}
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-base text-white md:text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80 lg:h-96">
            <Image
              src="/images/final-cta-kids.jpg"
              alt="Happy children creating and learning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* CTA - Centered below */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="rounded-xl bg-white px-12 py-5 text-lg font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50 md:text-xl"
          >
            {"Записаться на пробное занятие прямо сейчас"}
          </button>
        </div>

        {/* Additional Info */}
        <p className="mt-8 text-center text-sm text-blue-200 md:text-base">
          {"4,900\u20BD/мес \u2022 от 4 занятий \u2022 Пробное за 500₽"}
        </p>

      </div>
    </section>
  )
}
