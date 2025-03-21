import { redirect } from "react-router-dom";


export async function checkAuth() {
    try {
        if (!(await isAuthenticated())) {
            throw redirect("/"); 
        }

        // TODO: Проверка уровня доступа может быть добавлена здесь

        return {
            user: {
                status: "Авторизован",
                message: "Доступ разрешен, потому что ты единственный зарегистрированный пользователь",
            },
        };
    } catch (error) {
        console.error("Ошибка проверки аутентификации:", error);
        return false;
    }
}


export function isAuthenticated(): boolean {
    if (typeof window !== "undefined") {
        console.log(!!localStorage.getItem("token")); // Логирование статуса авторизации
    }
    return typeof window !== "undefined" && !!localStorage.getItem("token");
}

export function login() {
    localStorage.setItem("token", "mytoken");
}

export function logout() {
    localStorage.removeItem("token"); 
}