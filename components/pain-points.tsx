import Image from "next/image"

const cards = [
  {
    image: "/images/pain-phone.jpg",
    text: "Ребёнок часами сидит в TikTok, YouTube или играх",
    gradient: "from-purple-100/60 to-purple-50/40",
    size: "md:col-span-2 md:row-span-2",
    rounded: "rounded-3xl",
    rotate: "md:rotate-1",
    imgHeight: "h-48 md:h-64",
  },
  {
    image: "/images/pain-confused.jpg",
    text: 'На вопрос "чем хочешь заняться?" отвечает "не знаю"',
    gradient: "from-amber-50/60 to-orange-50/40",
    size: "md:col-span-1",
    rounded: "rounded-2xl",
    rotate: "",
    imgHeight: "h-36 md:h-40",
  },
  {
    image: "/images/pain-quit.jpg",
    text: "Записывали на кружки — бросал через месяц-два",
    gradient: "from-blue-50/60 to-blue-100/40",
    size: "md:col-span-2",
    rounded: "rounded-3xl",
    rotate: "md:-rotate-1",
    imgHeight: "h-40 md:h-52",
  },
  {
    image: "/images/pain-lonely.jpg",
    text: "Мало общается со сверстниками, замкнут дома",
    gradient: "from-pink-50/60 to-pink-100/40",
    size: "md:col-span-1",
    rounded: "rounded-2xl",
    rotate: "",
    imgHeight: "h-36 md:h-40",
  },
  {
    image: "/images/pain-parent.jpg",
    text: "Вы хотите помочь найти увлечение, но не знаете как",
    gradient: "from-gray-100/60 to-gray-50/40",
    size: "md:col-span-1",
    rounded: "rounded-3xl",
    rotate: "md:rotate-2",
    imgHeight: "h-36 md:h-40",
  },
]

export function PainPoints() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {"Знакомая ситуация?"}
        </h2>

        {/* Desktop - Grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.text}
              className={`group overflow-hidden border border-gray-200 bg-gradient-to-br ${card.gradient} ${card.size} ${card.rounded} ${card.rotate} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`relative ${card.imgHeight} w-full overflow-hidden`}>
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-base font-semibold text-gray-800 md:text-lg">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel with dots */}
        <div className="mt-12 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {cards.map((card) => (
              <div
                key={card.text}
                className={`w-80 flex-shrink-0 snap-center overflow-hidden border border-gray-200 bg-gradient-to-br ${card.gradient} rounded-2xl`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>
                <div className="p-5">
                  <p className="text-base font-semibold text-gray-800">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {cards.map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>
        </div>


        <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-blue-600 font-semibold">
          {"Мы решаем эту проблему через онлайн-кружки, где дети пробуют разные направления и находят своё"}
        </p>

        {/* Scroll CTA */}
        <div className="mt-8 text-center">
          
          <a 
            href="#before-after"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {"Узнать, почему важно начать сейчас"}
            <span className="text-2xl"></span>
          </a>
        </div>

      </div>
    </section>
  )
}
