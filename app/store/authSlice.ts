import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 


interface AuthState {
    isAuth: boolean; // Флаг авторизации пользователя
    token?: string;  // Токен аутентификации
}

const initialState: AuthState = {
    isAuth: false, // По умолчанию пользователь не авторизован
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        /**
         * Экшен для входа в систему
         * @param state - текущее состояние
         * @param action - объект с переданным токеном
         */
        login(state, action: PayloadAction<string>) {
            state.isAuth = true; // Устанавливаем флаг авторизации
            state.token = action.payload; // Сохраняем токен
        },

        /**
         * Экшен для выхода из системы
         * @param state - текущее состояние
         */
        logout(state) {
            state.isAuth = false; // Сбрасываем флаг авторизации
            state.token = undefined; // Удаляем токен
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;