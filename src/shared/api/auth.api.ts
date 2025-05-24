import { http } from './http';

export const AuthApi = {
    requestCode(phone: string) {
        return http.post('/auth/request-code', { phone });
    },
    verifyCode(phone: string, code: string) {
        return http.post('/auth/verify-code', { phone, code });
    }
};
