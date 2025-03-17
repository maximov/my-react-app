import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>                
            </ul>
        </nav>
    )
}

export default Navbar;