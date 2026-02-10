import { BarChart3, Target, Users, CheckCircle2 } from "lucide-react"

const values = [
  {
    icon: BarChart3,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "ВЫХОДИТ ИЗ ТЕЛЕФОНА",
    text: "Вместо 20+ часов в TikTok выходит в офлайн где создает проекты. Рисует, читает, снимает между занятиями",
  },
  {
    icon: Target,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    title: "САМ ХОЧЕТ ЗАНИМАТЬСЯ",
    text: "Находит своё увлечение и занимается с интересом — вам не нужно заставлять",
  },
  {
    icon: Users,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    title: "НАХОДИТ ДРУЗЕЙ ПО ИНТЕРЕСАМ",
    text: "Общается с 8-10 сверстниками в группе, обсуждает хобби, а не гаджеты",
  },
  {
    icon: CheckCircle2,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "ВЫ СПОКОЙНЫ И В КУРСЕ",
    text: "Получаете обратную связь каждую неделю, знаете чем занят ребёнок и видите прогресс",
  },
]

export function Values() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Что изменится через месяц"}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-center md:justify-start">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${v.iconBg}`}>
                  <v.icon className={`h-7 w-7 ${v.iconColor}`} />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
                {v.title}
              </h3>
              <p className="leading-relaxed text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#signup"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {"Записаться на пробное занятие"}
          </a>
        </div>
      </div>
    </section>
  )
}
