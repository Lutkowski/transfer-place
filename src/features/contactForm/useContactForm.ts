import { ref, computed } from 'vue';
import {FeedbackApi} from "../../shared/api/feedback.api.ts";

export const useContactForm = () => {
    const name = ref('');
    const phone = ref('');
    const message = ref('');
    const submittedOnce = ref(false);

    const nameError = computed(() => {
        if (!submittedOnce.value) return '';
        if (!name.value.trim()) return 'Пожалуйста, введите имя';
        if (name.value.trim().length < 2) return 'Имя должно быть не менее 2 символов';
        return '';
    });

    const phoneError = computed(() => {
        if (!submittedOnce.value) return '';
        const digits = phone.value.replace(/\D/g, '');
        if (!digits) return 'Пожалуйста, введите номер телефона';
        if (!(digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8')))) {
            return 'Неверный формат телефона. Например: +7 999 999-99-99';
        }
        return '';
    });

    const messageError = computed(() => {
        if (!submittedOnce.value) return '';
        if (!message.value.trim()) return 'Введите ваш вопрос или комментарий';
        return '';
    });

    const isFormValid = computed(() => !nameError.value && !phoneError.value && !messageError.value);

    const submitForm = async () => {
        submittedOnce.value = true;
        if (!isFormValid.value) return;

        try {
            await FeedbackApi.create({
                name: name.value.trim(),
                phone: phone.value.trim(),
                message: message.value.trim(),
            });
            alert('Спасибо! Мы свяжемся с вами.');
            name.value = '';
            phone.value = '';
            message.value = '';
            submittedOnce.value = false;
        } catch (e) {
            alert('Ошибка отправки, попробуйте позже.');
            console.error(e);
        }
    };

    return {
        name,
        phone,
        message,
        nameError,
        phoneError,
        messageError,
        isFormValid,
        submitForm,
    };
};
