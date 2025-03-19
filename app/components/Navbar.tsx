import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                    <li><NavLink to="/docs">Документы</NavLink></li>   
                    <li><NavLink to="/contacts">Контакты</NavLink></li>   
                    <li><NavLink to="/vacancies">Вакансии</NavLink></li>
                    <li><NavLink to="/login">Войти</NavLink></li>         
                </ul>            
            </nav>
            <ThemeSwitcher />
        </div>
    )
}

export default Navbar;