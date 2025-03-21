import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice"; // Импорт экшена login из Redux
import { useAppDispatch, useAppSelector } from "../store/hook"; // Кастомные хуки для работы с Redux


export default function LoginPage() {
    const dispatch = useAppDispatch(); // Диспатч Redux-экшенов
    const isAuth = useAppSelector((state) => state.auth.isAuth); // Получение статуса аутентификации

    // Локальное состояние для хранения логина и пароля
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // Состояние для отображения ошибки

    const navigate = useNavigate(); 

 
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (!username.trim() || !password.trim()) {
            setError("Логин и пароль не могут быть пустыми.");
            return;
        }

        if (username === "admin" && password === "admin") {
            localStorage.setItem("token", "mytoken"); 
            dispatch(login("mytoken"));
            navigate("/private");
        } else {
            setError("Неправильный логин или пароль"); 
        }
    }

    return (
        <div>
            <h1>Авторизация</h1>

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
                <label>
                    <span>Пароль</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}
