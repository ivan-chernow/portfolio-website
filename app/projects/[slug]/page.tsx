import { projectsData } from "@/lib/data";
import Image from "next/image";
import ProjectScreenshot from "@/components/ProjectScreenshot";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  const longScreenshot =
    project.title === "Lawyer"
      ? "/lawyer/lawyer-desktop.webp"
      : project.title === "Windows Haus"
      ? "/windows-haus/okna-haus.webp"
      : project.title === ("ZaraHome" as unknown as typeof project.title)
      ? "/zarahome/zarahome-desktop.webp"
      : null;

  return (
    <main className="flex flex-col items-center px-4">
      <div className="max-w-[50rem] w-full">
        <Link
          href="/#projects"
          className="mb-8 inline-block text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          ← Назад
        </Link>

        <h1 className="text-3xl font-bold mb-10 text-center">
          {project.title}
        </h1>

        {/* Описание проекта */}
        <div className="max-w-none">
          <p className="text-base sm:text-lg mb-6 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>

        {/* Медиа: видео-демо */}
        {project.demoVideo && (
          <div className="w-full max-w-[900px] h-[220px] sm:h-[360px] md:h-[506px] mb-8 rounded-lg border overflow-hidden bg-black">
            <video
              src={project.demoVideo as string}
              poster={(project as any).demoPoster || (project as any).gallery?.[0]}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              muted
            />
          </div>
        )}
        {/* Убрали один лишний одиночный скрин вне галереи */}

        <div className="max-w-none">
          <h2 className="text-xl font-semibold mb-4">Технологии</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Мини-галерея, если есть */}
          {Array.isArray((project as any).gallery) && (project as any).gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Галерея</h2>
              {project.title === "ZaraHome" && (project as any).gallery.length >= 4 ? (
                <div className="grid grid-cols-1 gap-4">
                  {(project as any).gallery.slice(0, 4).map((src: string, idx: number) => (
                    <Image
                      key={idx}
                      src={src}
                      alt={`Скриншот ${idx + 1}`}
                      width={1200}
                      height={800}
                      sizes="100vw"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {(project as any).gallery.map((src: string, idx: number) => (
                    <Image
                      key={idx}
                      src={src}
                      alt={`Скриншот ${idx + 1}`}
                      width={900}
                      height={600}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto rounded-lg border object-cover"
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Разделы описания для ZaraHome */}
          {project.title === "ZaraHome" && (
            <section className="space-y-10 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3">Технологический стек</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Frontend</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>React, Next.js (App Router), TypeScript</li>
                      <li>Redux Toolkit + RTK Query (кэш, рефреш токены)</li>
                      <li>TailwindCSS, Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Server</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>NestJS, TypeScript, Passport-JWT</li>
                      <li>class-validator, Joi (валидация env)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Database</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>PostgreSQL, TypeORM</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Resend (SMTP/REST), Handlebars-шаблоны</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Infra/Tools</h3>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>ESLint, Prettier, Docker-ready окружения</li>
                      <li>.env с Joi-валидацией</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Детали проекта</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Моно-репозиторий: client (Next.js) + server (NestJS)</li>
                  <li>Чистая архитектура клиента: app / entities / features / processes / shared / widgets</li>
                  <li>Модульный бэкенд: auth, users, products, cart, orders, favorites, promocodes, email</li>
                  <li>Единая конфигурация окружения: Joi, CORS, JWT, e-mail, rate limit, upload</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Frontend Development</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Состояние и API: RTK/RTK Query, кэширование и рефреш токенов</li>
                  <li>SSR/CSR совместимость: безопасная работа с localStorage, проверки typeof window</li>
                  <li>Оптимизация ререндеров: React.memo, useMemo, useCallback, виртуализация списков</li>
                  <li>Оптимизация изображений: next/image, динамические sizes, lazy loading</li>
                  <li>Архитектурные принципы: DRY, ранние return, явные типы и интерфейсы</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">UI/UX Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Навигация: адаптивный хедер, меню категорий, поиск</li>
                  <li>Списки и карточки: виртуализированные каталоги, карточки товара, скелетоны</li>
                  <li>Интерактивность: анимации (Framer Motion), пагинация, сортировка, фильтры</li>
                  <li>Доступность: aria-*, tabIndex, корректные роли и фокусы</li>
                  <li>Уведомления: тосты, лоадеры, прогресс-навигация</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Ключевые компоненты</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Каталог и карточки товара: просмотр, добавление в корзину/избранное</li>
                  <li>Корзина и заказ: изменение количества, промокоды, оформление</li>
                  <li>Профиль: данные пользователя, адреса, смена пароля/e‑mail</li>
                  <li>Админ-панель: управление товарами/промокодами</li>
                  <li>Модальные окна и формы: вход, подтверждения, авторизация/регистрация/восстановление</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Backend Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>JWT: access/refresh, refresh в cookie, @Roles + RolesGuard</li>
                  <li>Доменные модули: продукты, корзина, избранное, заказы, промокоды</li>
                  <li>Email-сервис: Resend, шаблоны Handlebars</li>
                  <li>Файлы: загрузка изображений, UPLOAD_PATH, MAX_FILE_SIZE</li>
                  <li>Кэш и rate limit: настраиваемые TTL и лимиты</li>
                  <li>Валидация DTO: class-validator, глобальные пайпы</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Security & Config</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Joi-валидация env: обязательный JWT_SECRET (min 24)</li>
                  <li>CORS: список доменов, credentials</li>
                  <li>JWT-слой: JwtStrategy, JwtAuthGuard, рефреш-токены в БД</li>
                  <li>Продакшен-настройки: secure-cookies, отключаемые логи БД</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Performance</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Клиент: мемоизация, виртуализация, next/image, ленивые секции</li>
                  <li>Сервер: кэширование, индексируемые поля БД, лимиты запросов</li>
                  <li>Медиа: сжатие изображений (рекомендация)</li>
                </ul>
              </div>
            </section>
          )}

          {/* Функционал проекта */}
          {(() => {
            const features: Record<string, string[]> = {
              Lawyer: [
                "Навигация: адаптивный хедер, якорная прокрутка",
                "Секции услуг и карточки с CTA",
                "Формы: обратная связь/заявка, валидация, тост-уведомления",
                "Модальные окна: вход/подтверждения",
                "Анимации: плавные появления блоков (Framer Motion)",
              ],
              "Windows Haus": [
                "Каталог/галерея работ с фильтрами",
                "Форма заявки на замер: валидация, отправка",
                "Интеграция карт (точки/маршруты)",
                "Отзывы и рейтинг",
                "Модальные окна и слайдеры",
              ],
              ZaraHome: [
                "Каталог с пагинацией/сортировкой/фильтрами",
                "Корзина и избранное, промокоды",
                "Оформление заказа: доставка/контакты, валидация",
                "Профиль: адреса, смена пароля/e‑mail",
                "Админ-модули: товары и промокоды",
              ],
            };
            const list = features[project.title] || [];
            if (list.length === 0) return null;
            return (
              <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Функционал</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            );
          })()}
        </div>
      </div>
    </main>
  );
}
