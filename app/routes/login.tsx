import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (username === "admin" && password === "admin"){
            login();
            navigate("/private");
        } else {
            alert("Неправильный логин или пароль");
        }
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Логин</span>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        >                        
                    </input>
                </label>
                <label>
                    <span>Пароль</span>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        >                        
                    </input>
                </label>
                <button type="submit">
                    Войти
                </button>
            </form>
        </div>
    )
}