import { redirect } from "react-router-dom";

export async function checkAuth() {
    try {
        if (await !isAuthenticated()){
            throw redirect("/");
        }
    
        //Проверку уровень доступа
    
        return {
            user: {
                status: "Авторизирован",
                message: "Доступ разрешен, потому что ты единственный зарегистрированный пользователь",
            }
        };
    } catch {
        console.log("Ошибка проверки аутентификации");
        return false;
    }
    
}

export function isAuthenticated(): boolean {
    if (typeof window !== "undefined")
        console.log(!!localStorage.getItem("token"))
    return typeof window !== "undefined" && !!localStorage.getItem("token");
}

export function login() {
    localStorage.setItem("token", "mytoken");
}

export function logout() {
    localStorage.removeItem("token");
}