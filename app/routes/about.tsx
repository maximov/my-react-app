import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "О нас" },
    { name: "description", content: "Информация о нас" },
  ];
}

export default function Home() {
  return <h1>О нас</h1>;
}
