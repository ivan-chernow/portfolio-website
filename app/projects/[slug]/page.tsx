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
              <div className="grid sm:grid-cols-2 gap-4">
                {(project as any).gallery.map((src: string, idx: number) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Скриншот ${idx + 1}`}
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-lg border object-cover"
                  />
                ))}
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
