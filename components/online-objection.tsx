'use client';

import { X, Check } from "lucide-react"

const tiktokItems = [
  "Бесконечный скролл",
  "Пассивное потребление",
  "Одиночество",
  "Ничего не создаёт",
  "Забывает через час",
]

const mingoItems = [
  "60 минут, 2 раза в неделю",
  "Активное участие",
  "Общение с 8-10 сверстниками",
  "Делает проекты между занятиями",
  "Думает об этом всю неделю",
]

interface OnlineObjectionProps {
  onCtaClick: () => void
}

export function OnlineObjection({ onCtaClick }: OnlineObjectionProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-6 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Онлайн-кружки МИНГО — это ведь тоже онлайн?"}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          {"МИНГО — инструмент, который вовлекает в офлайн: ребёнок готовит проекты, общается с ребятами, изучает новое"}
        </p>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Comparison Table */}
          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* TikTok Column */}
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="mb-6 text-lg font-bold text-gray-900">
                  {"TikTok / Игры"}
                </h3>
                <ul className="space-y-4">
                  {tiktokItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MINGO Column */}
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="mb-6 text-lg font-bold text-gray-900">
                  {"Кружки МИНГО"}
                </h3>
                <ul className="space-y-4">
                  {mingoItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Time Graph */}
          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              {"ВРЕМЯ РЕБЁНКА В НЕДЕЛЮ:"}
            </h3>

            {/* TikTok Bar */}
            <div className="mb-6">
              <p className="mb-2 text-sm text-gray-700">TikTok</p>
              <div className="h-12 w-full overflow-hidden rounded-full bg-red-200">
                <div className="flex h-full w-full items-center justify-center bg-red-500">
                  <span className="text-sm font-semibold text-white">
                    {"20+ часов онлайн"}
                  </span>
                </div>
              </div>
            </div>

            {/* MINGO Bar */}
            <div>
              <p className="mb-2 text-sm text-gray-700">МИНГО</p>
              <div className="flex h-12 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="flex w-1/4 items-center justify-center bg-blue-500">
                  <span className="text-xs font-semibold text-white">2ч</span>
                </div>
                <div className="flex w-3/4 items-center justify-center bg-green-500">
                  <span className="text-xs font-semibold text-white">
                    {"6ч офлайн"}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {"2 часа онлайн \u2192 6 часов офлайн (готовит проекты между занятиями)"}
              </p>
            </div>
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
