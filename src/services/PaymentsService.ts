import { AxiosResponse } from "axios";
import { http } from "./Interceptor";

export class PaymentsService {

    STRIPE_URL: string = "https://api.stripe.com/v1";
    PAYMENTS_URL: string = "/payments";
    CREATE_SESSION: string = `${this.PAYMENTS_URL}/create-session`;
    CONFIRM_PAYMENT: string = `${this.PAYMENTS_URL}/confirm`;
    AI_PRO: string = `${this.PAYMENTS_URL}/ai-pro`;
    UPDATE_PAYMENT_DETAILS: string = `${this.PAYMENTS_URL}/update-payment-details`;

    async createSession(): Promise<AxiosResponse> {
        return await http.post(this.CREATE_SESSION);
    }

    async confirmPayment(): Promise<AxiosResponse> {
        return await http.post(`${this.CONFIRM_PAYMENT}`);
    }

    async cancelSubscription(): Promise<AxiosResponse> {
        return await http.delete(this.AI_PRO);
    }

    async reactivateSubscription(): Promise<AxiosResponse> {
        return await http.post(this.AI_PRO);
    }

    async requestPaymentDetailsUpdate(): Promise<AxiosResponse> {
        return await http.get(this.UPDATE_PAYMENT_DETAILS);
    }

}