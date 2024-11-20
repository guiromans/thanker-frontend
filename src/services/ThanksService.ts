import { AxiosResponse } from "axios";
import { CreateThanksRequest, PrivacyType } from "../model/ThanksModel";
import { AuthService } from "./AuthService";
import { http } from "./Interceptor";
import { Language } from "./TranslationService";

export class ThanksService {

    THANKS_PATH: string = '/thanks';
    THANKS_PATH_FROM_USER: string = `${this.THANKS_PATH}/users/`

    authService: AuthService = new AuthService();

    async getThanksFrom(userId: string, page: number, size: number): Promise<AxiosResponse> {
        const pageParams = { page: page, size: size };

        return await http.get(`${this.THANKS_PATH_FROM_USER}${userId}`, { params: pageParams });
    }

    async giveThanksTo(thanksRequest: CreateThanksRequest, language: Language): Promise<AxiosResponse> {
        return await http.post(`${this.THANKS_PATH}?language=${language}`, thanksRequest);
    }

    async getGratitudeWallThanks(page: number, size: number): Promise<AxiosResponse> {
        return await http.get(`${this.THANKS_PATH}/gratitude-wall?page=${page}&size=${size}`);
    }

    async deleteById(thanksId: string): Promise<AxiosResponse> {
        return await http.delete(`${this.THANKS_PATH}/${thanksId}`)
    }

    async changePrivacy(thanksId: string, privacyType: PrivacyType): Promise<AxiosResponse> {
        const reqParams = { privacyType: privacyType };
        return await http.patch(`${this.THANKS_PATH}/${thanksId}`, null, {params: reqParams});
    }

    async sendPremiumEmail(thanksId: string): Promise<AxiosResponse> {
        return await http.post(`${this.THANKS_PATH}/${thanksId}/send-premium-email`);
    }

}