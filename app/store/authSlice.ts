import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    token?: string;
}

const initialState: AuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.token = action.payload;
        },
        logout(state) {
            state.isAuth = false;
            state.token = undefined;
        },
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;