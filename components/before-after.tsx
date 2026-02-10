'use client';

import { Circle, ArrowRight, Sparkles, Clock } from "lucide-react"

const badPoints = [
  "Привыкнет к пассивному потреблению контента",
  "Упустит критический возраст 12-16 лет",
  'Снижение самооценки: "я ничего не умею"',
  "Проблемы с социализацией",
  "Отсутствие навыков для будущего",
]

const goodPoints = [
  "Найдёт своё увлечение",
  "Выйдет из телефона: будет рисовать, читать, создавать",
  "Найдёт друзей по интересам",
  "Разовьёт важные навыки",
  "Станет самостоятельнее",
]

interface BeforeAfterProps {
  onCtaClick: () => void
}

export function BeforeAfter({ onCtaClick }: BeforeAfterProps) {
  return (
    <section id="before-after" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mx-auto mb-12 max-w-4xl text-center text-lg text-gray-700 md:text-xl">
          {"Если у ребёнка нет увлечений, исправить это и помочь найти своё проще в подростковом возрасте. Чем раньше начать, тем быстрее появятся результаты и тем устойчивее будет интерес"}
        </p>

        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {/* Bad News */}
          <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              {"Плохая новость"}
            </h3>
            <p className="mb-6 text-base text-red-600">
              {"Что может случиться, если ребёнок не найдёт увлечение сейчас?"}
            </p>
            <ul className="space-y-4">
              {badPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Circle className="mt-1 h-3 w-3 flex-shrink-0 fill-red-400 text-red-400" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center - Transformation Visual */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-red-50 via-gray-50 to-green-50 p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Clock className="h-10 w-10 text-red-400" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
                <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
                <ArrowRight className="h-8 w-8 rotate-90 text-gray-400" />
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Sparkles className="h-10 w-10 text-green-500" />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-gray-500">
                {"Трансформация начинается с первого занятия"}
              </p>
            </div>
          </div>

          {/* Good News */}
          <div className="rounded-2xl border-l-4 border-green-400 bg-green-50 p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              {"Отличная новость"}
            </h3>
            <p className="mb-6 text-base text-green-600">
              {"Если ребёнок начнёт заниматься в кружках МИНГО, то он:"}
            </p>
            <ul className="space-y-4">
              {goodPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Circle className="mt-1 h-3 w-3 flex-shrink-0 fill-green-400 text-green-400" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
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
