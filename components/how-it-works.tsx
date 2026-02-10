'use client';

import { ArrowRight, Target, Palette, CheckCircle2, Shield } from "lucide-react"

const steps = [
  {
    step: "ШАГ 1",
    icon: Target,
    iconColor: "text-blue-500",
    title: "ВЫБИРАЕТЕ КРУЖОК",
    text: "Один кружок на выбор из 5 направлений. Не знаете какой? Поможем подобрать",
    bg: "bg-blue-50/50",
  },
  {
    step: "ШАГ 2",
    icon: Palette,
    iconColor: "text-purple-500",
    title: "РЕБЁНОК УВЛЕКАЕТСЯ",
    text: "Занимается 2 раза в неделю. Готовит проекты между занятиями — это развивает навыки, не отвлекая от учёбы",
    bg: "bg-purple-50/50",
  },
  {
    step: "ШАГ 3",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    title: "ВЫ ВИДИТЕ ПРОГРЕСС",
    text: "Получаете обратную связь каждую неделю. Видите как ребёнок увлечён",
    bg: "bg-green-50/50",
  },
]

interface HowItWorksProps {
  onCtaClick: () => void
}

export function HowItWorks({ onCtaClick }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Начать с МИНГО очень просто"}
        </h2>
{/* Desktop - Grid */}
<div className="relative hidden gap-8 md:grid md:grid-cols-3">
  {steps.map((s, i) => (
    <div key={s.step} className="relative flex flex-col">
      <div
        className={`flex flex-1 flex-col items-center rounded-2xl ${s.bg} p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
      >
        <span className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          {s.step}
        </span>

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
          <s.icon className={`h-10 w-10 ${s.iconColor}`} />
        </div>

        <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
          {s.title}
        </h3>
        <p className="text-gray-600">{s.text}</p>
      </div>

      {/* Arrow between cards */}
      {i < steps.length - 1 && (
        <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
          <ArrowRight className="h-8 w-8 text-gray-300" />
        </div>
      )}
    </div>
  ))}
</div>

{/* Mobile - Carousel */}
<div className="md:hidden">
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
    {steps.map((s) => (
      <div key={s.step} className="w-80 flex-shrink-0 snap-center">
        <div
          className={`flex flex-col items-center rounded-2xl ${s.bg} p-8 text-center`}
        >
          <span className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {s.step}
          </span>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
            <s.icon className={`h-10 w-10 ${s.iconColor}`} />
          </div>

          <h3 className="mb-4 text-xl font-bold text-gray-900">
            {s.title}
          </h3>
          <p className="text-gray-600">{s.text}</p>
        </div>
      </div>
    ))}
  </div>
  
  {/* Dots */}
  <div className="mt-4 flex justify-center gap-2">
    {steps.map((_, i) => (
      <div key={i} className="h-2 w-2 rounded-full bg-blue-300" />
    ))}
  </div>
</div>


        {/* Guarantee Box */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center gap-3 rounded-xl bg-blue-50 p-6 text-center">
          <Shield className="h-6 w-6 flex-shrink-0 text-blue-600" />
          <p className="font-medium text-blue-900">
            {"ГАРАНТИЯ: Если кружок не подошёл — поменяем бесплатно в течение месяца"}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {"Записаться на пробное занятие"}
          </button>
        </div>
      </div>
    </section>
  )
}
