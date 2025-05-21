import { http } from './http';
import {CreateFeedbackDto} from "./dto/create-feedback.dto";


export const FeedbackApi = {
    create(payload: CreateFeedbackDto) {
        return http.post('/contacts/feedback', payload);
    },
};
