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
      
      <p>{data.description}</p>
      <h2>Наша команда</h2>
      <ul>
        {data.team.map((member) => (
          <li><strong>{member.name}</strong> - {member.role}</li>
        ))}
      </ul>

    </section>
  )
}

