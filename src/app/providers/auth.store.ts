import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import {AuthApi} from "../../shared/api/auth.api.ts";

interface JwtPayload {
    id: number;
    phone: string;
    name: string;
    isAdmin: boolean;
    exp: number;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        phone: '' as string,
        name: '' as string,
        isAdmin: false as boolean,
        isCodeSent: false,
        isLoading: false,
        error: '',
    }),

    actions: {
        async requestCode(phone: string) {
            this.isLoading = true;
            this.error = '';
            try {
                const { data } = await AuthApi.requestCode(phone);
                this.phone = phone;
                this.isCodeSent = true;
            } catch (e) {
                this.error = 'Не удалось отправить код';
            } finally {
                this.isLoading = false;
            }
        },

        async verifyCode(code: string) {
            this.isLoading = true;
            this.error = '';
            try {
                const res = await AuthApi.verifyCode(this.phone, code);
                const token = res.data.access_token;
                localStorage.setItem('token', token);
                this.setFromToken(token);
            } catch (e) {
                this.error = 'Неверный код';
            } finally {
                this.isLoading = false;
            }
        },

        setFromToken(token: string) {
            try {
                const decoded = jwtDecode<JwtPayload>(token);
                this.phone = decoded.phone;
                this.name = decoded.name;
                this.isAdmin = decoded.isAdmin;
            } catch (e) {
                console.warn('Ошибка при чтении токена:', e);
            }
        },

        initFromStorage() {
            const token = localStorage.getItem('token');
            if (token) {
                this.setFromToken(token);
            }
        },

        logout() {
            this.phone = '';
            this.name = '';
            this.isAdmin = false;
            this.isCodeSent = false;
            this.error = '';
            localStorage.removeItem('token');
        }
    }
});
