import {Component} from "vue";
import Whatsapp from "../../shared/ui/Icons/Whatsapp.vue";
import Viber from "../../shared/ui/Icons/Viber.vue";

export interface IMessenger {
    name: string;
    link: string;
    icon: Component;
}

export const messengers: IMessenger[] = [
    {
        name: "Whatsapp",
        link: "https://wa.me/79103870199",
        icon: Whatsapp,
    },
    {
        name: "Viber",
        link: "viber://chat?number=%2B79103870199",
        icon: Viber,
    },
];

export type MessengerNames = (typeof messengers)[number]["name"];

