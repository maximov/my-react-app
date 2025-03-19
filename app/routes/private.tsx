import type { Route } from "./+types/home";
import React from "react";
import { checkAuth, isAuthenticated } from "../services/auth";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "~/store/hook";


interface UserDate {
    name: string,
    role: string,
    message: string
}

interface LoderData {
    user: UserDate
} 


export default function PrivatePage(){
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    //checkAuth()
    // const data = "какая-то функция загрузчика"

    //if (!isAuthenticated()){
    if (!isAuth){
        return <Navigate to="/" replace />
    }
    return (
        <section className="p-4">
            <h1 className="text-2xl font-bold mb-4">Приватная информация</h1>
            <p>Информация только для зарегистрированных пользователей</p>
        </section>
    )
}