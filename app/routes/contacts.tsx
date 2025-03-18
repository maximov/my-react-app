import type { Route } from "./+types/home";

 


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "description", content: "Важные Контакты" },
  ];
}

export default function Home() {
  return <h1>Контакты</h1>;
}
