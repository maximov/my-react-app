import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { isAuthenticated, logout } from "../services/auth";



export default function Navbar(){
    const navigate = useNavigate();


    function handleLogout(){
        logout();
        navigate("/");
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
                    {isAuthenticated() ? (
                        <button style={{ color: "white" }} onClick={handleLogout}>Выйти</button>
                    ) : (
                        <li><NavLink to="/login">Войти</NavLink></li>
                    )}
                    <li>!</li>
                             
                </ul>            
            </nav>
            <ThemeSwitcher />
        </div>
    );
}