import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/40 to-pink-50/60">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur md:p-10">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Политика конфиденциальности онлайн-кружков МИНГО
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Дата обновления: 09.02.2026
          </p>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            Настоящая Политика конфиденциальности (далее – Политика) описывает,
            как онлайн-проект МИНГО (далее – «МИНГО», «мы», «нас») обрабатывает
            персональные данные пользователей сайта и онлайн-кружков для детей и
            подростков.
          </p>

          <div className="mt-10 space-y-8">
            {/* Сбор данных */}
            <section id="collection">
              <h2 className="text-xl font-semibold text-gray-900">
                1. Сбор и категории персональных данных
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Мы собираем и обрабатываем только те данные, которые необходимы
                для предоставления наших онлайн-услуг и улучшения качества
                обучения.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Данные родителя (законного представителя):</span>{" "}
                  ФИО, контактный телефон, адрес электронной почты, мессенджеры
                  для связи.
                </li>
                <li>
                  <span className="font-medium">Данные ребёнка:</span> имя, возраст,
                  интересы и предпочтения по кружкам.
                </li>
                <li>
                  <span className="font-medium">Платёжные данные:</span> информация
                  о факте оплаты, частично обезличенные реквизиты платёжных
                  средств (обработка происходит через платёжных партнёров).
                </li>
                <li>
                  <span className="font-medium">Технические данные:</span> IP-адрес,
                  данные о браузере и устройстве, информация о взаимодействии с
                  сайтом (cookies и аналогичные технологии).
                </li>
              </ul>
            </section>

            {/* Использование */}
            <section id="usage">
              <h2 className="text-xl font-semibold text-gray-900">
                2. Цели использования персональных данных
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Заключение и исполнение договора на оказание онлайн-услуг.</li>
                <li>Организация онлайн-занятий, отправка ссылок и напоминаний.</li>
                <li>Обратная связь с родителями по результатам занятий.</li>
                <li>Обработка платежей и оформление подписки на кружки.</li>
                <li>Улучшение сервиса, аналитика и развитие образовательных программ.</li>
                <li>
                  Рассылка информационных и сервисных сообщений (вы можете
                  отказаться от маркетинговых рассылок в любое время).
                </li>
              </ul>
            </section>

            {/* Защита */}
            <section id="security">
              <h2 className="text-xl font-semibold text-gray-900">
                3. Защита и хранение данных
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Мы предпринимаем организационные и технические меры для защиты
                персональных данных от несанкционированного доступа, изменения,
                разглашения или уничтожения.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Используем защищённые соединения (HTTPS) и современные средства защиты.</li>
                <li>Ограничиваем доступ к персональным данным только тем сотрудникам, кому это необходимо для работы.</li>
                <li>Храним данные в течение срока действия договора и разумного периода после завершения обучения, если иное не требуется законодательством.</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies">
              <h2 className="text-xl font-semibold text-gray-900">
                4. Cookies и аналогичные технологии
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Мы используем cookies-файлы и подобные технологии для обеспечения
                корректной работы сайта, сохранения настроек и анализа
                использования сервиса.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Технические cookies – необходимы для работы сайта и личного кабинета.</li>
                <li>Аналитические cookies – помогают понимать, как пользователи пользуются сервисом, чтобы делать его удобнее.</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Вы можете изменить настройки использования cookies в браузере. Учтите,
                что отключение некоторых файлов может повлиять на работу сайта.
              </p>
            </section>

            {/* Права пользователей */}
            <section id="rights">
              <h2 className="text-xl font-semibold text-gray-900">
                5. Права пользователей
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Как субъект персональных данных, вы имеете право:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Получать информацию о том, какие данные мы обрабатываем и в каких целях.</li>
                <li>Требовать уточнения, обновления или исправления ваших данных.</li>
                <li>Запрашивать ограничение обработки или удаление данных, если это допускается законом.</li>
                <li>Отозвать согласие на обработку данных, когда обработка основана на согласии.</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Для реализации своих прав вы можете связаться с нами по контактам,
                указанным в разделе «Контакты» на сайте.
              </p>
            </section>

            {/* Заключительные положения */}
            <section id="changes">
              <h2 className="text-xl font-semibold text-gray-900">
                6. Изменения Политики
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Мы можем периодически обновлять настоящую Политику. Актуальная
                версия всегда доступна на этой странице. При существенных
                изменениях мы можем дополнительно уведомлять пользователей через
                сайт или по электронной почте.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

