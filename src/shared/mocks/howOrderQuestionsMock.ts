import {IHowOrderQuestion} from "../../entities/howOrderQuestion/HowOrderQuestions.types";

export const howOrderQuestions: IHowOrderQuestion[] = [
    {
        img: {
            src: "/howOrder/oneTick.svg",
            alt: "Выбрать поездку"
        },
        index: 1,
        title: "выбрать поездку",
        content: "Выберите тип поездки, класс автомобиля и дополнительные услуги, которые вам нужны."
    },
    {
        img: {
            src: "/howOrder/twoTick.svg",
            alt: "Оформить заявку"
        },
        index: 2,
        title: "оформить заявку",
        content: "Заполните все необходимые данные о поездке, и наш менеджер свяжется с вами для подтверждения заказа."
    },
    {
        img: {
            src: "/howOrder/car.svg",
            alt: "Дождаться водителя"
        },
        index: 3,
        title: "дождаться водителя",
        content: "По прибытии наш водитель будет ожидать вас в указанном месте. Он позаботится о вашем комфорте и поможет с багажом."
    }

];
