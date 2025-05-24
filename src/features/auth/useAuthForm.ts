import { ref, computed } from 'vue';

export const usePhoneAuthForm = () => {
    const phone = ref('');
    const submittedOnce = ref(false);

    const phoneError = computed(() => {
        if (!submittedOnce.value) return '';
        const digits = phone.value.replace(/\D/g, '');
        if (!digits) return 'Пожалуйста, введите номер телефона';
        if (!(digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8')))) {
            return 'Неверный формат телефона. Например: +7 999 999-99-99';
        }
        return '';
    });

    const isPhoneValid = computed(() => !phoneError.value);

    return {
        phone,
        submittedOnce,
        phoneError,
        isPhoneValid,
    };
};
