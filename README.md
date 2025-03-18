# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

### TailwindCSS Cheat Sheet:

- от Nerf: 
https://nerdcave.com/tailwind-cheat-sheet

    Удобный список всех классов с фильтрацией по категориям (например, padding, margin, background).
Пример: Ищешь rounded — находишь все варианты (rounded-sm, rounded-md, rounded-lg и т.д.).

- от Tailwind Toolbox: https://tailwindtoolbox.com/cheatsheet

    Простая таблица с классами и их описанием.

### Интерактивные инструменты:

Есть сайты, где ты можешь экспериментировать с классами TailwindCSS и сразу видеть результат:

- Tailwind Play: https://play.tailwindcss.com/
Официальная онлайн-песочница от TailwindCSS. Ты можешь писать HTML с классами Tailwind и сразу видеть, как они работают.

- TailwindCSS Visual Editor: https://tailwind.run/
    Позволяет визуально экспериментировать с классами.

### Расширения для редакторов кода

Установи расширение в VS Code: TailwindCSS IntelliSense.
После установки, когда ты начинаешь писать класс (например, p-), расширение будет предлагать автодополнение (p-1, p-2, p-3 и т.д.) с описанием.
Также показывает цвета (bg-gray-200) прямо в редакторе в виде цветного индикатора.

---

Built with ❤️ using React Router.
