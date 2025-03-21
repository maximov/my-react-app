import type { Route } from "./+types/home"; 
import { useLoaderData } from "react-router-dom"; // Хук для получения загруженных данных
import "../styles/about.css"; 


import Ksenia from "../assets/1.jpg";
import Andrey from "../assets/2.jpg";
import Artem from "../assets/3.jpg";
import Vyacheslav from "../assets/4.jpg";
import Viktor from "../assets/5.jpg";
import Leonid from "../assets/6.jpg";
import Anastasiya from "../assets/7.jpg";
import Egor from "../assets/8.jpg";

// Описание типа данных для страницы "О нас"
type AboutData = {
  title: string;
  description: string; 
  team: { name: string; role: string; image: string }[]; 
  reviewers: { name: string; feedback: string; image: string }[]; 
};


export function loader(): AboutData {
  return {
    title: "О нас",
    description: "Информация о нас",
    team: [
      { name: "Ксения", role: "Frontend", image: Ksenia },
      { name: "Андрей", role: "Инженер", image: Andrey },
      { name: "Артем", role: "Инженер", image: Artem },
      { name: "Вячеслав", role: "Инженер 1 категории", image: Vyacheslav },
      { name: "Виктор", role: "Системный архитектор", image: Viktor },
      { name: "Леонид", role: "FullStack", image: Leonid },
      { name: "Анастасия", role: "Преподаватель", image: Anastasiya },
      { name: "Егор", role: "FullStack", image: Egor },
    ],
    reviewers: [
      { name: "Ксения2", feedback: "Отзыв 1", image: Ksenia },
      { name: "Андрей2", feedback: "Отзыв 2", image: Andrey },
      { name: "Артем2", feedback: "Отзыв 3", image: Artem },
      { name: "Вячеслав2", feedback: "Отзыв 4", image: Vyacheslav },
      { name: "Виктор2", feedback: "Отзыв 5", image: Viktor },
      { name: "Леонид2", feedback: "Отзыв 6", image: Leonid },
      { name: "Анастасия2", feedback: "Отзыв 7", image: Anastasiya },
      { name: "Егор2", feedback: "Отзыв 8", image: Egor },
    ],
  };
}

// Мета-информация для SEO и описания страницы
export function meta({}: Route.MetaArgs) {
  return [
    { title: "О нас" },
    { name: "description", content: "Информация о нас" },
  ];
}

// Компонент страницы "О нас"
export default function About() {
  const data = useLoaderData() as AboutData; // Получение данных о команде и отзывах

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">

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
          <li
            style={{ animationDelay: `${index * 0.2}s` }} 
            key={index} 
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in"
          >
          
            <img
              src={`${member.image}`}
              className="w-24 h-24 rounded-full mb-4 object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
              alt={member.name}
            />
          
            <strong className="text-lg font-medium text-gray-900 dark:text-white">
              {member.name}
            </strong>
            <span className="text-gray-700 dark:text-gray-300">
              {member.role}
            </span>
          </li>
        ))}
      </ul>

      
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Отзывы
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {data.reviewers.map((member, index) => (
          <li
            style={{ animationDelay: `${index * 0.2}s` }} 
            key={index} 
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in"
          >
  
            <img
              src={`${member.image}`}
              className="w-24 h-24 rounded-full mb-4 object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
              alt={member.name}
            />
          
            <strong className="text-lg font-medium text-gray-900 dark:text-white">
              {member.name}
            </strong>
            <span className="text-gray-700 dark:text-gray-300">
              {member.feedback}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}