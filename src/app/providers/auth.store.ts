import { defineStore } from 'pinia';
import {AuthApi} from "../../shared/api/auth.api";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        phone: '',
        isCodeSent: false,
        isLoading: false,
        error: '',
    }),

    actions: {
        async requestCode(phone: string) {
            this.isLoading = true;
            this.error = '';
            try {
                await AuthApi.requestCode(phone);
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
            } catch (e) {
                this.error = 'Неверный код';
            } finally {
                this.isLoading = false;
            }
        }
    }
});
