import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice"; // Redux-экшен логина
import { useAppDispatch, useAppSelector } from "../store/hook"; // Кастомные хуки

/**
 * Компонент страницы авторизации
 */
export default function LoginPage() {
  const dispatch = useAppDispatch(); // Получаем функцию dispatch из Redux
  const isAuth = useAppSelector((state) => state.auth.isAuth); // Получаем статус авторизации

  // Локальное состояние для логина, пароля и ошибок
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // Навигация между страницами

  /**
   * Обработчик отправки формы
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Простая валидация
    if (!username.trim() || !password.trim()) {
      setError("Логин и пароль не могут быть пустыми.");
      return;
    }

    // Примитивная авторизация
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "mytoken"); // Сохраняем "токен"
      dispatch(login("mytoken")); // Обновляем Redux-состояние
      navigate("/private"); // Перенаправляем на защищённую страницу
    } else {
      setError("Неправильный логин или пароль."); // Показываем ошибку
    }
  }

  return (
    <div>
      <h1>Авторизация</h1>

      {/* Отображение ошибки, если есть */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          <span>Логин</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <span>Пароль</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
