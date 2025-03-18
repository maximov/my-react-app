import type { Route } from "./+types/home";
import { useLoaderData } from "react-router-dom";
import "../styles/about.css"

type AboutData = {
  title: string;
  description: string;
  team: {name: string; role: string}[];
}

export function loader(): AboutData {
  return {
    title: "О нас",
    description: "Информация о нас",
    team: [
      {name: "Ксения", role: "Frontend"},
      {name: "Андрей", role: "Инженер"},
      {name: "Артем", role: "Инженер"},
      {name: "Вячеслав", role: "Инженер 1 категории"},
      {name: "Виктор", role: "Системный архитектор"},
      {name: "Леонид", role: "FullStack"},
      {name: "Анастасия", role: "Преподаватель"},
      {name: "Егор", role: "FullStack"},
    ]
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О нас" },
    { name: "description", content: "Информация о нас" },
  ];
}

export default function About() {
  const data = useLoaderData() as AboutData;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Здесь заголовок */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {data.title}
        </h1>
      </div>
      
      <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
        {data.description}
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Наша команда
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {data.team.map((member, index) => (
          <li style={{ animationDelay: `${index * 0.2}s` }} key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in">
            <strong className="text-lg font-medium text-gray-900 dark:text-white">
              {member.name}
            </strong>
            <span className="text-gray-700 dark:dark:text-gray-300">
              {member.role}
            </span>            
          </li>
        ))}
      </ul>

    </section>
  )
}

