import type { Route } from "./+types/home";
import React from "react";
import { checkAuth, isAuthenticated } from "../services/auth";
import { Navigate } from "react-router-dom";

interface UserDate {
    name: string,
    role: string,
    message: string
}

interface LoderData {
    user: UserDate
} 


export default function PrivatePage(){    
    //checkAuth()
    // const data = "какая-то функция загрузчика"
    if (!isAuthenticated()){
        return <Navigate to="/" replace />
    }
    return (
        <section className="p-4">
            <h1 className="text-2xl font-bold mb-4">Приватная информация</h1>
            <p>Информация только для зарегистрированных пользователей</p>
        </section>
    )
}