// Импорт компонентов и хуков маршрутизации из react-router-dom
import {
  BrowserRouter,
  isRouteErrorResponse,
  Links,
  Meta,
  Navigate,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRoutes,
} from "react-router-dom";

import type { Route } from "./+types/root";
import "./app.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/theme.css";

import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import routes from "./routes"; 
import { isAuthenticated } from "./services/auth"; 
import { Provider } from "react-redux"; 
import { store } from "./store/store";

// Ссылки, добавляемые в <head> (шрифты и т.п.)
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Пути, доступные без авторизации
const publicPath = [
  "/",
  "/about",
  "/docs",
  "/contacts",
  "/vacancies",
  "/home",
];

// Компонент маршрутов, отрисовывающий маршруты с помощью useRoutes
function RootRoutes() {
  const element = useRoutes(routes as any); // `routes` — массив маршрутов
  return <Layout>{element}</Layout>; // Оборачиваем в макет
}

// Корневой компонент приложения
export function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </Provider>
  );
}

// Макет приложения: обертка над контентом страниц
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links /> 
      </head>
      <body>
        <Navbar />
        {children} 
        <ScrollRestoration /> 
        <Scripts /> 
      </body>
    </html>
  );
}

// Компонент Outlet нужен для вложенных маршрутов
export default function App() {
  return <Outlet />;
}

// Обработка ошибок маршрутов
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
