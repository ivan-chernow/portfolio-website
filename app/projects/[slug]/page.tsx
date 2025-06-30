import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    notFound();
  }

  
  const longScreenshot =
    project.title === "Lawyer"
      ? "/lawyer.png"
      : project.title === "Windows Haus"
      ? "/haus.png"
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

        <h1 className="text-3xl font-bold mb-10 text-center">{project.title}</h1>

        {longScreenshot && (
          <>
            <div className="w-full h-[600px] overflow-y-auto rounded-lg border mb-8 bg-white flex justify-center items-start">
              <Image
                src={longScreenshot}
                alt="Скриншот сайта"
                width={1000}
                height={2000}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  maxWidth: "100%",
                  display: "block"
                }}
                className="mx-auto"
              />
            </div>
          </>
        )}

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">{project.description}</p>

          <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
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

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Детали проекта</h2>
            <div className="space-y-6">
              {project.title === "Lawyer" && (
                <>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Frontend Development</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>HTML5, CSS3, React для создания современного интерфейса</li>
                      <li>Адаптивная верстка с Flexbox и Grid</li>
                      <li>Кроссбраузерная поддержка</li>
                      <li>Анимации и плавные переходы</li>
                      <li>Модульная структура кода</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">UI/UX Features</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Верхнее меню навигации</li>
                      <li>Секции с услугами</li>
                      <li>Команда специалистов</li>
                      <li>Отзывы клиентов</li>
                      <li>Контактная информация</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Ключевые компоненты</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Карточки услуг</li>
                      <li>Профили сотрудников</li>
                      <li>Модальные окна</li>
                      <li>Формы обратной связи</li>
                    </ul>
                  </div>
                </>
              )}

              {project.title === "Windows Haus" && (
                <>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Архитектура</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nuxt.js 3 (Vue.js 3)</li>
                      <li>Модульная компонентная архитектура</li>
                      <li>Четкая организация кодовой базы</li>
                      <li>TypeScript для типобезопасности</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Основные функции</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Система форм для заявок</li>
                      <li>Динамическая галерея портфолио</li>
                      <li>Интеграция с Яндекс.Картами</li>
                      <li>Система отзывов</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">UI компоненты</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Интерактивные модальные окна</li>
                      <li>Компоненты выбора услуг</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Техническая реализация</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Composition API Vue.js</li>
                      <li>Управление состоянием</li>
                      <li>Переиспользуемые компоненты</li>
                      <li>Интеграция сторонних сервисов</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 