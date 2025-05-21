import { ref, computed } from "vue";

export enum QuestionType {
    RENT = "Бронирование автомобиля",
    CANCEL = "Отмена заказа",
    QUESTION = "Задать вопрос",
}

export const useContactForm = () => {
    const chosenQuestionType = ref(QuestionType.RENT);
    const phone = ref("");
    const name = ref("");

    const nameError = computed(() => {
        if (!name.value.trim()) {
            return "Пожалуйста, введите имя";
        }
        if (name.value.trim().length < 2) {
            return "Имя должно быть не менее 2 символов";
        }
        return "";
    });

    const phoneError = computed(() => {
        const digits = phone.value.replace(/\D/g, '');
        // Russian phone: 11 digits, starting with '7' or '8'
        if (!digits) {
            return "Пожалуйста, введите номер телефона";
        }
        if (!(digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8')))) {
            return "Неверный формат телефона. Например: +7 999 999-99-99";
        }
        return "";
    });

    const isFormValid = computed(() => {
        return !nameError.value && !phoneError.value;
    });

    const submitForm = () => {
        if (!isFormValid.value) return;

        console.log({
            type: chosenQuestionType.value,
            phone: phone.value,
            name: name.value,
        });
        // TODO: отправить данные на сервер
    };

    return {
        chosenQuestionType,
        phone,
        name,
        submitForm,
        QuestionType,
        nameError,
        phoneError,
        isFormValid,
    };
};
