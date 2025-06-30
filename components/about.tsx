"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("Обо мне");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="Обо мне"
		>
			<SectionHeading>Обо мне</SectionHeading>
			<p className="mb-6">
				 Специализируюсь на создании современных, адаптивных и удобных веб-приложений с акцентом на производительность, UX и чистоту кода. В своей работе использую современные технологии, такие как <b>React</b>, <b>Vue</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>Tailwind CSS</b> и другие популярные библиотеки для построения сложных интерфейсов, а также серверной логики.
			</p>
			<div className="mb-6 text-left mx-auto max-w-xl">
				<div className="font-semibold mb-2 text-center">Что я умею:</div>
				<ul className="list-disc pl-6 space-y-1 text-base">
					<li>Разработка лендингов, корпоративных сайтов и SPA с профессиональным дизайном</li>
					<li>Интерактивные формы, калькуляторы, галереи, отзывы etc.</li>
					<li>Адаптивная и кроссбраузерная верстка</li>
					<li>Интеграция с внешними сервисами (EmailJS, Яндекс.Карты, REST API и др.)</li>
					<li>Оптимизация загрузки, SEO и безопасность</li>
					<li>Разработка серверной логики на Node.js, Express, Nest.js</li>
					<li>Работа с современными state-менеджерами (Zustand, Pinia, Redux)</li>
					<li>Работа с базами данных (MongoDB, PostgreSQL, Prisma, TypeORM)</li>
				</ul>
			</div>
			<p className="mb-3">
				Я постоянно совершенствуюсь, изучаю новые подходы и инструменты, чтобы делать проекты ещё лучше. Открыт к интересным задачам и сотрудничеству!
			</p>
		</motion.section>
	);
}
