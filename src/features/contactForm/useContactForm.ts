import {ref} from "vue";

export enum QuestionType {
    RENT = "Бронирование автомобиля",
    CANCEL = "Отмена заказа",
    QUESTION = "Задать вопрос",
}

export const useContactForm = () => {
    const chosenQuestionType = ref(QuestionType.RENT)
    const phone = ref('');
    const name = ref('');

    const submitForm = () => {
        console.log({
            type: chosenQuestionType.value,
            phone: phone.value,
            name: name.value,
        });
        // send
    };

    return {
        chosenQuestionType,
        phone,
        name,
        submitForm,
        QuestionType,
    };
}
