"use client"

import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"

const instructors = [
  {
    name: "ИРИНА",
    image: "/images/instructor-irina.jpg",
    experience: "15 лет",
    icons: ["\uD83C\uDFAC", "\uD83D\uDCDA"],
    expertise: "Киновед, режиссёр документального кино",
    clubs: ["Киноклуб", "Читательский клуб"],
  },
  {
    name: "ОЛЬГА",
    image: "/images/instructor-olga.jpg",
    experience: "13 лет",
    icons: ["\uD83C\uDFA8", "\uD83C\uDFB2"],
    expertise: "Художник-аниматор, режиссёр мультипликации",
    clubs: ["Мультипликаторы", "Настольные игры"],
  },
  {
    name: "МАРИЯ",
    image: "/images/instructor-maria.jpg",
    experience: "11 лет",
    icons: ["\uD83C\uDF99\uFE0F", "\uD83D\uDCDA"],
    expertise: "Журналист, ведущая подкастов и медиапроектов",
    clubs: ["Подкастеры", "Читательский клуб"],
  },
  {
    name: "АННА",
    image: "/images/instructor-anna.jpg",
    experience: "10 лет",
    icons: ["\uD83C\uDFB2", "\uD83C\uDFAC"],
    expertise: "Игропрактик, специалист по стратегическим играм",
    clubs: ["Настольные игры", "Киноклуб"],
  },
]

export function Instructors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  // Определяем количество видимых карточек
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1) // Мобильная
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2) // Планшет
      } else {
        setCardsPerView(3) // Desktop
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex((i) => {
      if (cardsPerView === 1) {
        // Мобильная: по кругу
        return i === 0 ? instructors.length - 1 : i - 1
      } else {
        // Desktop: по кругу с учетом количества карточек
        const maxIndex = Math.max(0, instructors.length - cardsPerView)
        return i === 0 ? maxIndex : i - 1
      }
    })
  }, [cardsPerView])
  
  const next = useCallback(() => {
    setCurrentIndex((i) => {
      if (cardsPerView === 1) {
        // Мобильная: по кругу
        return i === instructors.length - 1 ? 0 : i + 1
      } else {
        // Desktop: по кругу с учетом количества карточек
        const maxIndex = Math.max(0, instructors.length - cardsPerView)
        return i >= maxIndex ? 0 : i + 1
      }
    })
  }, [cardsPerView])

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-6 text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Наши ведущие кружков"}
        </h2>
        <p className="mx-auto mb-16 max-w-4xl text-center text-base text-gray-600 md:text-lg">
          {"Имеют многолетний педагогический опыт и повышенную квалификацию на базе государственного образовательно-реабилитационного центра"}
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl md:-left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl md:-right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden touch-pan-x">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {instructors.map((instructor) => (
                <div
                  key={instructor.name}
                  className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <div className="rounded-2xl bg-gray-50 p-8 text-center">
                    {/* Photo */}
                    <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full">
                      <Image
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>

                    {/* Competency Icons */}
                    <div className="mb-4 flex justify-center gap-2">
                      {instructor.icons.map((icon) => (
                        <span key={icon} className="text-2xl" role="img" aria-hidden="true">
                          {icon}
                        </span>
                      ))}
                    </div>

                    {/* Name */}
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {instructor.name}
                    </h3>

                    {/* Education */}
                    <div className="mb-4 flex items-start justify-center gap-2 text-sm text-gray-600">
                      <GraduationCap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>
                        {"Высшее педагогическое образование, стаж "}
                        {instructor.experience}
                      </span>
                    </div>

                    {/* Expertise */}
                    <p className="mb-3 text-left text-base font-semibold text-gray-900 md:text-center">
                      {instructor.expertise}
                    </p>

                    {/* Clubs */}
                    <div className="text-left text-sm text-gray-600">
                      <p className="mb-1 font-medium">{"Ведёт кружки:"}</p>
                      <ul className="list-none pl-0">
                        {instructor.clubs.map((club) => (
                          <li key={club} className="text-left">{"- " + club}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {instructors.map((instructor, i) => (
              <button
                type="button"
                key={instructor.name}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === currentIndex
                  ? "w-8 bg-blue-500"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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
