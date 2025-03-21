import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
    // Состояние для хранения текущей темы (по умолчанию определяется из localStorage)
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme") === "dark"; 
        }
        return false; 
    });

    // Эффект, который обновляет класс `dark` у `documentElement` при изменении темы
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark"); // Добавляем класс `dark` для темной темы
            localStorage.setItem("theme", "dark"); // Сохраняем выбор пользователя в localStorage
        } else {                
            document.documentElement.classList.remove("dark"); // Удаляем класс `dark` для светлой темы
            localStorage.setItem("theme", "light"); // Сохраняем светлую тему в localStorage
        }
    }, [isDark]); // Запускаем эффект при изменении `isDark`

    return (
        <button 
            onClick={() => setIsDark(!isDark)} // Инвертируем тему при клике
            className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-amber-300 
            rounded hover:bg-gray-300 dark:hover:bg-gray-600 
            transition-colors dark:animation-pulse">
            {isDark ? "Светлая тема" : "Темная тема"} 
        </button>
    );
}