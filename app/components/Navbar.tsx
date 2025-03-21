import { NavLink, useNavigate } from "react-router-dom"; // Импорт NavLink для навигации и useNavigate для программного перенаправления
import ThemeSwitcher from "./ThemeSwitcher"; // Импорт компонента переключения темы
import { isAuthenticated, logout } from "../services/auth"; // Импорт функций аутентификации и выхода из системы


export default function Navbar() {
    const navigate = useNavigate(); // Хук для программной навигации
    
    function handleLogout() {
        logout(); // Вызываем функцию выхода
        navigate("/"); // Перенаправляем пользователя на главную страницу
    }

    return (
        <div>
            <nav className="navbar"> 
                <ul>
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                    <li><NavLink to="/docs">Документы</NavLink></li>   
                    <li><NavLink to="/contacts">Контакты</NavLink></li>   
                    <li><NavLink to="/vacancies">Вакансии</NavLink></li>

                    {/* Если пользователь авторизован, показываем кнопку выхода, иначе ссылку на вход */}
                    {isAuthenticated() ? (
                        <button style={{ color: "white" }} onClick={handleLogout}>Выйти</button>
                    ) : (
                        <li><NavLink to="/login">Войти</NavLink></li>
                    )}

                    <li>!</li> 
                </ul>            
            </nav>
            <ThemeSwitcher /> {/* Подключаем компонент переключателя темы */}
        </div>
    );
}
