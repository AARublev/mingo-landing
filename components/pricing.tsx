'use client';

import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "от 4 занятий по 60 минут",
  "Профессиональный педагог",
  "Группа 8-10 детей",
  "Еженедельная обратная связь",
  "Доступ к материалам",
  "Бесплатная замена кружка",
]

interface PricingProps {
  onCtaClick: () => void
}

export function Pricing({ onCtaClick }: PricingProps) {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left Column - Text + Illustration */}
          <div>
          <p className="mb-6 max-w-xl text-sm text-blue-600 font-semibold md:text-base">
              {"Педагог-эксперт в своём направлении, группа 8-10 сверстников со схожими интересами и еженедельная обратная связь родителям"}
            </p>

            <h2 className="mb-8 text-balance text-center text-4xl font-bold text-gray-900 md:text-left md:text-5xl">
              {"Всего за 1,225\u20BD за одно занятие"}
            </h2>

            {/* Illustration */}
            <div className="relative h-80 w-full rounded-2xl md:h-96">
              <Image
                src="/images/pricing-illustration.jpg"
                alt="Happy children creating projects"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

          </div>

          {/* Right Column - Pricing Card */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-2xl md:p-12">
            {/* Decorative elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/30" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-100/30" />
            <div className="absolute right-12 bottom-12 h-16 w-16 rounded-full bg-green-100/30" />

            <div className="relative">
              {/* Price */}
              <div className="mb-8 text-center">
                <p className="text-4xl font-bold text-gray-900 md:text-5xl">
                  {"4,900\u20BD / МЕСЯЦ"}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => { if(typeof ym !== 'undefined') ym(107047349,'reachGoal','signup_click'); onCtaClick(); }}
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                {"Попробовать за 500₽"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
